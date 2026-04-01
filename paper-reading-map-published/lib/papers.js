import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const LOCAL_VAULT_DIR = path.join(process.cwd(), 'obsidian', '001_Paper_note_in');
const STATUS_TOKENS = ['未读', '未读完', '已读', '已精读', '评估未读', 'AI读', '值得复盘', '粗读', '精读'];
const VENUE_HINTS = ['SIGCOMM','NSDI','ISCA','OSDI','ATC','EuroSys','FAST','SOSP','MICRO','ASPLOS','HPCA','INFOCOM','CoNEXT','MobiCom','NeurIPS','ICML','ICLR','CVPR','ICCV','ECCV','Trans'];

function getPapersDir() {
  return process.env.OBSIDIAN_PAPERS_DIR ? path.resolve(process.env.OBSIDIAN_PAPERS_DIR) : LOCAL_VAULT_DIR;
}

function normalizeSlug(fileName) {
  return fileName.replace(/^@/, '').replace(/\.md$/i, '');
}

function stripOuterQuotes(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

function cleanDisplayToken(value) {
  return stripOuterQuotes(value)
    .replace(/^#+/, '')
    .replace(/[\u3000]/g, ' ')
    .trim();
}

function splitLooseString(value) {
  const raw = stripOuterQuotes(value)
    .replace(/[\u3000]/g, ' ')
    .replace(/#/g, ' #')
    .replace(/[;；、]/g, ',');
  return raw
    .split(/[,\n]|\s{2,}/)
    .map((item) => item.trim())
    .filter(Boolean)
    .flatMap((item) => item.split(/\s+/).filter(Boolean))
    .map((item) => cleanDisplayToken(item))
    .filter(Boolean);
}

function safeArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return Array.from(new Set(value.map((item) => cleanDisplayToken(item)).filter(Boolean)));
  if (typeof value === 'string') return Array.from(new Set(splitLooseString(value)));
  return [cleanDisplayToken(String(value))].filter(Boolean);
}

function fallbackMatter(raw) {
  const lines = raw.split(/\r?\n/);
  if (lines[0]?.trim() !== '---') return { data: {}, content: raw };
  let end = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i].trim() === '---') {
      end = i;
      break;
    }
  }
  if (end === -1) return { data: {}, content: raw };
  const data = {};
  let currentKey = null;
  for (const line of lines.slice(1, end)) {
    if (/^\s*-\s+/.test(line) && currentKey) {
      data[currentKey] = data[currentKey] || [];
      data[currentKey].push(stripOuterQuotes(line.replace(/^\s*-\s+/, '')));
      continue;
    }
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    currentKey = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[currentKey] = value ? stripOuterQuotes(value) : '';
  }
  return { data, content: lines.slice(end + 1).join('\n') };
}

function parseFrontmatter(raw) {
  try {
    return matter(raw);
  } catch {
    return fallbackMatter(raw);
  }
}

function normalizeText(text) {
  return String(text || '')
    .replace(/\[\[([^\]|]+)(\|([^\]]+))?\]\]/g, (_, target, _unused, alias) => alias || target)
    .replace(/!?\[([^\]]*)\]\(([^)]+)\)/g, '$1')
    .replace(/^[-*]\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchInlineField(content, labels) {
  for (const label of labels) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`^\\s*(?:[-*]\\s*)?(?:${escaped})\\s*:{1,2}\\s*(.+)$`, 'im');
    const match = content.match(regex);
    if (match?.[1]) return normalizeText(match[1]);
  }
  return '';
}

