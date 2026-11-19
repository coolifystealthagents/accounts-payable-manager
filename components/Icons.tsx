export function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }
export function CheckIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>; }
export function SparkIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" /></svg>; }

export type ServiceIconName = 'invoice' | 'match' | 'vendor' | 'approval' | 'payment' | 'report';

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const paths: Record<ServiceIconName, React.ReactNode> = {
    invoice: <><path d="M7 3.75h7l4 4v12.5H7z" /><path d="M14 3.75v4h4M10 12h5M10 15.5h5" /></>,
    match: <><path d="M4.5 6.5h9M4.5 12h5M4.5 17.5h5" /><path d="m13 15.5 2.5 2.5 4.5-5" /><path d="M3.5 4.5h11v4h-11z" /></>,
    vendor: <><path d="M4 20V8l8-4 8 4v12" /><path d="M8 20v-5h8v5M8 9.5h.01M12 9.5h.01M16 9.5h.01" /></>,
    approval: <><circle cx="6" cy="6" r="2" /><circle cx="18" cy="12" r="2" /><circle cx="6" cy="18" r="2" /><path d="M8 6h3a3 3 0 0 1 3 3v3M8 18h3a3 3 0 0 0 3-3v-3" /></>,
    payment: <><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M3.5 9h17M7.5 14.5h4M16.5 14.5h.01" /></>,
    report: <><path d="M4 20V4M4 20h16" /><path d="m7 15 4-4 3 2 5-6" /><path d="M16 7h3v3" /></>
  };

  return <svg className="service-icon-art" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

const serviceIconBySlug: Record<string, ServiceIconName> = {
  'invoice-intake': 'invoice',
  'three-way-match-support': 'match',
  'vendor-record-upkeep': 'vendor',
  'approval-routing': 'approval',
  'payment-run-preparation': 'payment',
  'ap-reporting-support': 'report',
};

export function ServiceRoleIcon({ slug }: { slug: string }) {
  return <ServiceIcon name={serviceIconBySlug[slug] ?? 'report'} />;
}
