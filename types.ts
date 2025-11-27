import { LucideIcon } from 'lucide-react';

export type ViewState = 'home' | 'login' | 'terms' | 'privacy' | 'cookies';

export interface NavItem {
  label: string;
  href: string;
  action?: ViewState;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}