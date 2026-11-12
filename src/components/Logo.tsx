import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useImageBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showSubtitle = true,
  size = 'md',
  useImageBadge = false
}) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : size === 'xl' ? 'w-16 h-16' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : size === 'xl' ? 'text-2xl' : 'text-lg';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      
      {/* 4-Color Human Face Profile Logo */}
      <div className={`relative ${iconSize} shrink-0 rounded-full overflow-hidden shadow-md group`}>
        {useImageBadge ? (
          <img
            src="/src/assets/images/cooper_face_logo_1794481291297.jpg"
            alt="Логотип: лицо человека разделенное на 4 цвета Кода Купера"
            className="w-full h-full object-cover rounded-full border border-slate-700/80"
          />
        ) : (
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm"
          >
            <defs>
              {/* Human Head Profile Silhouette Clip Path (Facing Right) */}
              <clipPath id="humanHeadClip">
                <path d="
                  M 32 6
                  C 42 6, 50 13, 51 22
                  C 51 25, 49 27, 50 28
                  C 51 29, 53.5 30.5, 54 32
                  C 54.5 33.5, 51.5 34.5, 50.5 35
                  C 49.5 35.5, 51.5 37.5, 51 39
                  C 50.5 40.5, 48 41, 48.5 42.5
                  C 49 44, 46 47, 43 49
                  C 39 52, 38 58, 38 60
                  L 24 60
                  C 24 55, 23 48, 20 44
                  C 16 39, 14 34, 14 26
                  C 14 15, 22 6, 32 6
                  Z
                " />
              </clipPath>
            </defs>

            {/* Circular Base & Radar Rim */}
            <circle cx="32" cy="32" r="31" className="fill-slate-900 stroke-slate-700" strokeWidth="2" />
            <circle cx="32" cy="32" r="28" className="stroke-slate-800" strokeWidth="1" strokeDasharray="3 2" />

            {/* Human Head Silhouette grouped under clip path, divided into 4 Cooper Colors */}
            <g clipPath="url(#humanHeadClip)">
              {/* 1. Top-Left: Pure White (Code White - Crown / Baseline) */}
              <rect x="0" y="0" width="32" height="32" fill="#F8FAFC" />
              
              {/* 2. Top-Right: Bright Yellow (Code Yellow - Forehead / Vision & Scanning) */}
              <rect x="32" y="0" width="32" height="32" fill="#FACC15" />
              
              {/* 3. Bottom-Right: Safety Orange (Code Orange - Nose / Jaw & Threat Recognition) */}
              <rect x="32" y="32" width="32" height="32" fill="#F97316" />
              
              {/* 4. Bottom-Left: Alert Red (Code Red - Base / Reflexes & Action) */}
              <rect x="0" y="32" width="32" height="32" fill="#EF4444" />

              {/* Clean dividing crosshairs across the face */}
              <line x1="32" y1="0" x2="32" y2="64" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="0" y1="32" x2="64" y2="32" stroke="#0F172A" strokeWidth="1.5" />
            </g>

            {/* Crisp Outline of the Human Face Profile */}
            <path
              d="
                M 32 6
                C 42 6, 50 13, 51 22
                C 51 25, 49 27, 50 28
                C 51 29, 53.5 30.5, 54 32
                C 54.5 33.5, 51.5 34.5, 50.5 35
                C 49.5 35.5, 51.5 37.5, 51 39
                C 50.5 40.5, 48 41, 48.5 42.5
                C 49 44, 46 47, 43 49
                C 39 52, 38 58, 38 60
                L 24 60
                C 24 55, 23 48, 20 44
                C 16 39, 14 34, 14 26
                C 14 15, 22 6, 32 6
                Z
              "
              stroke="#0F172A"
              strokeWidth="2"
              className="drop-shadow-sm"
            />

            {/* Central Focal Point of Awareness */}
            <circle cx="32" cy="32" r="3" fill="#0F172A" />
            <circle cx="32" cy="32" r="1.5" fill="#FACC15" />
          </svg>
        )}
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-tight">
        <div className={`font-display font-extrabold tracking-tight text-slate-900 dark:text-white ${titleSize}`}>
          БЕЙБАРЫС <span className="text-amber-500 font-bold">DRIVE</span>
        </div>
        {showSubtitle && (
          <div className="text-[10px] sm:text-[11px] font-medium tracking-normal text-slate-500 dark:text-slate-400">
            Центр безопасности & этики водителей
          </div>
        )}
      </div>
    </div>
  );
};
