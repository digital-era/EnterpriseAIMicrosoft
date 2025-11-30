import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

export const BubbleComparisonChart: React.FC = () => {
  const data = [
    {
      name: '.com 泡沫',
      value: 30,
      description: '供给 > 需求 (暗光纤)',
      color: '#475569' // slate-600
    },
    {
      name: 'AI 时代',
      value: 95,
      description: '需求 > 供给 (算力短缺)',
      color: '#3b82f6' // brand-500
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-lg">
          <p className="text-slate-200 font-bold">{payload[0].payload.name}</p>
          <p className="text-brand-400 text-sm">{payload[0].payload.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-64 w-full bg-slate-900/50 rounded-xl p-4 border border-slate-800">
      <h3 className="text-center text-slate-400 text-sm mb-4 font-semibold uppercase tracking-wider">市场动态对比</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" stroke="#94a3b8" width={80} tick={{fontSize: 12}} />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="description" position="insideLeft" fill="#fff" fontSize={12} offset={10} style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const TechStackDiagram: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md mx-auto my-8 font-mono text-sm">
        <div className="text-center text-slate-500 text-xs uppercase tracking-widest mb-2">微软 AI 平台战略层</div>
        
        {/* Top Layer */}
        <div className="bg-gradient-to-r from-purple-900/50 to-purple-600/50 border border-purple-500/30 p-4 rounded-lg text-center backdrop-blur-sm hover:border-purple-400 transition-colors cursor-default">
            <h4 className="text-purple-300 font-bold">3. 应用业务 (App)</h4>
            <p className="text-xs text-slate-400 mt-1">Copilot, 垂直应用 (健康/科学)</p>
        </div>

        {/* Connection */}
        <div className="h-4 w-0.5 bg-slate-700 mx-auto"></div>

        {/* Middle Layer */}
        <div className="bg-gradient-to-r from-blue-900/50 to-blue-600/50 border border-blue-500/30 p-4 rounded-lg text-center backdrop-blur-sm hover:border-blue-400 transition-colors cursor-default">
             <h4 className="text-blue-300 font-bold">2. 应用服务器 (Agent Factory)</h4>
             <p className="text-xs text-slate-400 mt-1">每个 Token 的价值最大化</p>
        </div>

        {/* Connection */}
        <div className="h-4 w-0.5 bg-slate-700 mx-auto"></div>

        {/* Bottom Layer */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-cyan-600/50 border border-cyan-500/30 p-4 rounded-lg text-center backdrop-blur-sm hover:border-cyan-400 transition-colors cursor-default">
            <h4 className="text-cyan-300 font-bold">1. 基础设施 (Token Factory)</h4>
            <p className="text-xs text-slate-400 mt-1">每瓦特/每美元生成的 Token 数</p>
        </div>
    </div>
  )
}
