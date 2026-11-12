import React, { useState } from 'react';
import { ShieldCheck, Phone, MessageCircle, ChevronRight, Compass, Eye, AlertTriangle, Zap } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment }) => {
  const [activeRadarMode, setActiveRadarMode] = useState<'white' | 'yellow' | 'orange' | 'red'>('yellow');

  const radarStates = {
    white: {
      title: 'Код Белый: Неосведомленность',
      reaction: '1.8 — 2.5 сек',
      status: 'Зона критического риска',
      accent: 'border-slate-400 text-slate-300',
      description: 'Внимание рассеяно, телефон в руке или мысли не о дороге. Любое торможение впереди застает врасплох.',
      bgTint: 'bg-slate-500/10'
    },
    yellow: {
      title: 'Код Желтый: Базовая бдительность',
      reaction: '0.6 — 0.8 сек',
      status: 'Оптимальный режим защитного вождения',
      accent: 'border-amber-400 text-amber-300',
      description: 'Круговой обзор 360°, проверка зеркал каждые 5-7 сек, дистанция 3-4 секунды, чтение потока на 150 метров вперед.',
      bgTint: 'bg-amber-500/10'
    },
    orange: {
      title: 'Код Оранжевый: Оценка угрозы',
      reaction: '0.3 — 0.5 сек',
      status: 'Нога перенесена над педалью тормоза',
      accent: 'border-orange-500 text-orange-300',
      description: 'Выявлена скрытая угроза: ребенок у обочины, виляющий грузовик, слепой перекресток. Готов план ухода.',
      bgTint: 'bg-orange-500/10'
    },
    red: {
      title: 'Код Красный: Мгновенное действие',
      reaction: '0.15 — 0.3 сек',
      status: 'Управляемый экстренный маневр',
      accent: 'border-red-500 text-red-300',
      description: 'Реализация плана спасения: торможение с ABS без срыва в занос, объезд в безопасный коридор без паники.',
      bgTint: 'bg-red-500/10'
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 text-white">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unboxed Metadata Trust Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <span className="text-amber-400 font-bold uppercase tracking-wider">Учебный центр</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>г. Атырау, пр. Султан Бейбарыса 303</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Методика цветового кода Купера</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-emerald-400">Сертификация водителей</span>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Культура безопасности и этика водителей на основе{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Цветового Кода Купера
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Специализированная программа опережающего защитного вождения в Атырау. 
              Трансформируем привычки водителя: от опасного автоматизма — к постоянному круговому сканированию, 
              психологической выдержке и культуре взаимного уважения на городских дорогах и междугородних трассах.
            </p>

            {/* Quick Proof Metrics Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-3 border-y border-slate-800/80 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display tabular-nums">−73%</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">снижение вероятности ДТП</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">0.3 сек</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">время готовности к маневру</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">контроль эмоций и этика</div>
              </div>
            </div>

            {/* CTA Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenEnrollment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Записаться на курс</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="https://wa.me/77016060836?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BA%D1%83%D1%80%D1%81%D0%B5%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D1%8D%D1%82%D0%B8%D0%BA%D0%B8%20%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%B2%20%D0%90%D1%82%D1%8B%D1%80%D0%B0%D1%83."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded-xl transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+77016060836"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+7 701 606 08 36</span>
              </a>
            </div>

            {/* Physical Location indicator & Official 4-Color Face Emblem */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Обучение и тренажерный класс: г. Атырау, пр. Султан Бейбарыса, 303</span>
              </div>

              {/* Official 4-Color Face Emblem Banner */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5 max-w-xl">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-700/80 shadow-md">
                  <img
                    src="/src/assets/images/cooper_face_logo_1794481291297.jpg"
                    alt="Фирменный знак: лицо человека, разделенное на 4 цвета Кода Купера"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span>Фирменный знак центра: Сознание водителя</span>
                    <span className="text-[10px] text-amber-400 font-mono font-semibold uppercase px-1.5 py-0.2 bg-amber-500/10 rounded border border-amber-500/30">
                      4 цвета Купера
                    </span>
                  </div>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Лицо человека, разделенное на 4 сектора: <span className="text-slate-200">Белый</span> (сон), <span className="text-amber-400 font-semibold">Желтый</span> (внимание), <span className="text-orange-400 font-semibold">Оранжевый</span> (угроза) и <span className="text-red-400 font-semibold">Красный</span> (действие).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset + Interactive Driver Radar */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              {/* Generated Cockpit Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden">
                <img
                  src="/src/assets/images/hero_defensive_driving_1794480390352.jpg"
                  alt="Круговой ситуационный обзор и контроль зеркал по коду Купера"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Measured Scrim overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Overlaid Live Cockpit Radar HUD */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>360° RADAR COOPER</span>
                  </div>
                  <div className="text-slate-300 tabular-nums">
                    СКАНИРОВАНИЕ ЗЕРКАЛ: 5 СЕК
                  </div>
                </div>
              </div>

              {/* Interactive Radar Selector beneath photo */}
              <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Уровень готовности водителя:
                  </span>
                  <span className="text-xs text-slate-400">
                    Нажмите для переключения
                  </span>
                </div>

                {/* 4 Cooper color chips */}
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
                  {(['white', 'yellow', 'orange', 'red'] as const).map((mode) => {
                    const isActive = activeRadarMode === mode;
                    const colorMap = {
                      white: 'text-slate-300 hover:text-white',
                      yellow: 'text-amber-400 hover:text-amber-300',
                      orange: 'text-orange-400 hover:text-orange-300',
                      red: 'text-red-400 hover:text-red-300',
                    };
                    const activeBgMap = {
                      white: 'bg-slate-700/70 text-white shadow-sm',
                      yellow: 'bg-amber-500 text-slate-950 font-bold shadow-sm',
                      orange: 'bg-orange-500 text-slate-950 font-bold shadow-sm',
                      red: 'bg-red-500 text-white font-bold shadow-sm',
                    };

                    const labelMap = {
                      white: 'Белый',
                      yellow: 'Желтый',
                      orange: 'Оранжевый',
                      red: 'Красный',
                    };

                    return (
                      <button
                        key={mode}
                        onClick={() => setActiveRadarMode(mode)}
                        className={`py-1.5 text-xs text-center rounded-md transition-all whitespace-nowrap ${
                          isActive ? activeBgMap[mode] : colorMap[mode]
                        }`}
                      >
                        {labelMap[mode]}
                      </button>
                    );
                  })}
                </div>

                {/* Active Mode Explanation Box */}
                <div className={`p-3 rounded-xl border ${radarStates[activeRadarMode].accent} ${radarStates[activeRadarMode].bgTint} transition-all`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">
                      {radarStates[activeRadarMode].title}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                      {radarStates[activeRadarMode].reaction}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {radarStates[activeRadarMode].description}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
