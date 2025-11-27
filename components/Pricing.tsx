import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'Базов',
    price: '4.99',
    period: 'лв/ап',
    features: [
      'Професионален касиер',
      'Плащане на сметки',
      'Онлайн справки',
      '1 Общо събрание годишно'
    ],
    recommended: false,
  },
  {
    name: 'Стандарт',
    price: '7.99',
    period: 'лв/ап',
    features: [
      'Всичко от Базов',
      'Техническа поддръжка',
      'Почистване (1 път седмично)',
      '24/7 Авариен телефон',
      'Мобилно приложение'
    ],
    recommended: true,
  },
  {
    name: 'Премиум',
    price: '12.99',
    period: 'лв/ап',
    features: [
      'Всичко от Стандарт',
      'Професионално почистване (3 пъти)',
      'Поддръжка на зелени площи',
      'Юридическа защита',
      'Видео наблюдение поддръжка'
    ],
    recommended: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-light relative">
       <div className="absolute top-0 left-0 w-full h-full bg-stripes-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-2 font-display">Цени</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 font-display uppercase">Изберете план</h3>
          <p className="text-gray-500 font-medium">
            Прозрачни условия без скрити такси.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 border transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-brand-dark text-white border-brand-accent z-10 shadow-2xl py-12 transform scale-105' 
                  : 'bg-white text-brand-dark border-gray-200 hover:border-brand-dark/30 z-0'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                  Препоръчан
                </div>
              )}
              
              <h4 className={`text-xl font-bold mb-4 font-display uppercase ${plan.recommended ? 'text-white' : 'text-brand-dark'}`}>{plan.name}</h4>
              <div className="flex items-baseline mb-8 border-b border-gray-700/10 pb-4">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`ml-2 text-sm font-bold uppercase ${plan.recommended ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm font-medium">
                    <Check className={`w-5 h-5 mr-3 ${plan.recommended ? 'text-brand-accent' : 'text-brand-dark'}`} />
                    <span className={plan.recommended ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full text-center py-4 font-bold uppercase tracking-widest text-sm transition-all border-2 ${
                plan.recommended 
                  ? 'bg-brand-accent border-brand-accent text-white hover:bg-white hover:text-brand-accent' 
                  : 'bg-transparent border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
              }`}>
                Избери план
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};