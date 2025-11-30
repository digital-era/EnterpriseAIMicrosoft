import React from 'react';
import { ArrowDown, Cpu, Network, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent-purple/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-brand-400 mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          微软企业AI核心洞察
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-blue-100 to-slate-300 mb-6 leading-tight tracking-tight">
          AI 时代的企业战略<br />与<span className="text-brand-500">主权</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
           AI 革命如何重塑企业战略、未来工作模式以及知识产权的本质。
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
             <Network size={16} className="text-brand-500" />
             <span>AI 工厂</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
             <ShieldCheck size={16} className="text-accent-purple" />
             <span>模型即主权</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
             <Cpu size={16} className="text-accent-cyan" />
             <span>代理式工作流</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};
