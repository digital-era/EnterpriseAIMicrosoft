import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id: string;
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface QuoteProps {
  text: string;
  author?: string;
  context?: string;
}