import React from 'react';
import { Factory, Brain, History, Layout, ShoppingBag, Database, Lock, Users, Zap, FileCode, Github } from 'lucide-react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { Quote } from './components/Quote';
import { BubbleComparisonChart, TechStackDiagram } from './components/ChartComponents';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <Navigation />
      <Hero />

      {/* Executive Summary Section - Implicitly part of Hero flow or separate block */}
      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="text-yellow-500" size={20} />
            执行摘要
          </h3>
          <p className="text-slate-300 leading-relaxed">
            当前的 AI 浪潮正在实现比尔·盖茨“信息触手可及”的愿景。未来的核心竞争力在于建立“AI 工厂”，通过专属模型固化隐性知识，实现企业主权。
          </p>
        </div>
      </div>

      <Section id="enterprise" title="AI 在企业中的应用：构建工厂" icon={Factory}>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100">Copilot 的“杀手级功能”</h3>
            <p className="text-slate-400">
              Copilot 不仅仅是聊天机器人，它通过 Microsoft 365 Graph 揭示了企业内部“丢失的”宝贵资产——语义联系。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                <Database className="text-brand-500 mt-1 shrink-0" size={18} />
                <div>
                  <span className="font-semibold text-slate-200 block">揭示语义联系</span>
                  <span className="text-sm text-slate-500">大规模回忆和理解人与工作内容的关联。</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                <Brain className="text-brand-500 mt-1 shrink-0" size={18} />
                <div>
                  <span className="font-semibold text-slate-200 block">理解业务背景</span>
                  <span className="text-sm text-slate-500">洞察员工活动与特定业务事件的关联。</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <h4 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">企业级挑战</h4>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-center gap-2 text-slate-300 font-medium mb-1 group-hover:text-brand-400 transition-colors">
                  <Users size={16} /> 变革管理
                </div>
                <p className="text-sm text-slate-500 pl-6">最快但也最具挑战性，需要改变固有工作习惯。</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 text-slate-300 font-medium mb-1 group-hover:text-brand-400 transition-colors">
                  <Lock size={16} /> 合规性
                </div>
                <p className="text-sm text-slate-500 pl-6">必须满足电子取证、数据治理及信息权限管理。</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 text-slate-300 font-medium mb-1 group-hover:text-brand-400 transition-colors">
                  <Layout size={16} /> 数据架构
                </div>
                <p className="text-sm text-slate-500 pl-6">现有连接器如“细吸管”，需转向统一的语义嵌入层。</p>
              </div>
            </div>
          </div>
        </div>
        <Quote text="软件领域只有一个类别，那就是信息管理。你必须对人、地点和事物进行模式化。" author="Bill Gates" context="90年代关于信息触手可及的愿景" />
      </Section>

      <Section id="strategy" title="微软战略：回归软件工厂" icon={Layout} className="bg-slate-900/20">
        <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4">TAM 最大化与开放性</h3>
                <p className="text-slate-400 mb-6">
                    纳德拉的战略核心是每一层技术栈都必须独立参与竞争，避免过度捆绑，从而最大化潜在市场 (Total Addressable Market)。
                </p>
                <div className="space-y-4">
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                        <h4 className="text-brand-400 font-bold mb-1">模型策略</h4>
                        <p className="text-sm text-slate-400">从单一模型忠诚度转向<span className="text-slate-200">智能模型集成</span>。系统自动选择最适合任务的模型。</p>
                    </div>
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                        <h4 className="text-brand-400 font-bold mb-1">文化重塑</h4>
                        <p className="text-sm text-slate-400">掌握内部叙事，拒绝被外部定义。倡导“成长型思维”作为共同语言。</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <TechStackDiagram />
            </div>
        </div>
      </Section>

      <Section id="future" title="工作模式、软件与主权" icon={Brain} className="bg-slate-900/20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-brand-400 mb-4">代理工作流 (Agentic Workflows)</h3>
            <p className="text-slate-300 mb-6">
              未来的工作模式将围绕 AI 代理展开。用户角色转变为“宏观委托，微观驾驭”。
            </p>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-brand-500/10 blur-xl rounded-full"></div>
               <h4 className="text-white font-mono mb-2 flex items-center gap-2"><FileCode size={16}/> 全民 IDE</h4>
               <p className="text-sm text-slate-400">
                 集成开发环境 (IDE) 概念将扩展至所有知识工作者。不仅是程序员，还有“会计师 IDE”、“律师 IDE”，用于审查和迭代 AI 生成的内容。
               </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                <div className="bg-slate-900 p-6 rounded-xl border border-yellow-500/30">
                    <h3 className="text-xl font-bold text-yellow-100 mb-2">模型即主权</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        公司的核心价值在于其隐性知识 (Tacit Knowledge)。未来，企业的“主权”体现为<span className="text-yellow-400 font-semibold">专属基础模型</span>。
                    </p>
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500/50 w-2/3"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">通过微调 (LoRA) 将隐性知识固化为模型权重，成为新型知识产权。</p>
                </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="commerce" title="代理式商业" icon={ShoppingBag}>
        <div className="bg-gradient-to-br from-brand-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Stripe x Microsoft</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-700/50">
                    <div className="text-accent-cyan font-bold text-lg mb-2">简单按钮</div>
                    <p className="text-sm text-slate-400">商家只需一次接入，即可触达 ChatGPT、Google 等所有主流 AI 前端入口。</p>
                </div>
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-700/50">
                    <div className="text-accent-cyan font-bold text-lg mb-2">开放式发现</div>
                    <p className="text-sm text-slate-400">AI 理解基于“氛围感”的模糊需求，提供超越关键词搜索的推荐。</p>
                </div>
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-700/50">
                    <div className="text-accent-cyan font-bold text-lg mb-2">精准搜索</div>
                    <p className="text-sm text-slate-400">处理复杂的多维参数，帮助用户在海量商品中快速定位。</p>
                </div>
            </div>
        </div>
      </Section>

      
      <Section id="history" title="历史镜鉴：泡沫与现实" icon={History}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <BubbleComparisonChart />
            <p className="text-xs text-center text-slate-500 mt-2">.com 泡沫 vs AI 时代的基础设施供需对比</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">为什么这次不同？</h3>
            <p className="text-slate-400 mb-4">
              .com 泡沫是基于“暗光纤”的投机，建设了大量闲置设施。而当前的 AI 繁荣是在需求远超供给的背景下进行的。
            </p>
            <blockquote className="border-l-4 border-brand-600 pl-4 py-1 my-4 bg-slate-900/50">
              <p className="text-slate-200 italic">"我没有任何一个 GPU 是闲置的……我的问题是我需要带来更多的供应。"</p>
            </blockquote>
            <div className="mt-6">
                <h4 className="text-md font-semibold text-slate-200 mb-2">Excel 的启示</h4>
                <p className="text-sm text-slate-500">
                    Excel 成功因为它既是图灵完备的编程环境，又是最平易近人的工具。AI 工具必须像 Excel 一样，自下而上地重塑工作流。
                </p>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 text-center text-slate-600 border-t border-slate-900 bg-slate-950 flex flex-col items-center gap-6">
        <p className="text-sm text-slate-400">微软关于 AI 时代的见解</p>
        <p className="text-xs opacity-50">© 2024 AI Era Insights</p>
      </footer>
    </div>
  );
};

export default App;