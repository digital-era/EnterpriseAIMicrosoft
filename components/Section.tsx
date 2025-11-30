import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ id, title, icon: Icon, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 border-b border-slate-800/50 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          {Icon && <div className="p-2 bg-brand-900/30 rounded-lg text-brand-500"><Icon size={28} /></div>}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">{title}</h2>
        </div>
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
};
