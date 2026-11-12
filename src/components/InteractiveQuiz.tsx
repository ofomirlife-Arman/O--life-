import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, RotateCcw, AlertTriangle, ArrowRight } from 'lucide-react';

interface QuizQuestion {
  question: string;
  context: string;
  options: {
    text: string;
    code: 'white' | 'yellow' | 'orange';
    points: number;
    explanation: string;
  }[];
}

interface InteractiveQuizProps {
  onOpenEnrollment: () => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ onOpenEnrollment }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions: QuizQuestion[] = [
    {
      question: 'Как часто вы проверяете зеркала заднего и бокового вида во время движения?',
      context: 'Проспект Бейбарыса, умеренный поток машин со скоростью 50–60 км/ч.',
      options: [
        {
          text: 'Только когда собираюсь перестроиться или притормозить.',
          code: 'white',
          points: 0,
          explanation: 'Это «Белый код» — вы не контролируете 360° обстановку и не знаете, кто приближается сзади на высокой скорости.'
        },
        {
          text: 'Каждые 5–8 секунд, беглым взглядом сканируя обстановку вокруг.',
          code: 'yellow',
          points: 3,
          explanation: 'Отличный навык «Желтого кода»! Вы держите ментальную карту всех участников вокруг авто.'
        },
        {
          text: 'Смотрю в зеркала только при звуковом сигнале или когда кто-то моргает фарами.',
          code: 'white',
          points: 0,
          explanation: 'Критическая зона риска: вы реагируете на угрозу постфактум, когда времени на маневр уже нет.'
        }
      ]
    },
    {
      question: 'В правом ряду перед нерегулируемым переходом внезапно притормаживает микроавтобус. Ваши действия?',
      context: 'Вы движетесь в левой полосе со скоростью 50 км/ч.',
      options: [
        {
          text: 'Продолжаю движение с прежней скоростью — мне же горит зеленый/переход пуст в моем поле зрения.',
          code: 'white',
          points: 0,
          explanation: 'Смертельно опасная ошибка: за микроавтобусом может идти скрытый пешеход или ребенок.'
        },
        {
          text: 'Мгновенно перевожу внимание в «Оранжевый код»: убираю ногу с газа, держу над тормозом, снижаю скорость синхронно с микроавтобусом.',
          code: 'orange',
          points: 3,
          explanation: 'Эталон защитного мышления («Cover Braking»). Готовность к экстренной остановке за 0.3 секунды.'
        },
        {
          text: 'Сигналю клаксоном, чтобы показать, что я еду, и продолжаю движение.',
          code: 'white',
          points: 1,
          explanation: 'Агрессивное вождение вместо превентивной безопасности.'
        }
      ]
    },
    {
      question: 'Вам поступает важный входящий звонок или сообщение во время вождения по городу. Что вы делаете?',
      context: 'Движение по оживленной улице, пробки, пешеходы.',
      options: [
        {
          text: 'Беру телефон в руку, быстро смотрю на экран — я опытный водитель и всё контролирую.',
          code: 'white',
          points: 0,
          explanation: 'Даже 2 секунды взгляда на телефон при 60 км/ч — это 33 метра слепого полета машины без контроля.'
        },
        {
          text: 'Игнорирую либо прошу перезвонить позже, если подключен Hands-Free; для сложного разговора съезжаю на парковку.',
          code: 'yellow',
          points: 3,
          explanation: 'Уважение к себе и окружающим. Сохранение фокуса внимания на 100%.'
        },
        {
          text: 'Зажимаю руль коленями или одной рукой и быстро печатаю короткий ответ.',
          code: 'white',
          points: 0,
          explanation: 'Критический Белый код — главный триггер тяжелых аварий в городе.'
        }
      ]
    },
    {
      question: 'Вас грубо подрезал другой автомобиль и резко затормозил перед вашим капотом. Ваша реакция?',
      context: 'Провокация дорожного конфликта («Road Rage»).',
      options: [
        {
          text: 'Обижаюсь, догоняю обидчика, обгоняю и тоже резко торможу перед ним ("учу").',
          code: 'white',
          points: 0,
          explanation: 'Эмоциональный срыв и дорожная агрессия — путь к массовому ДТП и правовым проблемам.'
        },
        {
          text: 'Увеличиваю дистанцию, делаю глубокий вдох, сохраняю хладнокровие и продолжаю путь по своему маршруту.',
          code: 'yellow',
          points: 3,
          explanation: 'Высокая водительская этика и психологическая зрелость! Вы не дали втянуть себя в чужой конфликт.'
        },
        {
          text: 'Начинаю непрерывно сигналить и ругаться матом внутри салона, взвинчивая себя.',
          code: 'white',
          points: 1,
          explanation: 'Повышенный уровень кортизола сужает угол зрения водителя и провоцирует дальнейшие ошибки.'
        }
      ]
    }
  ];

  const handleSelectOption = (optionIdx: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIdx;
    setSelectedAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalPoints = selectedAnswers.reduce((sum, optIdx, qIdx) => {
    return sum + (questions[qIdx]?.options[optIdx]?.points || 0);
  }, 0);

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const getResultFeedback = () => {
    if (totalPoints >= 10) {
      return {
        title: 'У вас высокий уровень ситуационной культуры («Желтый код»)',
        levelColor: 'text-amber-400',
        badgeBg: 'bg-amber-500/10 border-amber-500/40',
        description: 'Вы демонстрируете прекрасное опережающее мышление и зрелую культуру этики на дороге. Наш углубленный практический тренинг на полигоне в Атырау поможет отточить контраварийные рефлексы на скоростях и в экстремальных погодных условиях.'
      };
    } else if (totalPoints >= 6) {
      return {
        title: 'Периодический «Белый код»: зона скрытого риска',
        levelColor: 'text-orange-400',
        badgeBg: 'bg-orange-500/10 border-orange-500/40',
        description: 'В стандартных условиях вы аккуратны, но отвлечение внимания и эмоциональные триггеры периодически переводят вас в режим неосведомленности. Курс защитного вождения за 1-2 дня сформирует у вас автоматические привычки сканирования 360°.'
      };
    } else {
      return {
        title: 'Высокая подверженность опасности (Преобладание «Белого кода»)',
        levelColor: 'text-red-400',
        badgeBg: 'bg-red-500/10 border-red-500/40',
        description: 'Ваш стиль вождения пока опирается на удачу и запоздалую реакцию. Вам категорически рекомендуется пройти базовый курс культуры безопасности и этики водителя в нашем учебном центре в Атырау на пр. Султан Бейбарыса 303.'
      };
    }
  };

  return (
    <section id="quiz" className="py-20 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Интерактивная экспресс-диагностика</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            В каком цветовом коде вы находитесь за рулем?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Пройдите 4 реальные дорожные ситуации и узнайте свой уровень ситуационной готовности и водительской этики.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          {!showResult ? (
            <div>
              {/* Progress indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
                <span className="font-semibold text-amber-400">
                  Вопрос {currentStep + 1} из {questions.length}
                </span>
                <span className="tabular-nums">
                  {Math.round(((currentStep + 1) / questions.length) * 100)}% завершено
                </span>
              </div>

              {/* Question & Context */}
              <div className="mb-6">
                <div className="text-xs text-slate-400 font-medium mb-1">
                  Обстановка: {questions[currentStep].context}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {questions[currentStep].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-white'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-900'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full border border-slate-700 bg-slate-950 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-medium leading-relaxed">
                          {option.text}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Previous button if applicable */}
              {currentStep > 0 && (
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    ← Вернуться к предыдущему вопросу
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 text-center sm:text-left">
              {(() => {
                const res = getResultFeedback();
                return (
                  <>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Результат диагностики
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-extrabold ${res.levelColor}`}>
                          {res.title}
                        </h3>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-mono font-bold text-amber-400 tabular-nums">
                        {totalPoints} / 12 баллов
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {res.description}
                    </p>

                    <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-3">
                      <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
                        Что дает наш курс на пр. Султан Бейбарыса 303:
                      </div>
                      <ul className="text-xs sm:text-sm text-slate-300 space-y-2 text-left">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Навык удержания «Желтого кода» без усталости и лишнего напряжения</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Психологические техники нейтрализации агрессии и дорожных конфликтов</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Сокращение времени реакции при экстренной опасности до 0.3 секунды</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={onOpenEnrollment}
                        className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md"
                      >
                        Записаться на курс в Атырау
                      </button>

                      <button
                        onClick={resetQuiz}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Пройти тест заново</span>
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