function extractSection(content, labels) {
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const normalized = lines[i].replace(/^#+\s*/, '').trim();
    if (!labels.includes(normalized)) continue;
    const collected = [];
    for (let j = i + 1; j < lines.length; j += 1) {
      if (/^#+\s+/.test(lines[j]) || /^---\s*$/.test(lines[j])) break;
      collected.push(lines[j]);
    }
    const text = normalizeText(collected.join('\n'));
    if (text) return text;
  }
  return '';
}

function summarize(text, max = 90) {
  const clean = normalizeText(text);
  if (!clean) return '—';
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max).trim()}…`;
}

function compactValue(text) {
  const clean = normalizeText(text);
  return clean || '—';
}

function parseArrayLike(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return [];
  const trimmed = value.trim();
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(/\s*,\s*/).map((item) => stripOuterQuotes(item.trim())).filter(Boolean);
  }
  return [];
}

function normalizeLink(value) {
  const clean = stripOuterQuotes(value || '').trim();
  return clean && clean !== '—' ? clean : '';
}

function derivePaperUrl(data) {
  const direct = normalizeLink(data.paperUrl || data.url || data.paperURL || data.paperLink);
  if (direct) return direct;
  const doi = cleanDisplayToken(data.doi || data.DOI || '');
  if (doi) return `https://doi.org/${doi.replace(/^https?:\/\/doi\.org\//i, '')}`;
  return '';
}

function deriveObsidianUrl(data, slug) {
  const direct = normalizeLink(data.obsidianUrl || data.obsidianURL || data.noteUrl || data.noteURL);
  if (direct) return direct;
  const vault = process.env.OBSIDIAN_VAULT_NAME || '';
  if (!vault) return '';
  const filePath = encodeURIComponent(`001_Paper_note_in/@${slug}`);
  return `obsidian://open?vault=${encodeURIComponent(vault)}&file=${filePath}`;
}

function normalizeVenue(publicationTitle, explicitVenueTag) {
  const candidate = cleanDisplayToken(explicitVenueTag || publicationTitle || '');
  if (!candidate) return '—';
  const upper = candidate.toUpperCase();
  const hit = VENUE_HINTS.find((venue) => upper.includes(venue.toUpperCase()));
  return hit || candidate;
}

function normalizeAuthors(value) {
  return safeArray(value).map((author) => author.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

function safeYear(value) {
  const clean = cleanDisplayToken(value);
  if (!clean || clean.startsWith('Error:')) return '—';
  const match = clean.match(/\d{4}/);
  if (!match) return clean;
  return Number(match[0]);
}

function safeCreated(value) {
  const clean = cleanDisplayToken(value);
  if (!clean || clean.startsWith('Error:')) return '';
  return clean;
}

function deriveReadingStage(explicitStage, rawStatus) {
  const normalizedExplicit = cleanDisplayToken(explicitStage);
  if (normalizedExplicit) return normalizedExplicit;
  const status = safeArray(rawStatus);
  if (status.includes('值得复盘')) return '值得复盘';
  if (status.includes('已精读')) return '精读';
  if (status.includes('已读') || status.includes('AI读') || status.includes('未读完') || status.includes('没读实现和评估') || status.includes('评估未读')) return '粗读';
  return '未读';
}

function deriveRecommendation(explicitRecommendation, stage, pros, thoughts) {
  const normalized = cleanDisplayToken(explicitRecommendation);
  if (normalized) return normalized;
  const signal = `${pros} ${thoughts}`;
  if (stage === '值得复盘') return '高';
  if (stage === '精读' && normalizeText(signal).length > 40) return '高';
  if (stage === '精读' || stage === '粗读') return '中';
  return '低';
}

function deriveCoreValue(explicitValue, oneSentence, pros, thoughts) {
  if (cleanDisplayToken(explicitValue)) return compactValue(explicitValue);
  return summarize(oneSentence || pros || thoughts, 88);
}

function deriveBestToLearn(explicitValue, pros, thoughts, oneSentence) {
  if (cleanDisplayToken(explicitValue)) return compactValue(explicitValue);
  return summarize(pros || thoughts || oneSentence, 88);
}

function deriveTopics(data) {
  const topics = safeArray(data.topics);
  if (topics.length) return topics;
  const tags = safeArray(data.tags).filter((item) => !STATUS_TOKENS.includes(item));
  return tags;
}

function transformObsidianSyntax(markdown) {
  return String(markdown || '')
    .replace(/!\[\[paper_figure_attachments\/([^\]]+)\]\]/g, '![](/obsidian-assets/paper_figure_attachments/$1)')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '[$2](/papers/$1)')
    .replace(/\[\[([^\]]+)\]\]/g, '$1');
}

