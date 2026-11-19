import type { Metadata } from 'next';
import Image from 'next/image';
import { blogPosts } from '@/lib/content';
import { media } from '@/lib/media';
import { CategoryFilter } from '@/components/CategoryFilter';
import { EditorialCard } from '@/components/EditorialCard';

export const metadata: Metadata = { title: 'Blog', description: 'Practical guides for controlled accounts payable preparation, delegation, and review.', alternates: { canonical: '/blog' } };
type BlogPageProps = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const params = await searchParams;
  const requestedCategory = Array.isArray(params.category) ? params.category[0] : params.category;
  const selectedCategory = requestedCategory && categories.includes(requestedCategory) ? requestedCategory : '';
  const filteredPosts = selectedCategory ? blogPosts.filter((post) => post.category === selectedCategory) : blogPosts;
  const dateLabel = (value: string) => new Date(`${value}T00:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero editorial-hero">
        <div><p className="eyebrow">Practical field notes</p><h1>Clearer payable operations.</h1><p>Detailed guides for finance teams that want controlled preparation without losing evidence, ownership, or approval authority.</p></div>
        <figure className="route-hero-image" data-reveal-media><Image src={media.blogHero.src} alt={media.blogHero.alt} fill preload sizes="(max-width: 1050px) 88vw, 44vw" style={{ objectPosition: media.blogHero.position }} /></figure>
      </header>
      <section className="content-wrap">
        <CategoryFilter
          basePath="/blog"
          queryKey="category"
          label="Blog categories"
          allLabel="All"
          total={blogPosts.length}
          selected={selectedCategory}
          items={categories.map((name) => ({ name, count: blogPosts.filter((post) => post.category === name).length }))}
        />
        <div className="article-grid editorial-card-grid">
          {filteredPosts.map((post) => <EditorialCard key={post.slug} href={`/blog/${post.slug}`} thumbnail={post.thumbnail || media.blogHero.src} imageAlt={`Accounts payable guide illustration for ${post.title}`} title={post.title} summary={post.description} category={post.category} publishedAt={post.publishedAt} publishedLabel={dateLabel(post.publishedAt)} readTime={post.readTime} actionLabel="Read article" />)}
        </div>
      </section>
    </main>
  );
}
