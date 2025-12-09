import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface FinancialMetric {
  symbol: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}