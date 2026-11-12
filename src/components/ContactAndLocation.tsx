import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export const ContactAndLocation: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formType, setFormType] = useState('Базовый курс (Код Купера)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone.trim()) return;

    // Direct WhatsApp dispatch
    const text = encodeURIComponent(
      `Здравствуйте! Заявка на курс безопасности водителей в Атырау:\nИмя: ${formName || 'Клиент'}\nТелефон: ${formPhone}\nИнтересующий курс: ${formType}`
    );
    window.open(`https://wa.me/77016060836?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText('город Атырау, проспект Султан Бейбарыса, 303');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacts" className="py-20 lg:py-28 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wider uppercase">
            <span>Локация и контакты</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">г. Атырау</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ждем вас в учебном центре в Атырау
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Оборудованный учебный класс, тренажерный комплекс ситуационного анализа и собственная площадка контраварийного вождения.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Details & Interactive Map representation */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <button
                    onClick={copyAddress}
                    className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    title="Скопировать точный адрес"
                  >
                    {copied ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Скопировано
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> Скопировать
                      </span>
                    )}
                  </button>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Точный адрес центра:
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">
                    город Атырау, проспект Султан Бейбарыса, 303
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Удобный подъезд, собственная просторная парковка
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    Прямая связь
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Мобильный телефон:
                  </div>
                  <a
                    href="tel:+77016060836"
                    className="block text-xl sm:text-2xl font-extrabold text-amber-400 hover:text-amber-300 transition-colors mt-1 font-display"
                  >
                    +7 701 606 08 36
                  </a>
                  <div className="text-xs text-slate-400 mt-1">
                    Звонки и сообщения WhatsApp 09:00 – 19:00
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Road / Location Visualizer */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 relative overflow-hidden flex-1 flex flex-col justify-between">
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    График работы и заездов:
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Понедельник — Суббота: 09:00 — 19:00
                </span>
              </div>

              {/* Stylized Vector Map Schematic of Sultan Beybarys Avenue in Atyrau */}
              <div className="relative h-48 w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
                
                {/* Steppe & River vibe grid */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Main Avenue: Sultan Beybarys Avenue */}
                <div className="absolute w-full h-12 bg-slate-800 flex items-center justify-center border-y border-slate-700">
                  <div className="w-full border-b border-dashed border-amber-500/70" />
                  <div className="absolute text-[11px] font-bold tracking-wider text-slate-300 uppercase px-3 py-0.5 bg-slate-900/90 rounded border border-slate-700">
                    проспект Султан Бейбарыса
                  </div>
                </div>

                {/* Connecting Crossroad */}
                <div className="absolute h-full w-8 bg-slate-800/80 left-1/4 border-x border-slate-700/60" />

                {/* Center Pin Marker: 303 */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative animate-bounce">
                    <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/40 font-bold text-xs">
                      303
                    </div>
                    <div className="w-2.5 h-2.5 bg-amber-500 rotate-45 -mt-1 mx-auto" />
                  </div>
                  <div className="mt-1 bg-slate-950/95 backdrop-blur-md px-3 py-1 rounded-md border border-amber-500/50 text-[11px] font-bold text-amber-300 shadow-md">
                    Учебный центр «Бейбарыс Drive»
                  </div>
                </div>

                {/* Compass & City Label */}
                <div className="absolute bottom-2 right-3 text-[10px] text-slate-400 font-mono">
                  г. Атырау · 47.116° N, 51.883° E
                </div>
              </div>

              {/* Quick Route Guidance */}
              <div className="mt-4 text-xs text-slate-400 leading-relaxed">
                <span className="font-bold text-slate-300">Ориентир:</span> Проспект Султан Бейбарыса, дом 303. Удобный заезд со стороны кольцевой развязки и моста, перед зданием оборудована парковка для курсантов и корпоративного транспорта.
              </div>

            </div>

          </div>

          {/* Right Column: Lead Form & Direct Action */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Записаться на курс или получить консультацию
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Оставьте контакты — методист учебного центра свяжется с вами, ответит на вопросы по Коду Купера и подберет удобную дату занятия в Атырау.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="font-bold text-white text-base">
                    Заявка успешно сформирована!
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Диалог открыт в WhatsApp. Мы также продублируем звонок на номер <span className="text-amber-400 font-bold">{formPhone}</span>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-emerald-400 hover:underline pt-2"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Ваше имя или организация:
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Например: Аслан / ТОО «Каспий Логистик»"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Телефон (для звонка или WhatsApp) *:
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+7 (701) 000-00-00"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Интересующий формат обучения:
                    </label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Базовый курс (Код Купера)">Базовый курс «Этика и Код Купера» (1 день)</option>
                      <option value="Полный курс с автодромом">Полный курс «Защитное вождение + Автодром» (3 дня)</option>
                      <option value="Корпоративный тренинг DDT">Корпоративный тренинг DDT для автопарков</option>
                      <option value="Индивидуальный мастер-класс">Индивидуальный мастер-класс с инструктором</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Отправить заявку</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Quick WhatsApp and Call Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="https://wa.me/77016060836?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D1%83%D1%80%D1%81%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%B2%20%D0%90%D1%82%D1%8B%D1%80%D0%B0%D1%83."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/50 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Написать сразу в WhatsApp (+7 701 606 08 36)</span>
              </a>

              <a
                href="tel:+77016060836"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Позвонить напрямую: +7 701 606 08 36</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
