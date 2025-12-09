import React from 'react';
import { CheckCircle2, Code2 } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section id="api" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Feito para desenvolvedores,<br/>
              amado por <span className="text-brand-neon">CFOs</span>.
            </h2>
            
            <div className="space-y-6">
              {[
                "Integração via API RESTful simples e documentada.",
                "Webhooks em tempo real para status de transações.",
                "SandBox ambiente para testes ilimitados.",
                "SDKs disponíveis para Node.js, Python, PHP e Java."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-brand-neon" size={20} />
                  </div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 px-8 py-4 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-3">
              <Code2 size={20} />
              Ler Documentação da API
            </button>
          </div>

          {/* Code Snippet Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-purple/20 blur-3xl opacity-30" />
            
            <div className="relative rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-500 font-mono ml-2">transaction.js</span>
              </div>
              
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-gray-300">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">splitpague</span> = <span className="text-purple-400">require</span>(<span className="text-green-400">'splitpague-sdk'</span>);{"\n\n"}
                    
                    <span className="text-gray-500">// Criar uma transação com Split</span>{"\n"}
                    <span className="text-purple-400">const</span> transaction = <span className="text-purple-400">await</span> splitpague.transactions.<span className="text-blue-400">create</span>({"{"}{"\n"}
                    {"  "}amount: <span className="text-orange-400">15000</span>, <span className="text-gray-500">// R$ 150,00</span>{"\n"}
                    {"  "}payment_method: <span className="text-green-400">'pix'</span>,{"\n"}
                    {"  "}split_rules: [{"{"}{"\n"}
                    {"    "}recipient_id: <span className="text-green-400">'rec_seller_123'</span>,{"\n"}
                    {"    "}percentage: <span className="text-orange-400">85</span>,{"\n"}
                    {"    "}liable: <span className="text-purple-400">true</span>{"\n"}
                    {"  "}{"}"}],{"\n"}
                    {"  "}customer: {"{"}{"\n"}
                    {"    "}name: <span className="text-green-400">'João Silva'</span>,{"\n"}
                    {"    "}email: <span className="text-green-400">'joao@email.com'</span>{"\n"}
                    {"  "}{"}"}{"\n"}
                    {"}"});
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;