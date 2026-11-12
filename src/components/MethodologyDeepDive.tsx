import React, { useState } from 'react';
import { 
  AlertOctagon, 
  ShieldCheck, 
  Clock, 
  Users, 
  ArrowRight, 
  Brain, 
  Eye, 
  Zap, 
  Heart, 
  CheckCircle2,
  TrendingDown,
  Building2,
  Sparkles
} from 'lucide-react';

export const MethodologyDeepDive: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const sections = [
    {
      id: 0,
      title: '1. Основная первопричина происхождения ДТП',
      subtitle: 'Когнитивная слепота и пребывание в «Белом коде»',
      icon: AlertOctagon,
      iconColor: 'text-red-400',
      badge: 'Фундаментальная причина',
      lead: 'Мировая статистика дорожной безопасности (NHTSA, ВОЗ) доказывает: свыше 94% всех аварий вызваны не техническими отказами машин и не состоянием дорог, а так называемым «человеческим фактором».',
      points: [
        {
          heading: 'Иллюзия контроля и автопилот мозга',
          text: 'Мозг опытного водителя экономит энергию. Через 15 минут спокойной езды включается бессознательный автоматизм: мысли уходят в работу, семью, проблемы или экран смартфона. Водитель смотрит на дорогу, но его мозг не регистрирует изменения («смотрел, но не видел»).'
        },
        {
          heading: 'Эффект туннельного зрения',
          text: 'При отсутствии осознанной бдительности поле зрения сжимается со 180° до узкого пятна в 30° прямо перед бампером. Водитель теряет пешеходов на обочине, сближение сзади и боковые маневры.'
        },
        {
          heading: 'Потеря критических секунд реакции',
          text: 'В «Белом коде» на распознавание опасности уходит 1.5–2.5 секунды. На скорости 60 км/ч машина за 2 секунды пролетает вслепую 33 метра — это дистанция между жизнью и катастрофой.'
        }
      ],
      quote: '«Авария никогда не происходит внезапно. В 9 из 10 случаев ей предшествуют 4–6 секунд явных признаков, которые спящий мозг просто игнорирует».'
    },
    {
      id: 1,
      title: '2. Как код Купера предотвращает трагедии',
      subtitle: 'Управление уровнями боевой готовности сознания',
      icon: ShieldCheck,
      iconColor: 'text-amber-400',
      badge: 'Методика нейтрализации',
      lead: 'Система полковника Джеффа Купера перенастраивает работу центральной нервной системы водителя, разделяя психологическое состояние на 4 четких цветовых режима.',
      points: [
        {
          heading: 'Исключение «Белого кода» за рулем',
          text: 'Курс учит безусловному правилу: как только закрылась дверь автомобиля и запущен двигатель, нахождение в Белом коде недопустимо. Водитель сразу активирует Желтый код.'
        },
        {
          heading: '«Желтый код» как базовый режим без усталости',
          text: 'Это не паническое напряжение, а спокойная, расслабленная бдительность. Водитель принимает аксиому: «Сегодня на дороге со мной может произойти инцидент, и я готов его заметить первым».'
        },
        {
          heading: 'Заблаговременный переход в «Оранжевый код»',
          text: 'Заметив малейшую аномалию (мяч покатился к дороге, мигнул стоп-сигнал за 3 машины вперед), водитель не ждет кульминации, а мгновенно переносит ногу над тормозом (Cover Braking). Время реакции сокращается с 2.0 сек до 0.3 сек!'
        }
      ],
      quote: '«Код Купера превращает водителя из пассивной жертвы обстоятельств в активного тактика, который видит развитие дорожной партии на 3 хода вперед».'
    },
    {
      id: 2,
      title: '3. Как это работает на практике',
      subtitle: 'Реальный таймлайн: секунды, решающие исход',
      icon: Clock,
      iconColor: 'text-orange-400',
      badge: 'Пошаговый алгоритм',
      lead: 'Разберем конкретный дорожный инцидент в Атырау: движение по проспекту Султан Бейбарыса в плотном городском потоке.',
      points: [
        {
          heading: 'Таймлайн −6 секунд (Желтый код):',
          text: 'Водитель непрерывно сканирует зеркала (каждые 6 секунд) и держит дистанцию 3 секунды. Впереди в соседнем ряду автобус начинает снижать ход перед переходом.'
        },
        {
          heading: 'Таймлайн −3 секунды (Оранжевый код):',
          text: 'Мозг мгновенно формулирует установку: «ЕСЛИ из-за автобуса выйдет пешеход, ТО Я остановлюсь». Правая нога уже лежит над педалью тормоза, найден коридор ухода.'
        },
        {
          heading: 'Таймлайн 0 секунд (Красный код):',
          text: 'Пешеход неожиданно делает шаг на проезжую часть. Обычный водитель только через 1.5 секунды испугается и нажмет тормоз (ДТП неизбежно). Водитель по Куперу уже на 0.2 секунде осаживает авто мягким, контролируемым торможением без визга шин и риска получить удар сзади.'
        }
      ],
      quote: '«Практика Кода Купера устраняет фактор неожиданности. Вы не пугаетесь — вы просто выполняете заранее подготовленное действие».'
    },
    {
      id: 3,
      title: '4. Что в итоге мы получим все вместе',
      subtitle: 'Синергия культуры: город, бизнес, семьи и общество',
      icon: Users,
      iconColor: 'text-emerald-400',
      badge: 'Конечный результат',
      lead: 'Безопасность на дороге — это не индивидуальный эгоизм, а коллективная экосистема. Когда критическая масса водителей перенимает культуру Кода Купера, меняется вся среда.',
      points: [
        {
          heading: 'Сохранение человеческих жизней и здоровья семей',
          text: 'Главный итог — сотни людей в Атырау каждый вечер возвращаются домой к своим детям, родителям и близким живыми и невредимыми.'
        },
        {
          heading: 'Искоренение агрессии и стресса на дорогах (Zero Road Rage)',
          text: 'Взаимное уважение, бесконфликтные перестроения, благодарность аварийной сигнализацией. Дорога перестает быть полем битвы за сантиметры асфальта.'
        },
        {
          heading: 'Колоссальная экономическая выгода для бизнеса и региона',
          text: 'Для предприятий Атырау и нефтегазового сектора (ТШО, NCOC): резкое снижение аварийности служебных автопарков до 73%, отсутствие срывов поставок, продление ресурса техники и снижение страховых издержек.'
        },
        {
          heading: 'Культурный эталон современного Казахстана',
          text: 'Атырау становится флагманом осознанного водительского сообщества с европейскими стандартами защитного вождения и глубоким уважением к согражданам.'
        }
      ],
      quote: '«Каждый осознанный водитель на дороге — это щит, защищающий не только себя, но и тех, кто едет рядом».'
    }
  ];

  const current = sections[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="methodology-answers" className="py-20 lg:py-28 bg-slate-950 text-white border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wider uppercase">
            <span>Фундаментальный разбор</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Анатомия безопасности</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Четыре ключевых вопроса о безопасности и этике за рулем
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            От первопричины аварий до масштабного результата для общества: как методология Кода Купера решает проблему дорожного травматизма в корне.
          </p>
        </div>

        {/* 4 Interactive Horizontal Steps / Question Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {sections.map((sec, idx) => {
            const isActive = activeStep === idx;
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all border relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-amber-400 shadow-xl shadow-amber-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                    isActive ? 'border-amber-400/50 text-amber-300 bg-amber-500/10' : 'border-slate-700 text-slate-400'
                  }`}>
                    Вопрос 0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${sec.iconColor}`} />
                </div>
                <div className="font-bold text-sm text-white line-clamp-2">
                  {sec.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {sec.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Explanatory Card for Selected Step */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <CurrentIcon className={`w-7 h-7 ${current.iconColor}`} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {current.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                  {current.title}
                </h3>
              </div>
            </div>
            <div className="text-xs text-slate-400 font-medium italic">
              {current.subtitle}
            </div>
          </div>

          {/* Lead introductory premise */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
            {current.lead}
          </div>

          {/* Key detailed breakdown cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {current.points.map((pt, pIdx) => (
              <div 
                key={pIdx}
                className="bg-slate-950/50 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <h4 className="font-bold text-sm text-white">
                    {pt.heading}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pt.text}
                </p>
              </div>
            ))}
          </div>

          {/* Instructor's takeaway quote */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-200 italic flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{current.quote}</span>
          </div>

        </div>

        {/* Comprehensive Summary Strip: Together for Atyrau */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-amber-400 font-display">0% ДТП</div>
            <div className="text-xs text-slate-400 font-medium">Главная цель «Target Zero»</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-emerald-400 font-display">4–6 сек</div>
            <div className="text-xs text-slate-400 font-medium">Запас времени для предотвращения</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-white font-display">360°</div>
            <div className="text-xs text-slate-400 font-medium">Круговой ситуационный контроль</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-amber-400 font-display">Атырау</div>
            <div className="text-xs text-slate-400 font-medium">Пр. Султан Бейбарыса, 303</div>
          </div>
        </div>

      </div>
    </section>
  );
};
