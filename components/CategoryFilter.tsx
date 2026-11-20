'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import type { ReactNode } from 'react';

export type CategoryFilterItem = { name: string; count: number };

type CategoryFilterProps = {
  basePath: string;
  queryKey: string;
  label: string;
  allLabel?: string;
  total: number;
  items: CategoryFilterItem[];
  gridClassName: string;
  children: ReactNode;
};

export function CategoryFilter({ basePath, queryKey, label, allLabel = 'All topics', total, items, gridClassName, children }: CategoryFilterProps) {
  const [selected, setSelected] = useState('');
  const gridRef = useRef<HTMLDivElement>(null);

  const filterCards = (category: string) => {
    gridRef.current?.querySelectorAll<HTMLElement>('.editorial-card').forEach((card) => {
      card.hidden = Boolean(category) && card.dataset.category !== category;
    });
  };

  useEffect(() => {
    const syncFromUrl = () => {
      const requested = new URLSearchParams(window.location.search).get(queryKey) || '';
      const category = items.some((item) => item.name === requested) ? requested : '';
      setSelected(category);
      filterCards(category);
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [items, queryKey]);

  const selectCategory = (event: MouseEvent<HTMLAnchorElement>, category: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    if (category) params.set(queryKey, category);
    else params.delete(queryKey);
    const query = params.toString();
    window.history.pushState(null, '', query ? `${basePath}?${query}` : basePath);
    setSelected(category);
    filterCards(category);
  };

  return (
    <>
      <nav className="category-navigation" aria-label={label}>
        <Link className={`pill category-chip${selected ? '' : ' is-active'}`} href={basePath} prefetch={false} aria-current={selected ? undefined : 'page'} onClick={(event) => selectCategory(event, '')}>
          {allLabel} <span>({total})</span>
        </Link>
        {items.map(({ name, count }) => (
          <Link
            className={`pill category-chip${selected === name ? ' is-active' : ''}`}
            href={`${basePath}?${queryKey}=${encodeURIComponent(name)}`}
            prefetch={false}
            aria-current={selected === name ? 'page' : undefined}
            onClick={(event) => selectCategory(event, name)}
            key={name}
          >
            {name} <span>({count})</span>
          </Link>
        ))}
      </nav>
      <div className={gridClassName} ref={gridRef}>{children}</div>
    </>
  );
}
