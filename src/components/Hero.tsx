import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Activity, 
  Smartphone, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Users,
  Eye,
  Star
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface HeroProps {
  onOpenZaloModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenZaloModal }) => {
  const { theme, t, lang } = useThemeLanguage();
  const [activeShowcase, setActiveShowcase] = useState<'saas' | 'mobile' | 'course'>('saas');

  return (
    <section className="relative pt-12 pb-20 overflow-hidden cyber-grid">
      {/* Dynamic Ambient Neon Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-indigo-500/20 via-cyan-500/15 to-purple-500/20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider mb-6 border transition-all duration-300 backdrop-blur-md animate-pulse ${
          theme === 'dark' 
            ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-300' 
            : 'bg-indigo-50 border-indigo-300 text-indigo-700 shadow-sm'
        }">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t('hero.eyebrow')}</span>
        </div>

        {/* Headline */}
        <h1 className={`font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.12] mb-6 transition-colors ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          {t('hero.titleLine1')} <br />
          <span className="gradient-text-cyber">
            {t('hero.titleLine2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-sm sm:text-lg max-w-3xl leading-relaxed mb-9 transition-colors ${
          theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
        }`}>
          {t('hero.subtitle')}
        </p>

        {/* CTA Cluster */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onOpenZaloModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase btn-neon cursor-pointer flex items-center justify-center gap-2.5 active:scale-95 transition-all shadow-xl"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>{t('hero.ctaConsult')}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <a
            href="#core-tabs"
            className={`w-full sm:w-auto px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10 hover:border-cyan-400'
                : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-indigo-500 shadow-sm'
            }`}
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>{t('hero.ctaDemo')}</span>
          </a>
        </div>

        {/* Social Proof Avatars */}
        <div className="flex items-center justify-center gap-3 mb-14 flex-wrap">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-500 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Founder 1" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-500 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Founder 2" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-500 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Founder 3" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-500 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Founder 4" />
          </div>
          <div className="text-left text-xs">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="font-bold text-xs ml-1 text-slate-200 dark:text-slate-200">5.0 / 5</span>
            </div>
            <p className={`text-[11px] font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {lang === 'vi' ? 'Hơn 350+ Founder & Educator công nghệ tin dùng' : 'Trusted by 350+ Tech Founders & Educators'}
            </p>
          </div>
        </div>

        {/* 4 Key Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl mb-16">
          <div className="tech-card p-5 rounded-2xl text-left border">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-cyan-400 mb-1">{t('hero.stat1')}</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t('hero.stat1Label')}</div>
          </div>

          <div className="tech-card p-5 rounded-2xl text-left border">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400 mb-1">{t('hero.stat2')}</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t('hero.stat2Label')}</div>
          </div>

          <div className="tech-card p-5 rounded-2xl text-left border">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-indigo-400 mb-1">{t('hero.stat3')}</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t('hero.stat3Label')}</div>
          </div>

          <div className="tech-card p-5 rounded-2xl text-left border">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-400 mb-1">{t('hero.stat4')}</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{t('hero.stat4Label')}</div>
          </div>
        </div>

        {/* Interactive Live Product Mockup Showcase */}
        <div className="w-full max-w-5xl rounded-3xl p-3 sm:p-5 tech-card-featured border text-left">
          {/* Header Bar */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline">
                launchflow-live-preview.app
              </span>
            </div>

            {/* Showcase Selector Tabs */}
            <div className={`flex items-center gap-1.5 p-1 rounded-xl text-xs font-semibold border ${
              theme === 'dark' ? 'bg-[#0E1118] border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setActiveShowcase('saas')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeShowcase === 'saas'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>SaaS Dashboard</span>
              </button>

              <button
                onClick={() => setActiveShowcase('mobile')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeShowcase === 'mobile'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile App</span>
              </button>

              <button
                onClick={() => setActiveShowcase('course')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeShowcase === 'course'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Online Academy</span>
              </button>
            </div>
          </div>

          {/* Interactive Live Content */}
          {activeShowcase === 'saas' && (
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0B0D14] border border-white/10 text-white animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Monthly Recurring Revenue</span>
                  <div className="text-2xl font-bold font-mono text-emerald-400">$48,290.00</div>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +28.4% vs last month
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Conversion Rate (Funnel)</span>
                  <div className="text-2xl font-bold font-mono text-cyan-400">14.82%</div>
                  <span className="text-[11px] text-cyan-400 font-semibold flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> Industry avg: 3.2%
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Active Trial Accounts</span>
                  <div className="text-2xl font-bold font-mono text-indigo-400">3,482 Users</div>
                  <span className="text-[11px] text-indigo-400 font-semibold flex items-center gap-1 mt-1">
                    <Users className="w-3 h-3" /> 84% onboarding completed
                  </span>
                </div>
              </div>

              {/* Mockup Chart Graphic */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Growth Velocity (Last 30 Days)</span>
                  <span className="text-emerald-400">● Live Real-Time Webhook</span>
                </div>
                <div className="h-28 flex items-end gap-2 pt-4">
                  {[35, 42, 48, 55, 62, 58, 67, 74, 82, 89, 94, 98].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                      <div 
                        style={{ height: `${h}%` }}
                        className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-cyan-400 group-hover/bar:brightness-125 transition-all"
                      ></div>
                      <span className="text-[9px] font-mono text-slate-500 hidden sm:block">W{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeShowcase === 'mobile' && (
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0B0D14] border border-white/10 text-white animate-fadeIn flex flex-col md:flex-row items-center gap-6">
              <div className="w-48 sm:w-56 aspect-[9/18] rounded-3xl border-4 border-slate-700 bg-slate-900 overflow-hidden shadow-2xl relative shrink-0">
                <div className="h-5 w-24 bg-slate-800 mx-auto rounded-b-xl flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-950"></span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold">App Chuyển Đổi Cao</div>
                    <div className="text-[10px] text-slate-400">1-Tap Google & Apple Pay</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-[10px] text-indigo-300">
                    ⚡ Thông báo đẩy tỷ lệ mở 42%
                  </div>
                  <button className="w-full py-2 rounded-xl bg-cyan-500 text-[#08090C] font-bold text-xs">
                    Cài Đặt Ngay (Free)
                  </button>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                  Mobile App Download Funnel
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  Tối Ưu Trải Nghiệm Tải App Mobile Chuyển Đổi Trên 40%
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Thiết kế nút Smart App Banner tự động nhận diện thiết bị iOS / Android, QR code tải app thông minh và tích hợp deep linking đưa người dùng thẳng vào quy trình thanh toán.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">✓ Smart Deep Link</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">✓ Apple App Store Verified</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">✓ Google Play 1-Tap</span>
                </div>
              </div>
            </div>
          )}

          {activeShowcase === 'course' && (
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0B0D14] border border-white/10 text-white animate-fadeIn space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                    Masterclass LMS Portal
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading mt-2">
                    Khóa Học: AI Agent & Fullstack Automation 2026
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-extrabold text-amber-400">1.890.000 đ</div>
                  <span className="text-[11px] text-slate-400 line-through">4.500.000 đ</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block mb-1">Chương trình học</span>
                  <span className="font-bold text-white">8 Modules • 48 Video HD</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block mb-1">Cộng đồng VIP</span>
                  <span className="font-bold text-emerald-400">Hỗ trợ 1-1 qua Zalo/Discord</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block mb-1">Chứng chỉ hoàn thành</span>
                  <span className="font-bold text-cyan-400">NFT Certificate Verifiable</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
