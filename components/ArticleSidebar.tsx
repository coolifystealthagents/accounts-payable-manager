'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type TocItem = { id: string; label: string };
type RelatedItem = { href: string; label: string };

export function ArticleSidebar({ items, related, publishedAt, readTime, sourceLabel }: {
  items: TocItem[];
  related: RelatedItem[];
  publishedAt: string;
  readTime?: string;
  sourceLabel?: string;
}) {
  const [active, setActive] = useState(items[0]?.id || '');

  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="sidebar article-sidebar" aria-label="Article navigation and details">
      <div className="sidebar-scroll">
        <nav className="toc" aria-label="Table of contents">
          <strong>On this page</strong>
          {items.map((item) => <a className={active === item.id ? 'active' : ''} aria-current={active === item.id ? 'location' : undefined} key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </nav>
        <section className="sidebar-module" aria-labelledby="article-details-title">
          <h2 id="article-details-title">Article details</h2>
          <dl><div><dt>Published</dt><dd>{publishedAt}</dd></div>{readTime && <div><dt>Reading time</dt><dd>{readTime}</dd></div>}{sourceLabel && <div><dt>Primary source</dt><dd>{sourceLabel}</dd></div>}</dl>
        </section>
        <section className="sidebar-module" aria-labelledby="related-reading-title">
          <h2 id="related-reading-title">Related reading</h2>
          {related.map((item) => <p key={item.href}><Link href={item.href}>{item.label}</Link></p>)}
        </section>
        <Link className="button primary sidebar-cta" href="/contact-us">Discuss your workflow</Link>
      </div>
    </aside>
  );
}
