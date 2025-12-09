import React from 'react';
import { ChevronRight, ShieldCheck, Globe, Zap, ArrowUpRight, Activity, CreditCard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-brand-black">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md animate-fade-in-up hover:border-brand-accent/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
            </span>
            <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
              Plataforma de Pagamento 100% confiável
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            O Futuro dos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Pagamentos Digitais</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
            Infraestrutura de pagamento robusta para empresas que exigem <span className="text-white font-medium">performance</span>, <span className="text-white font-medium">split nativo</span> e <span className="text-white font-medium">conversão máxima</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://splitpague.com.br/public/register"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              Começar Agora
            </a>
            <a 
              href="https://wa.me/5563992940044"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 text-white font-medium border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:-translate-y-1"
            >
              Falar com Vendas <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* 3D Dashboard Composition */}
        <div className="relative w-full perspective-2000 min-h-[500px] md:min-h-[700px] flex justify-center items-start pt-10">
          
          {/* Main Dashboard Card - Tilted */}
          <div className="relative w-full max-w-5xl bg-[#0f1115]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out overflow-hidden z-20 group">
            
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-brand-purple/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Header */}
            <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 relative z-10 bg-[#0f1115]/50">
               <div className="flex items-center gap-4">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                 </div>
                 <div className="h-6 w-[1px] bg-white/10 mx-2" />
                 <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <ShieldCheck size={12} className="text-brand-neon" />
                    <span>splitpague-production</span>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10" />
               </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-12 h-[500px] relative z-10">
                {/* Sidebar */}
                <div className="col-span-2 border-r border-white/5 p-4 hidden md:flex flex-col gap-6">
                    <div className="space-y-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className={`h-8 w-full rounded-lg ${i === 1 ? 'bg-brand-accent/10 border border-brand-accent/20' : 'hover:bg-white/5'} transition-colors`} />
                        ))}
                    </div>
                    <div className="mt-auto p-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-3">
                            <Zap size={16} className="text-brand-purple" />
                        </div>
                        <div className="h-2 w-16 bg-white/10 rounded mb-2" />
                        <div className="h-2 w-24 bg-white/5 rounded" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-12 md:col-span-10 p-6 md:p-8 bg-gradient-to-b from-transparent to-black/20">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <p className="text-sm text-gray-400 font-mono mb-1">RECEITA TOTAL (HOJE)</p>
                            <h3 className="text-4xl text-white font-bold tracking-tight">R$ 142.850,00</h3>
                        </div>
                        <div className="flex items-center gap-2 text-brand-neon bg-brand-neon/10 px-3 py-1 rounded-full text-sm font-medium border border-brand-neon/20">
                            <ArrowUpRight size={16} />
                            +24.5%
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-64 w-full relative mb-8">
                        <svg className="w-full h-full overflow-visible">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,150 C100,100 200,180 300,120 S500,50 600,80 S800,20 1000,60 L1000,250 L0,250 Z" fill="url(#chartGradient)" />
                            <path d="M0,150 C100,100 200,180 300,120 S500,50 600,80 S800,20 1000,60" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        
                        {/* Interactive Points (Visual only) */}
                        <div className="absolute top-[32%] left-[60%] w-4 h-4 bg-brand-black border-2 border-brand-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20">
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-black text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap">
                                R$ 45.200
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Transações', val: '1,234', icon: Activity, color: 'text-blue-400' },
                            { label: 'Aprovação', val: '98.2%', icon: ShieldCheck, color: 'text-green-400' },
                            { label: 'Ticket Médio', val: 'R$ 245', icon: Globe, color: 'text-purple-400' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                                    <stat.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">{stat.label}</p>
                                    <p className="text-lg font-bold text-white">{stat.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          {/* Floating Elements - Z-Index Layers */}
          
          {/* Element 1: Virtual Card (Floating Left) */}
          <div className="absolute top-[10%] -left-[5%] md:left-[-20px] z-30">
            <div className="transform -rotate-6">
                <div className="w-64 h-40 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 flex flex-col justify-between animate-float backdrop-blur-md">
                    <div className="flex justify-between items-start">
                        <div className="text-white/80 font-mono text-xs">VIRTUAL CARD</div>
                        <CreditCard className="text-white/50" size={20} />
                    </div>
                    <div>
                        <div className="flex gap-2 mb-2">
                            <div className="w-8 h-5 rounded bg-white/10" />
                            <div className="w-8 h-5 rounded bg-white/10" />
                        </div>
                        <div className="text-white font-mono text-lg tracking-wider">**** 4829</div>
                    </div>
                </div>
            </div>
          </div>

          {/* Element 2: Success Notification (Floating Right) */}
          <div className="absolute top-[20%] -right-[5%] md:right-[-20px] z-30">
            <div className="transform rotate-3">
                <div className="bg-[#0f1115] border border-brand-neon/30 rounded-lg p-4 shadow-[0_10px_40px_rgba(16,185,129,0.2)] animate-float flex items-center gap-3" style={{ animationDelay: '1.5s' }}>
                    <div className="w-10 h-10 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Pagamento Recebido</p>
                        <p className="text-sm font-bold text-white">+ R$ 1.250,00</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Element 3: Code Snippet (Bottom Left) */}
          <div className="absolute bottom-[10%] -left-[2%] md:left-10 z-30 hidden md:block">
            <div className="transform rotate-6">
                <div className="bg-[#0d1117] border border-white/10 rounded-lg p-4 shadow-2xl animate-float" style={{ animationDelay: '2.5s' }}>
                    <div className="flex gap-1.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="font-mono text-[10px] leading-relaxed text-gray-400">
                        <span className="text-purple-400">POST</span> /v1/split_rules <span className="text-green-400">200 OK</span><br/>
                        {'{'}<br/>
                        &nbsp;&nbsp;"id": "split_8392",<br/>
                        &nbsp;&nbsp;"status": "active"<br/>
                        {'}'}
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .perspective-2000 {
            perspective: 2000px;
        }
        .rotate-x-12 {
            transform: rotateX(12deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;