import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const localVaultTarget = path.join(projectRoot, 'obsidian', '001_Paper_note_in');
const attachmentsFolderName = 'paper_figure_attachments';

function parseDotEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, 'utf8');
  const result = {};
  for (const line of raw.split(/\r?\n/)) {
    if (!line || /^\s*#/.test(line)) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
    result[key] = value;
  }
  return result;
}

function resolveSourceDir() {
  const env = {
    ...parseDotEnv(path.join(projectRoot, '.env.local')),
    ...parseDotEnv(path.join(projectRoot, '.env')),
    ...process.env,
  };
  const configured = env.OBSIDIAN_PAPERS_DIR;
  if (!configured) return null;
  return path.resolve(configured);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function clearDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

function copyDirectory(source, target) {
  ensureDir(target);
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

const sourceDir = resolveSourceDir();
if (!sourceDir) {
  console.log('[sync-obsidian] OBSIDIAN_PAPERS_DIR not set. Skip syncing.');
  process.exit(0);
}

if (!fs.existsSync(sourceDir)) {
  console.error(`[sync-obsidian] Source folder not found: ${sourceDir}`);
  process.exit(1);
}

ensureDir(localVaultTarget);
clearDirectory(localVaultTarget);

for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
  const sourcePath = path.join(sourceDir, entry.name);
  const targetPath = path.join(localVaultTarget, entry.name);
  if (entry.isDirectory()) {
    if (entry.name === attachmentsFolderName) {
      copyDirectory(sourcePath, targetPath);
    }
    continue;
  }
  if (entry.name.toLowerCase().endsWith('.md')) {
    fs.copyFileSync(sourcePath, targetPath);
  }
}

console.log(`[sync-obsidian] Synced notes from ${sourceDir} to ${localVaultTarget}`);
