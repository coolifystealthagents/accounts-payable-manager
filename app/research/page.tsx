import type { Metadata } from 'next';
import Image from 'next/image';
import { researchPosts } from '@/lib/content';
import { media } from '@/lib/media';
import { CategoryFilter } from '@/components/CategoryFilter';
import { EditorialCard } from '@/components/EditorialCard';

export const metadata: Metadata = { title: 'Research', description: 'Source-led operational research for leaders designing controlled accounts payable support roles.', alternates: { canonical: '/research' } };
export default function ResearchPage() {
  const clusters = [...new Set(researchPosts.map((post) => post.cluster))];
  const dateLabel = (value: string) => new Date(`${value}T00:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero editorial-hero">
        <div><p className="eyebrow">Research library</p><h1>Evidence for better payable controls.</h1><p>Source-led briefs for examining accounts payable evidence, timing, custody, completeness, exception handling, and role boundaries.</p></div>
        <figure className="route-hero-image" data-reveal-media><Image src={media.researchHero.src} alt={media.researchHero.alt} fill preload sizes="(max-width: 1050px) 88vw, 44vw" style={{ objectPosition: media.researchHero.position }} /></figure>
      </header>
      <section className="content-wrap">
        <CategoryFilter
          basePath="/research"
          queryKey="cluster"
          label="Research categories"
          allLabel="All topics"
          total={researchPosts.length}
          items={clusters.map((name) => ({ name, count: researchPosts.filter((post) => post.cluster === name).length }))}
          gridClassName="content-grid editorial-card-grid"
        >
          {researchPosts.map((post) => <EditorialCard key={post.slug} href={`/research/${post.slug}`} thumbnail={post.thumbnail || media.researchHero.src} imageAlt={`Accounts payable research illustration for ${post.title}`} title={post.title} summary={post.summary} category={post.cluster} publishedAt={post.publishedAt} publishedLabel={dateLabel(post.publishedAt)} actionLabel="Review the brief" />)}
        </CategoryFilter>
      </section>
    </main>
  );
}
