import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
