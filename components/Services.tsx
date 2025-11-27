import React from 'react';
import { Wrench, Calculator, MessageCircle, ClipboardCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Техническа Поддръжка',
    description: 'Регулярни огледи, подмяна на консумативи и бърза реакция при аварии 24/7. Партньорство с доказани фирми.',
    icon: Wrench,
  },
  {
    title: 'Професионален Касиер',
    description: 'Събиране на такси, прозрачно счетоводство и ежемесечни отчети достъпни за всеки живущ.',
    icon: Calculator,
  },
  {
    title: 'Комуникация',
    description: 'Организиране на общи събрания, водене на домова книга и медиация при междусъседски спорове.',
    icon: MessageCircle,
  },
  {
    title: 'Администрация',
    description: 'Правно обслужване, представителство пред общината и комуналните дружества (ЧЕЗ, Софийска вода).',
    icon: ClipboardCheck,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 border-l-4 border-brand-dark pl-6">
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-2 font-display">Нашите Услуги</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight font-display">Какво предлагаме?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="architect-card p-8 relative group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 -mr-8 -mt-8 rounded-full blur-xl group-hover:bg-brand-accent/20 transition-colors"></div>
              
              <div className="w-12 h-12 bg-brand-accent flex items-center justify-center mb-6 shadow-lg">
                <service.icon className="text-white w-6 h-6" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 font-display uppercase">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                {service.description}
              </p>
              
              {/* Corner accent */}
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};