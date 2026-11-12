import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Zap, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Phone, 
  Gift, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface NavbarProps {
  onOpenZaloModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenZaloModal }) => {
  const { theme, toggleTheme, lang, setLang, t } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Replicating the Image badges */}
      <aside 
        aria-label="Thông báo đặc quyền dự án" 
        className={`border-b text-[11px] sm:text-xs py-1.5 px-4 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-[#06080E] border-indigo-500/20 text-slate-300' 
            : 'bg-[#EEF2F6] border-slate-200 text-slate-700'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {t('badge.category')}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ⏱ {t('badge.time')}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              🎁 {t('badge.gift')}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] shrink-0 font-medium">
            <a 
              href="tel:0912345678" 
              className={`inline-flex items-center gap-1.5 font-bold transition-colors ${
                theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
              }`}
            >
              <Phone className="w-3 h-3" />
              <span>{t('badge.hotline')}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main High-Tech Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-[#08090C]/90 backdrop-blur-xl border-b border-indigo-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3'
              : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-3'
            : theme === 'dark'
              ? 'bg-[#08090C]/70 backdrop-blur-md border-b border-white/5 py-4'
              : 'bg-white/70 backdrop-blur-md border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo with Cyber Kinetic Icon */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                : 'bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 shadow-md'
            }`}>
              <Rocket className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className={`font-heading text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  LaunchFlow
                </span>
                <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-500 text-white">
                  PRO
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-wider text-slate-400 -mt-0.5">
                SaaS & Course Funnel
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-5 xl:gap-7 text-[12px] font-semibold tracking-wide transition-colors shrink-0 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <a href="#core-tabs" className="hover:text-cyan-400 transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.features')}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing-matrix" className="hover:text-cyan-400 transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.pricing')}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.testimonials')}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#responsive-simulator" className="hover:text-cyan-400 transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.responsive')}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gifts-section" className="hover:text-emerald-400 transition-colors py-1 relative group whitespace-nowrap flex items-center gap-1">
              <Gift className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('nav.gift')}</span>
            </a>
          </nav>

          {/* Controls Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <div className={`flex items-center text-[11px] font-semibold rounded-full p-0.5 border ${
              theme === 'dark' ? 'bg-[#0E1118] border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setLang('vi')}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'vi' 
                    ? 'bg-indigo-600 text-white font-bold shadow-sm' 
                    : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'en' 
                    ? 'bg-indigo-600 text-white font-bold shadow-sm' 
                    : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
              title={theme === 'dark' ? 'Chế độ Sáng' : 'Chế độ Tối'}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10'
                  : 'bg-white border-slate-200 text-indigo-600 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenZaloModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase btn-neon cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>{t('nav.cta')}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-black'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-6 py-6 space-y-4 animate-fadeIn transition-colors ${
            theme === 'dark' ? 'bg-[#08090C] border-white/10 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-xl'
          }`}>
            <nav className="flex flex-col gap-3 text-xs uppercase tracking-wider font-semibold">
              <a
                href="#core-tabs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-cyan-400"
              >
                {t('nav.features')}
              </a>
              <a
                href="#pricing-matrix"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-cyan-400"
              >
                {t('nav.pricing')}
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-cyan-400"
              >
                {t('nav.testimonials')}
              </a>
              <a
                href="#responsive-simulator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-cyan-400"
              >
                {t('nav.responsive')}
              </a>
              <a
                href="#gifts-section"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-emerald-400 flex items-center gap-1.5"
              >
                <Gift className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('nav.gift')}</span>
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZaloModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-neon cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                {t('nav.cta')}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
