export interface ProductHero {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  tagline: string;
  ctaText: string;
  badge: string;
  description: string;
  metrics: { label: string; value: string }[];
}

export interface FeatureItem {
  id: string;
  routePath: string;
  category: 'finance' | 'community' | 'security';
  title: string;
  description: string;
  highlight: string;
  serviceName: string;
  iconPath: string;
}

export interface CommunityProject {
  id: string;
  name: string;
  location: string;
  towers: number;
  units: number;
  occupied: number;
  collectionRate: number;
  openSnags: number;
  status: 'Handover Phase' | 'Active Maintenance' | 'Pre-Possession';
}
