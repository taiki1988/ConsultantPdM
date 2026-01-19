
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
