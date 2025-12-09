import { 
  Zap, 
  Split, 
  ShoppingCart, 
  FileText, 
  Link, 
  Globe,
  CreditCard
} from 'lucide-react';
import { NavItem, FinancialMetric, ServiceFeature, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Soluções', href: '#features' },
  { label: 'Desenvolvedores', href: '#api' },
  { label: 'Preços', href: '#pricing' },
  { label: 'Sobre', href: '#about' },
];

export const FINANCIAL_DATA: FinancialMetric[] = [
  { symbol: 'USD/BRL', value: 'R$ 5,84', change: '+0.45%', isPositive: true },
  { symbol: 'EUR/BRL', value: 'R$ 6,21', change: '-0.12%', isPositive: false },
  { symbol: 'BTC', value: '$ 98.420', change: '+2.31%', isPositive: true },
  { symbol: 'NASDAQ', value: '16.200', change: '+1.05%', isPositive: true },
  { symbol: 'IBOV', value: '128.500', change: '-0.30%', isPositive: false },
  { symbol: 'OURO', value: '$ 2.045', change: '+0.15%', isPositive: true },
  { symbol: 'SELIC', value: '11.25%', change: '0.00%', isPositive: true },
];

export const SERVICES: ServiceFeature[] = [
  {
    title: 'PIX Instantâneo 24/7',
    description: 'Recebimento e envio com conciliação automática via API. QR Code dinâmico e estático.',
    icon: Zap,
    color: 'text-brand-neon',
  },
  {
    title: 'Split de Pagamento',
    description: 'Divisão automática de receitas entre múltiplos recebedores no momento da transação. Ideal para marketplaces.',
    icon: Split,
    color: 'text-brand-accent',
  },
  {
    title: 'Checkout Transparente',
    description: 'Alta conversão com interface moderna, one-click buy e múltiplas formas de pagamento integradas.',
    icon: ShoppingCart,
    color: 'text-brand-purple',
  },
  {
    title: 'Gestão de Boletos',
    description: 'Emissão de boletos registrados com baixa automática e custos reduzidos por transação.',
    icon: FileText,
    color: 'text-white',
  },
  {
    title: 'Link de Pagamento',
    description: 'Venda pelas redes sociais sem site. Links seguros para cartão de crédito e PIX.',
    icon: Link,
    color: 'text-brand-accent',
  },
  {
    title: 'Integração E-commerce',
    description: 'Plugins nativos para Shopify, WooCommerce, VTEX e SDKs robustos para implementação customizada.',
    icon: Globe,
    color: 'text-brand-purple',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Mendes",
    role: "CTO",
    company: "MarketPlace X",
    content: "A API de split de pagamento do Splitpague revolucionou nossa operação. A conciliação é perfeita.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Ana Sophia",
    role: "CEO",
    company: "Fintech Lab",
    content: "Segurança e estabilidade eram nossas prioridades. Encontramos isso e muito mais com o Splitpague.",
    avatar: "https://picsum.photos/100/100?random=2"
  }
];