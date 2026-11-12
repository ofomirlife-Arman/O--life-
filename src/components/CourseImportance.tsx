import React from 'react';
import { HeartHandshake, Eye, Award, Truck, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface CourseImportanceProps {
  onOpenEnrollment: () => void;
}

export const CourseImportance: React.FC<CourseImportanceProps> = ({ onOpenEnrollment }) => {
  const pillars = [
    {
      title: '01. Дорожная этика и ликвидация агрессии (Road Rage)',
      description: 'Агрессия и нетерпение за рулем провоцируют до 45% критических конфликтов на дороге. На курсе водители осваивают эмоциональную саморегуляцию, культуру предупредительности и бесконфликтного разъезда даже при провокациях других участников.',
      benefits: ['Безопасные перестроения без подрезаний', 'Снижение пульса и стресса на 40%', 'Взаимная вежливость в плотных пробках']
    },
    {
      title: '02. Опережающее защитное прогнозирование',
      description: 'Обычный водитель реагирует на уже возникшее препятствие (экстренно жмет тормоз). Водитель, владеющий Кодом Купера, видит предпосылки за 4–6 секунд до опасности и нейтрализует ее простым отпусканием педали газа или сменой полосы.',
      benefits: ['Распознавание слепых зон пешеходов', 'Устранение резких опасных торможений', 'Дистанция с учетом времени реакции мозга']
    },
    {
      title: '03. Специфика дорог Атырауской области и степных трасс',
      description: 'Особенности региона требуют специальных навыков: частые сильные степные ветра, внезапный выход домашнего скота (верблюды, лошади) в темное время суток, обледенение дорог у Каспия и интенсивное движение тяжелой техники на маршрутах Тенгиз и Карабатан.',
      benefits: ['Протокол движения при выходе животных', 'Управление машиной при колейности и песке', 'Контроль дистанции при плохой видимости']
    },
    {
      title: '04. Корпоративные стандарты DDT и Target Zero',
      description: 'Для предприятий нефтегазового кластера Атырау курс обеспечивает соответствие мировым регламентам защитного вождения (Defensive Driving Training). Снижает аварийность автопарка до минимума и сохраняет человеческие жизни.',
      benefits: ['Сертификация для подрядчиков ТШО/NCOC', 'Снижение расходов на ремонт автопарка', 'Экономия топлива до 15% за счет плавности хода']
    }
  ];

  return (
    <section id="importance" className="py-20 lg:py-28 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wider uppercase">
            <span>Ценность для водителя и общества</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Почему это важно каждому</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            В чем главная важность курса безопасности и водительской этики?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Автомобиль — это средство повышенной опасности. Знание ПДД дает лишь юридические правила, 
            но именно культура безопасности и ситуационная осознанность защищают водителя, его семью 
            и окружающих от трагедий.
          </p>
        </div>

        {/* 2-Column Split: Editorial Pillars on Left, Real Visual Media on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column: 4 Editorial Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-slate-700 transition-all shadow-sm"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-slate-800/80 text-xs font-medium text-slate-400">
                  {pillar.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Proof Cards with Generated Assets */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Practical Track Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/images/training_polygon_track_1794480390650.jpg"
                  alt="Практика контраварийного и защитного вождения на закрытом полигоне в Атырау"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs uppercase font-bold text-amber-400">Отработка мышечной памяти</div>
                  <div className="text-sm font-bold text-white">Практические маневры уклонения и торможения</div>
                </div>
              </div>
              <div className="p-4 sm:p-5 text-xs text-slate-300 leading-relaxed">
                Теория закрепляется на практической площадке: объезд внезапного препятствия («лосиный тест»), безопасная траектория при сносе оси, торможение на неоднородном покрытии.
              </div>
            </div>

            {/* Corporate Fleet Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/images/fleet_safety_road_1794480391613.jpg"
                  alt="Корпоративные стандарты безопасного вождения на трассах Атырау"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs uppercase font-bold text-amber-400">Для корпоративных клиентов</div>
                  <div className="text-sm font-bold text-white">Стандарты для автопарков и подрядчиков в Атырау</div>
                </div>
              </div>
              <div className="p-4 sm:p-5 text-xs text-slate-300 leading-relaxed">
                Специальные программы для водителей служебных внедорожников, вахтовых автобусов и логистических парков. Выдача официального сертификата о прохождении курса.
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 text-center space-y-3">
              <div className="text-sm font-bold text-white">
                Готовы повысить свою водительскую культуру?
              </div>
              <p className="text-xs text-slate-300">
                Занятия проходят в уютном учебном классе в Атырау на пр. Султан Бейбарыса 303.
              </p>
              <button
                onClick={onOpenEnrollment}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
              >
                Оставить заявку на обучение
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
