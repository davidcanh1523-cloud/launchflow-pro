import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, CheckCircle2, Zap, Sparkles, RefreshCw } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

export const ResponsiveSimulator: React.FC = () => {
  const { theme, t, lang } = useThemeLanguage();
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  return (
    <section id="responsive-simulator" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#08090C]' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>RESPONSIVE ENGINE SIMULATOR</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t('responsive.heading')}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
          }`}>
            {t('responsive.subheading')}
          </p>

          {/* Device Controls Switcher */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-full border bg-slate-900/60 dark:bg-white/5 border-slate-700/50">
            <button
              onClick={() => setDevice('mobile')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                device === 'mobile'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>iPhone 16 Pro (393px)</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                device === 'tablet'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>iPad Air (768px)</span>
            </button>

            <button
              onClick={() => setDevice('desktop')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                device === 'desktop'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop 4K (1440px)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Simulator Frame */}
        <div className="flex flex-col items-center">
          <div 
            className={`transition-all duration-500 rounded-3xl border-4 overflow-hidden shadow-2xl relative ${
              device === 'mobile'
                ? 'w-full max-w-[380px] border-slate-800 bg-[#0B0D14]'
                : device === 'tablet'
                ? 'w-full max-w-[720px] border-slate-800 bg-[#0B0D14]'
                : 'w-full max-w-5xl border-slate-800 bg-[#0B0D14]'
            }`}
          >
            {/* Top Device Bar */}
            <div className="h-8 bg-slate-900 border-b border-white/10 px-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
              <span>
                {device === 'mobile' ? 'iOS 18.2 • 393 x 852' : device === 'tablet' ? 'iPadOS • 768 x 1024' : 'macOS Sequoia • 1440 x 900'}
              </span>
              <div className="flex items-center gap-1 text-emerald-400">
                <RefreshCw className="w-3 h-3 animate-spin duration-3000" />
                <span>60 FPS</span>
              </div>
            </div>

            {/* Simulated Content Box */}
            <div className="p-5 sm:p-7 space-y-4 text-white">
              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                ⚡ 100% Touch-Optimized
              </div>
              <h3 className="font-heading text-lg sm:text-2xl font-bold leading-tight">
                Giao Diện Chuyển Đổi Cao Cho SaaS & Sản Phẩm Số
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Mọi phần tử, kích thước font chữ, khoảng cách đệm (padding) và nút bấm được tính toán tự động co giãn bằng Fluid Typography, đảm bảo tỷ lệ giữ chân khách hàng luôn trên 70%.
              </p>

              {/* Sample Mini Cards */}
              <div className={`grid gap-3 pt-2 ${
                device === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
              }`}>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-cyan-400">Zero Overflow</div>
                  <p className="text-[11px] text-slate-400">Không bao giờ vỡ khung ngang</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-emerald-400">48px Touch Area</div>
                  <p className="text-[11px] text-slate-400">Chuẩn công thái học ngón tay</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-indigo-400">Sub-150ms Speed</div>
                  <p className="text-[11px] text-slate-400">Tải trang tức thì trên 4G/5G</p>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-slate-900/30 dark:bg-white/5 border-slate-700/40 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>Touch Targets Min 48px</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-slate-900/30 dark:bg-white/5 border-slate-700/40 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>Auto Fluid Typography</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-slate-900/30 dark:bg-white/5 border-slate-700/40 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>Zero Layout Shift (CLS 0)</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-slate-900/30 dark:bg-white/5 border-slate-700/40 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>100% Tested iPhone & Galaxy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
