import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { FooterNav, PrimaryHeaderNav } from '@/components/SiteNavigation';

function SubsidiaryBrand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? ' inverse' : ''}`} href="/" aria-label={`${site.name} home`}>
      <Image src="/logo.svg" alt="" width={42} height={42} />
      <span>{site.name}</span>
    </Link>
  );
}

function PoweredBy({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`powered-by${inverse ? ' inverse' : ''}`} href="https://stealthagents.com" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents">
      <span>Powered by StealthAgents</span>
      <Image src="/brand/stealth-agents-logo-black.webp" alt="" width={119} height={40} />
    </a>
  );
}

export function Header() {
  return (
    <header data-site-header="sticky" className="site-header">
      <SubsidiaryBrand />
      <PrimaryHeaderNav />
      <PoweredBy />
    </header>
  );
}

export function Footer() {
  return (
    <footer data-site-footer="true" className="site-footer">
      <div className="footer-brand">
        <SubsidiaryBrand inverse />
        <p>Specialist remote staff for {site.audience}.</p>
        <PoweredBy inverse />
      </div>
      <FooterNav />
      <section className="site-parent-company" aria-label="Powered by StealthAgents"><a className="site-parent-logo" href="https://stealthagents.com/" aria-label="Visit StealthAgents"><img src="/stealthagents-parent-logo.png" alt="StealthAgents" width="158" height="53" loading="lazy" /></a><div><h2>Powered by StealthAgents</h2><p>StealthAgents recruits and supports the remote professionals behind our services, from matching and onboarding to ongoing team support.</p><a className="site-parent-link" href="https://stealthagents.com/">Explore StealthAgents ↗</a></div></section><p className="copyright">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
