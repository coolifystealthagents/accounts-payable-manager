import Image from 'next/image';
import Link from 'next/link';

export type EditorialCardProps = {
  href: string;
  thumbnail: string;
  imageAlt: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  publishedLabel: string;
  readTime?: string;
  actionLabel: string;
};

export function EditorialCard({ href, thumbnail, imageAlt, title, summary, category, publishedAt, publishedLabel, readTime, actionLabel }: EditorialCardProps) {
  return (
    <article className="editorial-card" data-category={category}>
      <div className="editorial-card-image">
        <Image src={thumbnail} alt={imageAlt} fill unoptimized={thumbnail.startsWith('/visual/')} sizes="(max-width: 650px) 90vw, (max-width: 900px) 44vw, 30vw" />
      </div>
      <div className="editorial-card-content">
        <span className="pill editorial-card-category">{category}</span>
        <h2><Link href={href}>{title}</Link></h2>
        <p>{summary}</p>
        <div className="meta editorial-card-meta">
          <time dateTime={publishedAt}>{`Published ${publishedLabel}`}</time>
          {readTime ? <span>{readTime}</span> : null}
        </div>
        <Link className="text-link editorial-card-action" href={href}>{actionLabel}</Link>
      </div>
    </article>
  );
}
