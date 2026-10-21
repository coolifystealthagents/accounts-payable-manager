import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar } from '@/components/ArticleSidebar';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  return post ? { title: post.title, description: post.summary, alternates: { canonical: `/research/${post.slug}` }, openGraph: { images: [`/visual/${post.slug}`] } } : {};
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();
  const related = researchPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const sections = post.sections?.length ? post.sections : [
    { heading: 'Question and operating context', paragraphs: [post.summary, 'The useful question is not whether every administrative step can be delegated. It is which preparation can be made repeatable while the accountable owner retains judgment, approval, and exception decisions.'] },
    { heading: 'What the finding means', paragraphs: [post.finding, 'A visible boundary should identify the source record, expected output, reviewer, and point where an exception changes hands.'] },
    { heading: 'Evidence to retain', paragraphs: ['Keep the approved source, retrieval or receipt context, applied checklist, current owner, and unresolved exception visible. This allows a reviewer to understand both the result and how it was prepared.', 'Missing evidence should remain visible. It should not be inferred, silently replaced, or converted into a confident status.'] },
    { heading: 'Decision boundaries', paragraphs: ['Remote support can prepare records, organize evidence, maintain approved operational statuses, and route questions. Accounting treatment, approval, vendor-sensitive changes, payment authority, and policy exceptions remain with authorized personnel.', 'The workflow should state what the specialist may complete, when work must pause, and who resolves each exception type.'] },
    { heading: 'How to apply the brief', paragraphs: ['Test the control on one defined population before expanding it. Review a focused sample for source completeness, field consistency, owner clarity, and correct escalation.', 'Update the checklist when repeated exceptions reveal an unclear rule or weak source. Expansion should follow evidence that the initial workflow is stable.'] }
  ];
  const tocItems = [
    ...sections.map((section) => ({ id: slugify(section.heading), label: section.heading })),
    { id: 'method-note', label: 'Method note' },
    { id: 'sources', label: 'Sources' },
    ...(post.faq?.length ? [{ id: 'common-questions', label: 'Common questions' }] : []),
    { id: 'next-step', label: 'Apply the research' }
  ];
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero editorial-hero">
        <div>
          <p className="eyebrow">Research / {post.cluster}</p>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <p className="meta">{site.name} Editorial Team · Published {post.publishedAt}</p>
        </div>
        <img className="route-hero-image" src={`/visual/${post.slug}`} alt={`Accounts payable research illustration for ${post.title}`} />
      </header>
      <section className="content-wrap article-layout">
        <article className="prose article-prose">
          <p className="research-finding"><strong>Finding:</strong> {post.finding}</p>
          {sections.map((section) => <section key={section.heading} id={slugify(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <section id="method-note"><h2>Method note</h2><p>{post.methodology || 'This brief translates recurring control themes from the cited public sources into a practical administrative workflow. It does not claim a universal staffing ratio, performance target, accounting conclusion, or compliance determination.'}</p></section>
          <section className="sources" id="sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></section>
          {post.faq?.length ? <section id="common-questions"><h2>Common questions answered</h2>{post.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section> : null}
          <section id="next-step"><h2>Apply the research to your workflow</h2><p>Bring one defined queue, its source records, current owners, approval boundary, and recurring exceptions. We can help turn that evidence into a focused support role.</p><Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow in a free call</Link></section>
        </article>
        <ArticleSidebar items={tocItems} related={related.map((item) => ({ href: `/research/${item.slug}`, label: item.title }))} publishedAt={post.publishedAt} sourceLabel={post.sources[0]?.label} />
      </section>
    </main>
  );
}
