import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Код Купера', href: '#cooper-code' },
    { label: 'Анатомия ДТП', href: '#methodology-answers' },
    { label: 'Важность курса', href: '#importance' },
    { label: 'Программа', href: '#curriculum' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg' 
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="whitespace-nowrap shrink-0 group flex items-center gap-2">
            <Logo size="md" />
          </a>

          {/* Zone 2: 4-5 Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action & Direct Contact */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick direct phone button */}
            <a
              href="tel:+77016060836"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors whitespace-nowrap"
              title="Позвонить: +7 701 606 08 36"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+7 701 606 08 36</span>
            </a>

            {/* Direct WhatsApp link */}
            <a
              href="https://wa.me/77016060836?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BA%D1%83%D1%80%D1%81%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D1%8D%D1%82%D0%B8%D0%BA%D0%B8%20%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%B4%D1%83%20%D0%9A%D1%83%D0%BF%D0%B5%D1%80%D0%B0."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 rounded-lg border border-emerald-800/40 transition-colors"
              aria-label="WhatsApp"
              title="WhatsApp: +7 701 606 08 36"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-400 hover:text-slate-200 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 transition-colors"
              aria-label="Переключить тему"
              title={isDark ? 'Включить светлую тему' : 'Включить темную тему'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenEnrollment}
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              Записаться
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2 text-sm text-slate-300">
            <div className="text-xs text-slate-400">г. Атырау, пр. Султан Бейбарыса 303</div>
            <a 
              href="tel:+77016060836" 
              className="flex items-center gap-2 text-amber-400 font-bold py-1"
            >
              <Phone className="w-4 h-4" />
              +7 701 606 08 36
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
