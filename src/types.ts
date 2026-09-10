export interface ServiceCapability {
  id: string;
  title: string;
  subtitle: string;
  priceTag: string;
  description: string;
  technologies: string[];
  colorAccent: 'gold' | 'emerald' | 'violet' | 'wine';
  features: string[];
  typicalTimeline: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  statusBadge: string;
  categoryBadge: string;
  metrics: {
    value: string;
    label: string;
  }[];
  architecture: {
    backend: string;
    database: string;
    aiModel: string;
    highlights: string[];
  };
}

export interface AcceleratorProduct {
  id: string;
  code: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  stats: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  demoFeatures: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EstimateFormState {
  service: string;
  budget: string;
  fullName: string;
  email: string;
  phone: string;
  scope: string;
}
