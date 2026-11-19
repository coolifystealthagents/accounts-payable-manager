import Link from 'next/link';

export type CategoryFilterItem = { name: string; count: number };

type CategoryFilterProps = {
  basePath: string;
  queryKey: string;
  label: string;
  allLabel?: string;
  total: number;
  selected: string;
  items: CategoryFilterItem[];
};

export function CategoryFilter({ basePath, queryKey, label, allLabel = 'All topics', total, selected, items }: CategoryFilterProps) {
  return (
    <nav className="category-navigation" aria-label={label}>
      <Link className={`pill category-chip${selected ? '' : ' is-active'}`} href={basePath} prefetch={false} aria-current={selected ? undefined : 'page'}>
        {allLabel} <span>({total})</span>
      </Link>
      {items.map(({ name, count }) => (
        <Link
          className={`pill category-chip${selected === name ? ' is-active' : ''}`}
          href={`${basePath}?${queryKey}=${encodeURIComponent(name)}`}
          prefetch={false}
          aria-current={selected === name ? 'page' : undefined}
          key={name}
        >
          {name} <span>({count})</span>
        </Link>
      ))}
    </nav>
  );
}
