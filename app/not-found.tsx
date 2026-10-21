import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="utility-page">
      <section className="utility-hero compact"><div><p className="eyebrow">Page not found</p><h1>That page is not here.</h1><p>Return to the home page or explore our accounts payable support services.</p><div className="utility-actions"><Link className="button primary" href="/">Return home</Link><Link className="text-link" href="/services">Explore services</Link></div></div><img className="utility-visual" src="/visual/page-not-found-route" alt="Accounts payable route returning to an organized workflow" /></section>
    </main>
  );
}
