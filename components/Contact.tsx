import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Благодарим ви! Ще се свържем с вас скоро.');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', phone: '', address: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-brand-light relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-dark/5 clip-diagonal"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          
          {/* Info Side */}
          <div className="lg:w-5/12 bg-brand-dark p-12 text-white flex flex-col justify-between relative">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="white">
                    <rect width="20" height="20" x="0" y="0" />
                    <rect width="20" height="20" x="40" y="0" />
                    <rect width="20" height="20" x="80" y="0" />
                    <rect width="20" height="20" x="20" y="20" />
                    <rect width="20" height="20" x="60" y="20" />
                </svg>
             </div>

            <div>
              <div className="w-16 h-1 bg-brand-accent mb-8"></div>
              <h3 className="text-3xl font-black font-display uppercase mb-6">Контакти</h3>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Свържете се с нас за оглед и изготвяне на индивидуална оферта.
              </p>
              
              <div className="space-y-8 font-sans">
                <div className="flex items-start gap-5">
                  <div className="text-brand-accent mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Телефон</p>
                    <p className="text-white text-lg font-medium">+359 888 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="text-brand-accent mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-white text-lg font-medium">office@vhodpro.bg</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-brand-accent mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Адрес</p>
                    <p className="text-white text-lg font-medium">гр. София<br/>бул. България 69</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">Понеделник - Петък: 09:00 - 18:00</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
            <h3 className="text-2xl font-bold text-brand-dark mb-2 font-display uppercase">Заяви Оферта</h3>
            <p className="text-gray-500 mb-8 text-sm">Попълнете формата и ние ще се свържем с вас до 24 часа.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Име</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-brand-light border-b-2 border-gray-200 focus:border-brand-accent px-4 py-3 text-brand-dark outline-none transition-colors placeholder-gray-400 font-sans"
                    placeholder="Вашето име"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Телефон</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-light border-b-2 border-gray-200 focus:border-brand-accent px-4 py-3 text-brand-dark outline-none transition-colors placeholder-gray-400 font-sans"
                    placeholder="0888..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-brand-light border-b-2 border-gray-200 focus:border-brand-accent px-4 py-3 text-brand-dark outline-none transition-colors placeholder-gray-400 font-sans"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Адрес на сградата</label>
                <input 
                  type="text" 
                  name="address"
                  required
                  value={formState.address}
                  onChange={handleChange}
                  className="w-full bg-brand-light border-b-2 border-gray-200 focus:border-brand-accent px-4 py-3 text-brand-dark outline-none transition-colors placeholder-gray-400 font-sans"
                  placeholder="кв., улица, номер..."
                />
              </div>

              <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Изпращане...' : 'Изпрати Запитване'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};