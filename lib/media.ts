export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

export const media = {
  homeHero: { src: '/images/apm/pexels-7731358.webp', alt: 'Invoice documents and a laptop during a working review', width: 2400, height: 1586, position: '52% center' },
  homeSupport: { src: '/images/apm/pexels-3756678.webp', alt: 'A professional receiving a document across a desk', width: 2400, height: 1600, position: '50% 42%' },
  servicesHero: { src: '/images/apm/pexels-7845359.webp', alt: 'Two professionals reviewing business paperwork together', width: 2400, height: 1600, position: '52% center' },
  blogHero: { src: '/images/apm/pexels-7693683.webp', alt: 'Working documents arranged beside an open laptop', width: 2400, height: 1600, position: '50% 55%' },
  researchHero: { src: '/images/apm/pexels-3184292.webp', alt: 'Professionals examining printed charts around a table', width: 2400, height: 1350, position: '50% center' },
  thanksNext: { src: '/images/apm/pexels-3931504.webp', alt: 'A professional team preparing for a working meeting', width: 2400, height: 1600, position: '50% center' },
  officialTeam: { src: '/brand/stealth-agents-team-bacolod.png', alt: 'StealthAgents team members together in the Bacolod office', width: 953, height: 540, position: '50% center' }
} satisfies Record<string, MediaAsset>;

export const serviceMedia: Record<string, MediaAsset> = {
  'invoice-intake': { src: '/images/apm/pexels-12911217.webp', alt: 'A professional reviewing printed business documents', width: 2000, height: 3000, position: '50% 35%' },
  'three-way-match-support': { src: '/images/apm/pexels-8518624.webp', alt: 'Two professionals checking documents at a desk', width: 2000, height: 3000, position: '50% 38%' },
  'vendor-record-upkeep': { src: '/images/apm/pexels-7433874.webp', alt: 'Professionals discussing a business document in an office', width: 2400, height: 1600, position: '50% center' },
  'approval-routing': { src: '/images/apm/pexels-12903281.webp', alt: 'Professionals mapping a document workflow on an office wall', width: 2000, height: 3000, position: '50% 52%' },
  'payment-run-preparation': { src: '/images/apm/pexels-5583965.webp', alt: 'A professional arranging records beside a laptop', width: 2400, height: 1448, position: '50% center' },
  'ap-reporting-support': { src: '/images/apm/pexels-36764804.webp', alt: 'A professional reviewing information on a computer screen', width: 2400, height: 1350, position: '50% center' }
};
