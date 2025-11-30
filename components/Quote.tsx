import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';
import { QuoteProps } from '../types';

export const Quote: React.FC<QuoteProps> = ({ text, author, context }) => {
  return (
    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 shadow-xl overflow-hidden group hover:border-brand-500/30 transition-all duration-300">
      <div className="absolute top-4 left-4 text-slate-700 opacity-20 group-hover:opacity-40 transition-opacity">
        <QuoteIcon size={64} />
      </div>
      <blockquote className="relative z-10 text-xl md:text-2xl font-medium text-slate-200 leading-relaxed italic">
        "{text}"
      </blockquote>
      {(author || context) && (
        <div className="relative z-10 mt-4 flex flex-col pl-4 border-l-2 border-brand-500">
          {author && <cite className="text-brand-400 not-italic font-semibold">{author}</cite>}
          {context && <span className="text-sm text-slate-500">{context}</span>}
        </div>
      )}
    </div>
  );
};
