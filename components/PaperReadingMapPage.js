'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const stageTone = {
  未读: 'chip chip-neutral',
  粗读: 'chip chip-sky',
  精读: 'chip chip-violet',
  值得复盘: 'chip chip-rose',
};

function topicTone(i) {
  const tones = ['chip chip-emerald', 'chip chip-cyan', 'chip chip-teal', 'chip chip-lime', 'chip chip-orange', 'chip chip-blue'];
  return tones[i % tones.length];
}

function StatCard({ label, value, hint }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {hint ? <div className="stat-hint">{hint}</div> : null}
    </div>
  );
}

function formatListText(text) {
  if (!text) return '—';
  return String(text).replace(/(?:;|；)?[ \t]+(?=\d+\.)/g, '\n').trim();
}

function sentencePreview(text, dense) {
  return dense ? 'cell-clamp cell-clamp-3' : 'cell-wrap';
}

export default function PaperReadingMapPage({ initialPapers }) {
  const [query, setQuery] = useState('');
  const [venue, setVenue] = useState('all');
  const [stage, setStage] = useState('all');
  const [topic, setTopic] = useState('all');
  const [density, setDensity] = useState('comfortable');
  const [expanded, setExpanded] = useState('');

  const venues = useMemo(() => Array.from(new Set(initialPapers.map((p) => p.venueTag).filter(Boolean))), [initialPapers]);
  const stages = useMemo(() => Array.from(new Set(initialPapers.map((p) => p.readingStage).filter(Boolean))), [initialPapers]);
  const topics = useMemo(() => Array.from(new Set(initialPapers.flatMap((p) => p.topics || []))), [initialPapers]);

  const papers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initialPapers.filter((paper) => {
      const searchable = [
        paper.title,
        paper.venueTag,
        paper.oneSentence,
        paper.pros,
        paper.cons,
        paper.thoughts,
        paper.readingStage,
        ...(paper.topics || []),
      ]
        .join(' ')
        .toLowerCase();

      return (!q || searchable.includes(q))
        && (venue === 'all' || paper.venueTag === venue)
        && (stage === 'all' || paper.readingStage === stage)
        && (topic === 'all' || (paper.topics || []).includes(topic));
    });
  }, [initialPapers, query, venue, stage, topic]);

  return (
    <main className="page-shell">
      <div className="page-container">
        <section className="hero-block">
          <h1 className="page-title">Paper Reading Map</h1>
          <p className="page-intro">
            paper reading and learning of networking of performance / system / architecture / hardware
          </p>
        </section>

        <section className="stats-grid">
          <StatCard label="paper notes" value={initialPapers.length} hint="当前已纳入的论文笔记" />
          <StatCard label="venues" value={venues.length} hint="可按会议快速筛选" />
          <StatCard label="topics" value={topics.length} hint="主题覆盖范围" />
          <StatCard label="deep reads" value={initialPapers.filter((p) => p.readingStage === '精读').length} hint="已进入精读的笔记" />
        </section>

        <section className="toolbar-card">
          <div className="toolbar-grid compact-grid">
            <div className="toolbar-field toolbar-search">
              <label>Search</label>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title, topic, venue, summary..." />
            </div>
            <div className="toolbar-field">
              <label>Venue</label>
              <select value={venue} onChange={(e) => setVenue(e.target.value)}>
                <option value="all">All venues</option>
                {venues.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <div className="toolbar-field">
              <label>Reading stage</label>
              <select value={stage} onChange={(e) => setStage(e.target.value)}>
                <option value="all">All stages</option>
                {stages.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <div className="toolbar-field">
              <label>Topic</label>
              <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="all">All topics</option>
                {topics.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
          </div>
          <div className="toolbar-bottom">
            <div className="toolbar-result">{papers.length} results</div>
            <div className="toolbar-actions">
              <button className={density === 'compact' ? 'mode-btn active' : 'mode-btn'} onClick={() => setDensity('compact')}>Compact</button>
              <button className={density === 'comfortable' ? 'mode-btn active' : 'mode-btn'} onClick={() => setDensity('comfortable')}>Comfortable</button>
              <button className="reset-btn" onClick={() => { setQuery(''); setVenue('all'); setStage('all'); setTopic('all'); }}>Reset filters</button>
            </div>
          </div>
        </section>

        <section className="table-card">
          <div className="table-scroll">
            <table className="papers-table main-table">
              <thead>
                <tr>
                  <th className="title-col">标题</th>
                  <th className="year-col">时间</th>
                  <th className="venue-col">会议/刊</th>
                  <th className="topics-col">主题</th>
                  <th className="stage-col">阅读阶段</th>
                  <th className="sentence-col">一句话描述</th>
                </tr>
              </thead>
              <tbody>
                {papers.map((paper, index) => {
                  const isExpanded = expanded === paper.slug;
                  const compact = density === 'compact';
                  const titleHref = paper.paperUrl || `/papers/${paper.slug}`;
                  const titleExternal = Boolean(paper.paperUrl);
                  const showDeepNote = paper.readingStage === '精读' || (paper.status || []).some((item) => String(item).includes('精读'));

                  return (
                    <>
                      <tr key={paper.slug} className={index % 2 ? 'row-alt' : ''}>
                        <td className={`title-cell ${compact ? 'compact-cell' : ''}`}>
                          <div className="title-cell-wrap">
                            <button className="expand-toggle" onClick={() => setExpanded(isExpanded ? '' : paper.slug)} aria-label={isExpanded ? '收起' : '展开'}>
                              {isExpanded ? '−' : '+'}
                            </button>
                            <div className="title-main">
                              {titleExternal ? (
                                <a href={titleHref} target="_blank" rel="noreferrer" className="title-link">{paper.title}</a>
                              ) : (
                                <Link href={titleHref} className="title-link">{paper.title}</Link>
                              )}
                              <div className="title-subactions">
                                <Link href={`/papers/${paper.slug}`} className="subaction-link">复盘页</Link>
                                {showDeepNote ? <Link href={`/papers/${paper.slug}`} className="subaction-link">精读笔记</Link> : null}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-label="时间">{paper.year || '—'}</td>
                        <td data-label="会议/刊" className="venue-text">{paper.venueTag || '—'}</td>
                        <td data-label="主题">
                          <div className="chips-wrap">
                            {(paper.topics || []).slice(0, compact ? 2 : 4).map((item, i) => (
                              <span key={item} className={topicTone(i)}>{item}</span>
                            ))}
                            {compact && (paper.topics || []).length > 2 ? <span className="more-chip">+{paper.topics.length - 2}</span> : null}
                          </div>
                        </td>
                        <td data-label="阅读阶段">
                          <span className={stageTone[paper.readingStage] || 'chip chip-neutral'}>{paper.readingStage || '—'}</span>
                        </td>
                        <td data-label="一句话描述">
                          <div className={sentencePreview(paper.oneSentence, compact)}>{paper.oneSentence || '—'}</div>
                        </td>
                      </tr>
                      {isExpanded ? (
                        <tr className="expand-row">
                          <td colSpan={6}>
                            <div className="expand-meta slim-expand-meta">
                              <span className={stageTone[paper.readingStage] || 'chip chip-neutral'}>{paper.readingStage || '—'}</span>
                              {paper.venueTag ? <span className="chip chip-neutral">会议：{paper.venueTag}</span> : null}
                              {paper.paperUrl ? <a className="chip chip-link" href={paper.paperUrl} target="_blank" rel="noreferrer">论文主页</a> : null}
                              {showDeepNote ? <Link className="chip chip-link" href={`/papers/${paper.slug}`}>打开精读页</Link> : null}
                            </div>
                            <div className="expand-grid compact-expand-grid">
                              <div className="detail-card"><div className="detail-label">优点</div><p>{formatListText(paper.pros)}</p></div>
                              <div className="detail-card"><div className="detail-label">缺点</div><p>{formatListText(paper.cons)}</p></div>
                              <div className="detail-card"><div className="detail-label">感想</div><p>{formatListText(paper.thoughts)}</p></div>
                            </div>
                          </td>
                        </tr>
                      ) : null}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
