import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Um ecossistema <span className="text-gray-500">completo.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Todas as ferramentas que você precisa para escalar sua operação financeira, 
            desde o checkout até a conciliação bancária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${service.color}`}>
                  <service.icon size={24} />
                </div>
                {index === 1 && (
                    <span className="bg-brand-accent/20 text-brand-accent text-xs px-2 py-1 rounded font-mono">POPULAR</span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;