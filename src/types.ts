export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string | null;
  accent: 'gold' | 'emerald' | 'violet' | 'wine' | 'cyan';
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  difference?: string;
  headline?: string;
  clientTestimonial?: string;
  clientAuthor?: string;
  clientRole?: string;
  clientLogo?: string;
  images: ProjectImage[];
  tags: string[];
  statusBadge: string;
  categoryBadge: string;
  metrics: {
    value: string;
    label: string;
  }[];
  accent: 'gold' | 'emerald' | 'violet' | 'wine';
}

export interface ClientStory {
  id: string;
  number: string;
  clientName: string;
  industry: string;
  headline: string;
  problem: string;
  solution: string;
  difference: string;
  testimonial: string;
  highlightMetric?: {
    value: string;
    label: string;
  };
  logo: string;
  accent: 'emerald' | 'gold' | 'violet' | 'wine';
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  accent: 'gold' | 'emerald' | 'violet' | 'wine' | 'cyan' | 'burgundy';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: 'gold' | 'emerald' | 'violet' | 'wine';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EstimateFormState {
  service: string;
  fullName: string;
  email: string;
  phone: string;
  scope: string;
}
