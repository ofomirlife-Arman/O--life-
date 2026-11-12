import React from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand & mission */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Учебный центр профилактики культуры безопасности и этики у водителей автомобилей. Обучение опережающему защитному вождению на основе ситуационного цветового кода Купера.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="tel:+77016060836"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+7 701 606 08 36</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://wa.me/77016060836"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Навигация
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#cooper-code" className="hover:text-amber-400 transition-colors">
                  Цветовой код Купера
                </a>
              </li>
              <li>
                <a href="#importance" className="hover:text-amber-400 transition-colors">
                  Важность и цели курса
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-amber-400 transition-colors">
                  Тест готовности водителя
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-amber-400 transition-colors">
                  Учебный план и пакеты
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-amber-400 transition-colors">
                  Локация и запись
                </a>
              </li>
            </ul>
          </div>

          {/* Location details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Адрес и контакты
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Республика Казахстан, город Атырау, проспект Султан Бейбарыса, дом 303</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+7 701 606 08 36</span>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Режим работы: Пн – Сб: 09:00 – 19:00. Корпоративные заезды по согласованию.
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Учебный центр безопасного и этичного вождения. Все права защищены.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
