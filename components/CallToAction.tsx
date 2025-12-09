import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Background Mesh Gradient */}
        <div className="absolute inset-0 bg-brand-black">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-brand-black to-brand-black" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
                Pronto para <br />
                <span className="text-gradient-brand">escalar sua operação?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Junte-se a centenas de empresas que já processam milhões mensalmente com a Splitpague.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://splitpague.com.br/public/register"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                    Criar Conta Grátis <ArrowRight size={18} />
                </a>
                <a 
                  href="https://wa.me/5563992940044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center justify-center"
                >
                    Falar com Vendas
                </a>
            </div>
        </div>
    </section>
  );
};

export default CallToAction;