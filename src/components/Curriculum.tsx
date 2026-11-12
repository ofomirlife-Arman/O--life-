import React, { useState } from 'react';
import { BookOpen, Check, Award, Shield, Users, Clock, Calendar } from 'lucide-react';

interface CurriculumProps {
  onOpenEnrollment: () => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenEnrollment }) => {
  const [activeTab, setActiveTab] = useState<'modules' | 'formats'>('modules');

  const modules = [
    {
      number: '01',
      title: 'Система цветового кода Купера в контексте вождения',
      hours: '3 часа',
      summary: 'Переход от бессознательного вождения («Белый код») к устойчивой расслабленной бдительности («Желтый код»). Определение пространственных зон безопасности вокруг авто.',
      topics: [
        '4 цветовые фазы Купера: физиология мозга и скорость реакции',
        'Правило 360-градусного сканирования (зеркала каждые 5-7 сек)',
        'Дистанция времени: почему метры обманывают, а 3 секунды спасают'
      ]
    },
    {
      number: '02',
      title: 'Психофизиология водителя, стресс и туннельное зрение',
      hours: '3 часа',
      summary: 'Как усталость, звонки по телефону и плохое самочувствие сужают угол периферийного зрения со 180° до опасных 30°. Практики сохранения фокуса.',
      topics: [
        'Иллюзия многозадачности: смартфон за рулем и цена взгляда в 2 секунды',
        'Управление усталостью на длинных степных перегонах (Атырау–Тенгиз)',
        'Техники дыхания и стабилизации пульса при опасных инцидентах'
      ]
    },
    {
      number: '03',
      title: 'Культура дорожной этики и ликвидация конфликтов',
      hours: '4 часа',
      summary: 'Предупреждение дорожного гнева (Road Rage). Умение быть предсказуемым для других и не отвечать агрессией на агрессию.',
      topics: [
        'Психология агрессора на дороге и бесконфликтные алгоритмы разъезда',
        'Этикет использования световых сигналов, фар и поворотников',
        'Уважение к пешеходам, велосипедистам и начинающим водителям'
      ]
    },
    {
      number: '04',
      title: 'Оранжевый и Красный код: Опережение и экстренные маневры',
      hours: '6 часов',
      summary: 'Техника «Cover Braking» (перенос стопы над педалью тормоза). Алгоритмы действий при выходе на встречную полосу, отказе тормозов или выбежавшем скоте.',
      topics: [
        'Поиск «кармана спасения» на обочине или в смежном ряду',
        'Экстренное торможение с ABS на разнородном покрытии (асфальт/лед)',
        'Стабилизация машины при заносе без панического Черного кода'
      ]
    },
    {
      number: '05',
      title: 'Специфика дорог Западного Казахстана и промышленных зон',
      hours: '4 часа',
      summary: 'Особенности климата, ветра и дорожной инфраструктуры Атырауской области. Гололед, солончаки, песчаные заносы и тяжелая вахтовая техника.',
      topics: [
        'Поведение при встрече верблюдов и лошадей на трассе ночью',
        'Движение в плотном тумане и при боковом порывистом ветре',
        'Правила разъезда со спецтехникой и негабаритными грузами'
      ]
    }
  ];

  const packages = [
    {
      name: 'Базовый курс «Этика и Код Купера»',
      target: 'Для частных водителей и начинающих',
      duration: '1 день (8 академических часов)',
      features: [
        'Полная теория цветового кода Купера',
        'Тестирование индивидуального времени реакции',
        'Практикум по бесконфликтному вождению',
        'Методическое пособие водителя',
        'Сертификат о прохождении курса'
      ],
      popular: false
    },
    {
      name: 'Полный курс «Защитное вождение + Полигон»',
      target: 'Для уверенных водителей и профессионалов',
      duration: '3 дня (24 академических часа)',
      features: [
        'Вся теория и психофизиология безопасности',
        'Практика на закрытом автодроме с инструктором',
        'Отработка экстренного уклонения («лосиный тест»)',
        'Торможение на скользких покрытиях (Red Code)',
        'Сертификат повышенной квалификации'
      ],
      popular: true
    },
    {
      name: 'Корпоративный курс DDT (Fleet Safety)',
      target: 'Для автопарков компаний, ТШО, NCOC, КПО',
      duration: 'Индивидуальный график / 2–5 дней',
      features: [
        'Соответствие стандартам Defensive Driving Training',
        'Аудит навыков штатных водителей компании',
        'Оценка рисков для руководства предприятия',
        'Отработка специфики тяжелых внедорожников и автобусов',
        'Именные корпоративные сертификаты'
      ],
      popular: false
    }
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wider uppercase">
              <span>Учебный план</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">г. Атырау, пр. Султан Бейбарыса 303</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Программа обучения и форматы курсов
            </h2>
          </div>

          {/* Clean Segmented Tab Switcher */}
          <div className="flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'modules'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Учебные модули
            </button>
            <button
              onClick={() => setActiveTab('formats')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'formats'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Форматы и пакеты
            </button>
          </div>
        </div>

        {/* Tab 1: Modules Accordion/List */}
        {activeTab === 'modules' && (
          <div className="space-y-4">
            {modules.map((mod) => (
              <div 
                key={mod.number}
                className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800/90 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-extrabold font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                      {mod.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {mod.title}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 shrink-0 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{mod.hours}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {mod.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-800/80">
                  {mod.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-amber-400 font-bold mt-0.5">•</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Packages */}
        {activeTab === 'formats' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'bg-slate-900 border-2 border-amber-400/80 shadow-2xl relative'
                    : 'bg-slate-900/70 border border-slate-800'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider">
                    Рекомендуемый выбор
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {pkg.name}
                  </h3>
                  <div className="text-xs text-amber-400 font-medium mb-3">
                    {pkg.target}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 pb-4 mb-4 border-b border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{pkg.duration}</span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-8">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenEnrollment}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    pkg.popular
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  Выбрать этот курс
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
