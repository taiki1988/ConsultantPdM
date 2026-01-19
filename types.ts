
export interface Service {
  title: string;
  desc: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  role: string;
  results: string[];
  tags: string[];
  image: string;
  url?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ProfileData {
  title: string;
  description: string;
  image: string;
  years: string;
  yearsLabel: string;
  strengths: {
    title: string;
    description: string;
  }[];
}
