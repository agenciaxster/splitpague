import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { FINANCIAL_DATA } from '../constants';

const FinancialTicker: React.FC = () => {
  // Duplicate data to ensure seamless loop
  const displayData = [...FINANCIAL_DATA, ...FINANCIAL_DATA, ...FINANCIAL_DATA];

  return (
    <div className="w-full bg-brand-charcoal border-b border-white/5 overflow-hidden py-2 sticky top-0 z-50">
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {displayData.map((item, index) => (
            <div key={`${item.symbol}-${index}`} className="flex items-center gap-2 text-xs font-mono tracking-wider">
              <span className="text-gray-400 font-semibold">{item.symbol}</span>
              <span className="text-white font-bold">{item.value}</span>
              <span className={`flex items-center ${item.isPositive ? 'text-brand-neon' : 'text-red-400'}`}>
                {item.change}
                {item.isPositive ? <TrendingUp size={12} className="ml-1" /> : <TrendingDown size={12} className="ml-1" />}
              </span>
            </div>
          ))}
        </div>
        
        {/* Second copy for infinite effect - actually handled by CSS animation in index but structure helps */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12" aria-hidden="true">
             {/* Logic handled by custom CSS animation style injection below */}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FinancialTicker;