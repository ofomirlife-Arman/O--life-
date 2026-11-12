import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageCircle, MapPin, Send } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Базовый курс «Этика и Код Купера» (1 день)');
  const [timing, setTiming] = useState('Будние дни (утро/день)');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    const message = encodeURIComponent(
      `Здравствуйте! Хочу записаться на курс в Атырау:\nИмя: ${name || 'Клиент'}\nТелефон: ${phone}\nКурс: ${course}\nУдобное время: ${timing}\nАдрес центра: г. Атырау, пр. Султан Бейбарыса 303`
    );

    window.open(`https://wa.me/77016060836?text=${message}`, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Заявка принята!
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Диалог открыт в WhatsApp с учебным центром. Наш координатор свяжется с вами в течение 15 минут для подтверждения времени.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>г. Атырау, пр. Султан Бейбарыса 303</span>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Вернуться к сайту
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Запись на обучение
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Курс культуры безопасности и этики
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                г. Атырау, проспект Султан Бейбарыса 303 · Тел. +7 701 606 08 36
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться?"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Номер телефона *:
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (701) 000-00-00"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Программа курса:
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="Базовый курс «Этика и Код Купера» (1 день)">Базовый курс «Этика и Код Купера» (1 день)</option>
                  <option value="Полный курс «Защитное вождение + Полигон» (3 дня)">Полный курс «Защитное вождение + Полигон» (3 дня)</option>
                  <option value="Корпоративный тренинг DDT (для автопарков)">Корпоративный тренинг DDT (для автопарков)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Удобное время занятий:
                </label>
                <select
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="Будние дни (утро/день)">Будние дни (утренние или дневные часы)</option>
                  <option value="Вечерняя группа (после 18:00)">Вечерняя группа (после 18:00)</option>
                  <option value="Группа выходного дня (Сб–Вс)">Группа выходного дня (Суббота — Воскресенье)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Отправить заявку & перейти в WhatsApp</span>
                </button>
              </div>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <a 
                href="tel:+77016060836"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+7 701 606 08 36</span>
              </a>
              <a 
                href="https://wa.me/77016060836"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
