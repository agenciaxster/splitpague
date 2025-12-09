import React from 'react';
import { Instagram } from 'lucide-react';

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
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a 
              href="https://wa.me/5563992940044" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.514-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;