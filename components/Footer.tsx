import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate offset for sticky headers (Ticker ~40px + Navbar 80px = ~120px)
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
              <span className="text-xl font-bold text-white tracking-tight">splitpague</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tecnologia financeira de ponta para negócios que exigem performance, segurança e escalabilidade.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScroll(e, '#features')}
                  className="hover:text-brand-accent transition-colors"
                >
                  Split de Pagamento
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScroll(e, '#features')}
                  className="hover:text-brand-accent transition-colors"
                >
                  PIX & Boletos
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScroll(e, '#features')}
                  className="hover:text-brand-accent transition-colors"
                >
                  Checkout Pro
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScroll(e, '#features')}
                  className="hover:text-brand-accent transition-colors"
                >
                  Assinaturas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, '#about')}
                  className="hover:text-brand-accent transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, '#about')}
                  className="hover:text-brand-accent transition-colors"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a 
                  href="#api" 
                  onClick={(e) => handleScroll(e, '#api')}
                  className="hover:text-brand-accent transition-colors"
                >
                  Desenvolvedores
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5563992940044" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Splitpague Tecnologia LTDA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;