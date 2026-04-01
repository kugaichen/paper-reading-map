import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPapers, getPaperBySlug } from '@/lib/papers';

export async function generateStaticParams() {
  const papers = await getAllPapers();
  return papers.map((paper) => ({ slug: paper.slug }));
}

export default async function PaperDetailPage({ params }) {
  const paper = await getPaperBySlug(params.slug);
  if (!paper) notFound();

  return (
    <main className="detail-shell">
      <div className="detail-container">
        <Link href="/" className="back-link">← 返回 Paper Reading Map</Link>
        <div className="detail-header">
          <div className="meta-row">
            <span>{paper.year || '—'}</span>
            <span>{paper.venueTag || '—'}</span>
            <span>{paper.readingStage || '未标记'}</span>
          </div>
          <h1>{paper.title}</h1>
          {paper.authors?.length ? <p className="authors">{paper.authors.join(' · ')}</p> : null}
          <div className="tag-row">
            {(paper.topics || []).map((topic) => (
              <span key={topic} className="topic-chip">{topic}</span>
            ))}
          </div>
          <div className="meta-row actions-row">
            {paper.paperUrl ? <a href={paper.paperUrl} target="_blank" rel="noreferrer" className="ext-link">打开论文主页</a> : null}
            {paper.zoteroLink ? <a href={paper.zoteroLink} className="ext-link">Open in Zotero</a> : null}
            {paper.obsidianUrl ? <a href={paper.obsidianUrl} className="ext-link">Open in Obsidian</a> : null}
          </div>
        </div>

        <section className="detail-grid compact-detail-grid">
          <div className="detail-card">
            <h3>一句话描述</h3>
            <p>{paper.oneSentence || '—'}</p>
          </div>
          <div className="detail-card">
            <h3>优点</h3>
            <p>{paper.pros || '—'}</p>
          </div>
          <div className="detail-card">
            <h3>缺点</h3>
            <p>{paper.cons || '—'}</p>
          </div>
          <div className="detail-card detail-card-wide">
            <h3>感想</h3>
            <p>{paper.thoughts || '—'}</p>
          </div>
        </section>

        {paper.html ? (
          <article className="detail-article" dangerouslySetInnerHTML={{ __html: paper.html }} />
        ) : null}
      </div>
    </main>
  );
}