async function markdownToHtml(markdown) {
  if (!markdown) return '';
  const file = await remark().use(remarkGfm).use(remarkHtml).process(transformObsidianSyntax(markdown));
  return String(file);
}

function parsePaper(raw, fileName) {
  const { data, content } = parseFrontmatter(raw);
  const oneSentence =
    data.oneSentence ||
    matchInlineField(content, ['oneSentence', '一句话总结']) ||
    extractSection(content, ['一句话总结']);

  const pros =
    (Array.isArray(data.pros) ? data.pros.join('；') : data.pros) ||
    matchInlineField(content, ['pros', '优点', '优点 (Pros)', 'Pros']) ||
    extractSection(content, ['优点', '优点 (Pros)', 'Pros']);

  const cons =
    (Array.isArray(data.cons) ? data.cons.join('；') : data.cons) ||
    matchInlineField(content, ['cons', '缺点', '缺点 (Cons)', 'Cons']) ||
    extractSection(content, ['缺点', '缺点 (Cons)', 'Cons']);

  const thoughts =
    data.thoughts ||
    matchInlineField(content, ['thoughts', '感想', 'Thoughts']) ||
    extractSection(content, ['感想', 'Thoughts']);

  const status = safeArray(data.status);
  const readingStage = deriveReadingStage(data.readingStage, status);
  const recommendation = deriveRecommendation(data.recommendation, readingStage, pros, thoughts);
  const coreValue = deriveCoreValue(data.coreValue, oneSentence, pros, thoughts);
  const bestToLearn = deriveBestToLearn(data.bestToLearn, pros, thoughts, oneSentence);
  const publicationTitle = compactValue(data.publicationTitle || data.venue || '');
  const venueTag = normalizeVenue(publicationTitle, data.venueTag);

  return {
    slug: normalizeSlug(fileName),
    file: fileName.replace(/\.md$/i, ''),
    title: compactValue(data.title || normalizeSlug(fileName)),
    publicationTitle,
    venueTag,
    year: safeYear(data.year),
    created: safeCreated(data.created),
    topics: deriveTopics(data),
    tags: safeArray(data.tags),
    status,
    readingStage,
    recommendation,
    coreValue,
    bestToLearn,
    oneSentence: compactValue(oneSentence),
    pros: compactValue(pros),
    cons: compactValue(cons),
    thoughts: compactValue(thoughts),
    authors: normalizeAuthors(data.authors),
    zoteroLink: normalizeLink(data.zoteroLink),
    noteLink: normalizeLink(data.notelink || data.noteLink),
    paperUrl: derivePaperUrl(data),
    obsidianUrl: deriveObsidianUrl(data, normalizeSlug(fileName)),
    content,
  };
}

export async function getAllPapers() {
  const dir = getPapersDir();
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((file) => file.toLowerCase().endsWith('.md'));
  const papers = await Promise.all(
    files.map(async (fileName) => {
      const raw = fs.readFileSync(path.join(dir, fileName), 'utf8');
      const paper = parsePaper(raw, fileName);
      return {
        ...paper,
        html: await markdownToHtml(paper.content),
      };
    })
  );
  return papers.sort((a, b) => Number(b.year || 0) - Number(a.year || 0) || String(a.title).localeCompare(String(b.title), 'zh-CN'));
}

export async function getPaperBySlug(slug) {
  const papers = await getAllPapers();
  return papers.find((paper) => paper.slug === slug) || null;
}
