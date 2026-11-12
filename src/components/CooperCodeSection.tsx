import React, { useState } from 'react';
import { Eye, AlertTriangle, ShieldCheck, Zap, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const CooperCodeSection: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState<number>(1); // default Yellow (1)

  const codes = [
    {
      id: 0,
      name: 'Белый код',
      subtitle: 'Неосведомленность & Отвлечение',
      colorName: 'Белый',
      badgeClass: 'text-slate-300 border-slate-700 bg-slate-800/80',
      borderAccent: 'border-slate-600',
      bgGlow: 'from-slate-500/10 to-transparent',
      reactionTime: '1.8 – 2.5 сек',
      stoppingDelta: '+32 метра при 80 км/ч',
      driverState: 'Мысли о работе, диалог по телефону, усталость, туннельный взгляд прямо перед капотом.',
      driverHabit: 'Водитель не контролирует зеркала, держит дистанцию менее 1 секунды, надеется на "авось".',
      dangerLevel: 'КРИТИЧЕСКИЙ (Причина 90%+ попутных столкновений и наездов)',
      trafficScenario: 'Вы едете по проспекту Султан Бейбарыса в Атырау. Впереди машина тормозит перед пешеходом — вы замечаете это слишком поздно, следует удар или судорожное торможение.',
      recommendedAction: 'Категорически запрещенное состояние за рулем. Курс вырабатывает триггеры немедленного перехода в Желтый код.',
      icon: XCircle,
      iconColor: 'text-slate-400'
    },
    {
      id: 1,
      name: 'Желтый код',
      subtitle: 'Расслабленная бдительность',
      colorName: 'Желтый',
      badgeClass: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
      borderAccent: 'border-amber-500',
      bgGlow: 'from-amber-500/10 to-transparent',
      reactionTime: '0.6 – 0.8 сек',
      stoppingDelta: 'Стандартная дистанция безопасности',
      driverState: 'Спокойное, сосредоточенное внимание. Водитель осознает, что опасность ВОЗМОЖНА в любой момент.',
      driverHabit: 'Круговое сканирование 360°: зеркала каждые 5-7 секунд, безопасная дистанция 3-4 секунды, постоянный поиск пространственного кармана безопасности.',
      dangerLevel: 'ОПТИМАЛЬНЫЙ БАЗОВЫЙ РЕЖИМ (Золотой стандарт защитного вождения)',
      trafficScenario: 'Вы движетесь в плотном потоке Атырау. Заранее видите тормозящие авто за 3 машины вперед, контролируете слепые зоны и держите дистанцию от грузовика.',
      recommendedAction: 'В этом коде водитель должен проводить 95% времени за рулем любого транспортного средства.',
      icon: ShieldCheck,
      iconColor: 'text-amber-400'
    },
    {
      id: 2,
      name: 'Оранжевый код',
      subtitle: 'Конкретная потенциальная опасность',
      colorName: 'Оранжевый',
      badgeClass: 'text-orange-400 border-orange-500/40 bg-orange-500/10',
      borderAccent: 'border-orange-500',
      bgGlow: 'from-orange-500/10 to-transparent',
      reactionTime: '0.3 – 0.5 сек',
      stoppingDelta: 'Сокращение пути реагирования в 3 раза',
      driverState: 'Фокусировка на определенной угрозе. Водитель мысленно строит сценарий: "ЕСЛИ..., ТО Я...".',
      driverHabit: 'Правая нога снята с газа и перенесена НАД педалью тормоза (Cover Braking). Руки жестко на 9 и 3. Проверен коридор ухода слева/справа.',
      dangerLevel: 'ВЫСОКАЯ ГОТОВНОСТЬ (Преддверие экстренной ситуации)',
      trafficScenario: 'Около остановки на пр. Бейбарыса из-за автобуса может выбежать пешеход, либо встречный автомобиль начинает нетерпеливый обгон в лоб.',
      recommendedAction: 'Плавный сброс скорости, готовность нажать тормоз без задержки на перенос ноги.',
      icon: AlertTriangle,
      iconColor: 'text-orange-400'
    },
    {
      id: 3,
      name: 'Красный код',
      subtitle: 'Активное действие & Экстренный маневр',
      colorName: 'Красный',
      badgeClass: 'text-red-400 border-red-500/40 bg-red-500/10',
      borderAccent: 'border-red-500',
      bgGlow: 'from-red-500/10 to-transparent',
      reactionTime: '0.15 – 0.25 сек',
      stoppingDelta: 'Максимально эффективное замедление',
      driverState: 'Срабатывание заложенного мышечного рефлекса без колебаний и паники.',
      driverHabit: 'Экстренное импульсное или постоянное торможение с ABS, сохранение управляемости руля, стабилизация траектории.',
      dangerLevel: 'ЭКСТРЕННАЯ СИТУАЦИЯ (Непосредственная угроза удара)',
      trafficScenario: 'Внезапное препятствие или занос на обледенелой загородной трассе в направлении Тенгиза. Мгновенное контролируемое действие спасает жизнь.',
      recommendedAction: 'Не допустить перехода в Черный код (паника, ступор, закрытые глаза, брошенный руль).',
      icon: Zap,
      iconColor: 'text-red-400'
    }
  ];

  const current = codes[selectedCode];
  const CurrentIcon = current.icon;

  return (
    <section id="cooper-code" className="py-20 lg:py-28 bg-slate-900 border-t border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 4-Color Face Logo Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wider uppercase">
              <span>Методология Джеффа Купера</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Адаптировано для водителей авто</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Цветовой код ситуационной осведомленности
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Большинство аварий происходят не из-за плохих дорог или техники, а из-за запоздалой реакции. 
              Код Купера учит ваш мозг заранее сканировать дорожную среду и переключать фазы внимания до того, 
              как ситуация станет аварийной.
            </p>
          </div>

          {/* 4-Color Human Face Logo Feature Card */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 flex items-center gap-4 shrink-0 max-w-md shadow-lg">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-slate-700/80 shadow-md bg-slate-900">
              <img
                src="/src/assets/images/cooper_face_logo_1794481291297.jpg"
                alt="Логотип: Лицо человека разделенное на 4 цвета Купера"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs">
              <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                Анатомия внимания
              </div>
              <div className="font-bold text-white text-sm sm:text-base mt-0.5">
                Лицо водителя в 4 цветах
              </div>
              <p className="text-slate-400 text-xs mt-1 leading-snug">
                Каждый сектор лица символизирует фазу сознания: от спящего автоматизма (Белый) до хладнокровного рефлекса спасения (Красный).
              </p>
            </div>
          </div>
        </div>

        {/* Code Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 mb-8">
          {codes.map((code) => {
            const isSelected = selectedCode === code.id;
            return (
              <button
                key={code.id}
                onClick={() => setSelectedCode(code.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 shadow-md border border-slate-700'
                    : 'hover:bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border ${code.badgeClass}`}>
                    {code.colorName}
                  </span>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">
                    {code.reactionTime}
                  </span>
                </div>
                <div className="font-bold text-sm sm:text-base text-white">
                  {code.name}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {code.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card for Active Code */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl p-6 sm:p-8 lg:p-10 relative">
          {/* Subtle colored accent rim */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${current.id === 0 ? 'from-slate-400 to-slate-600' : current.id === 1 ? 'from-amber-400 to-yellow-500' : current.id === 2 ? 'from-orange-500 to-amber-500' : 'from-red-500 to-rose-600'}`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Description & Mechanism */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <CurrentIcon className={`w-6 h-6 ${current.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {current.name}: {current.subtitle}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400 mt-0.5">
                    {current.dangerLevel}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Психофизиологическое состояние:
                  </h4>
                  <p className="leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                    {current.driverState}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Поведение и действия водителя:
                  </h4>
                  <p className="leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                    {current.driverHabit}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Пример на дороге (Атырау):
                  </h4>
                  <p className="text-slate-300 italic border-l-2 border-amber-500/60 pl-3 py-1">
                    «{current.trafficScenario}»
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Comparative Reaction Metrics & Rule */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-6 border border-slate-800 space-y-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Физика и время реакции водителя</span>
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm py-2 border-b border-slate-800">
                  <span className="text-slate-400">Время распознавания:</span>
                  <span className="font-mono font-bold text-amber-400 tabular-nums">
                    {current.reactionTime}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm py-2 border-b border-slate-800">
                  <span className="text-slate-400">Влияние на тормозной путь:</span>
                  <span className="font-semibold text-slate-200">
                    {current.stoppingDelta}
                  </span>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">
                    Золотое правило инструктора:
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                    {current.recommendedAction}
                  </div>
                </div>
              </div>

              {/* Black Code Warning callout */}
              <div className="mt-4 p-3 rounded-lg bg-black/60 border border-red-900/40 text-xs text-slate-300">
                <span className="font-bold text-red-400">Черный код (Code Black):</span> Паника, ступор, закрытие глаз руками или бесконтрольный вылет. Наш курс дает устойчивые психомоторные паттерны, исключающие переход в Черный код при любых форс-мажорах.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
