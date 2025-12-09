import React from 'react';
import { Users, Server, Globe2, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-neon"></span>
              <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Sobre Nós</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Revolucionando a infraestrutura financeira <span className="text-gray-500">global.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Nascemos com a missão de eliminar a complexidade dos pagamentos digitais. 
              Combinamos tecnologia proprietária de alta performance com uma interface 
              intuitiva para entregar a melhor experiência de checkout e split do mercado.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="border-l border-white/10 pl-6">
                <p className="text-4xl font-bold text-white mb-1">+2bi</p>
                <p className="text-sm text-gray-500">Volume Processado (Anual)</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <p className="text-4xl font-bold text-white mb-1">99.99%</p>
                <p className="text-sm text-gray-500">Uptime Garantido</p>
              </div>
            </div>
          </div>

          {/* Visual Grid / Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="bg-[#0f1115] p-6 rounded-2xl border border-white/5 shadow-xl hover:border-brand-accent/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Users className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Clientes</h3>
                  <p className="text-gray-500 text-sm">Mais de 5.000 empresas confiam em nossa tecnologia.</p>
                </div>
                <div className="bg-[#0f1115] p-6 rounded-2xl border border-white/5 shadow-xl hover:border-brand-purple/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Server className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Infraestrutura</h3>
                  <p className="text-gray-500 text-sm">Servidores distribuídos para latência zero.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#0f1115] p-6 rounded-2xl border border-white/5 shadow-xl hover:border-green-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Globe2 className="text-green-400" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Global</h3>
                  <p className="text-gray-500 text-sm">Processamento multi-moeda e cross-border.</p>
                </div>
                <div className="bg-[#0f1115] p-6 rounded-2xl border border-white/5 shadow-xl hover:border-yellow-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                    <Trophy className="text-yellow-400" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Premiada</h3>
                  <p className="text-gray-500 text-sm">Eleita a Fintech Revelação de 2024.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;