import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar } from '@/components/ArticleSidebar';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  return post ? { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { images: [`/visual/${post.slug}`] } } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const tocItems = [
    ...post.sections.map((section) => ({ id: slugify(section.heading), label: section.heading })),
    { id: 'common-questions', label: 'Common questions' },
    { id: 'next-step', label: 'Plan the next step' }
  ];
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero editorial-hero">
        <div>
          <p className="eyebrow">Blog / {post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <p className="meta">{site.name} Editorial Team · Published {post.publishedAt} · {post.readTime}</p>
        </div>
        <img className="route-hero-image" src={`/visual/${post.slug}`} alt={`Accounts payable workflow illustration for ${post.title}`} />
      </header>
      <section className="content-wrap article-layout">
        <article className="prose article-prose">
          {post.sections.map((section, index) => (
            <section key={section.heading} id={slugify(section.heading)}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 2 && <p>Use the <Link href={post.internalService}>related specialist service role</Link> as a starting point for defining scope and evidence.</p>}
              {index === 4 && <p><a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> provides public guidance that can help your team test relevant workflow assumptions.</p>}
              {index === 6 && <p>Compare this approach with our guide to <Link href={post.internalSibling}>the next related workflow</Link>.</p>}
            </section>
          ))}
          <section id="common-questions"><h2>Common questions answered</h2>{post.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section>
          <section id="next-step"><h2>Ready to create a clearer support role?</h2><p>Bring the workflow that consumes the most attention. We will help you shape the role, handoff, decision boundaries, and review points.</p><Link id="cta-blog-final-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></section>
        </article>
        <ArticleSidebar items={tocItems} related={related.map((item) => ({ href: `/blog/${item.slug}`, label: item.title }))} publishedAt={post.publishedAt} readTime={post.readTime} sourceLabel={post.source.label} />
      </section>
    </main>
  );
}
