import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Eye, 
  ArrowRight,
  Gift, 
  Server, 
  Code2, 
  Cpu, 
  Lock, 
  Zap, 
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface CoreFeaturesTabProps {
  onOpenZaloModal: () => void;
  onScrollToPricing: () => void;
  onScrollToTestimonials: () => void;
  onScrollToResponsive: () => void;
}

export const CoreFeaturesTab: React.FC<CoreFeaturesTabProps> = ({
  onOpenZaloModal,
  onScrollToPricing,
  onScrollToTestimonials,
  onScrollToResponsive
}) => {
  const { theme, t, lang } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState<'demo' | 'features' | 'architecture'>('features');
  const [activeDemoImg, setActiveDemoImg] = useState(0);

  const demoVisuals = [
    {
      title: lang === 'vi' ? 'Giao Diện Quản Trị SaaS & Báo Cáo Chuyển Đổi' : 'SaaS Analytics Dashboard & Funnel Metrics',
      tag: 'SaaS & Web App',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
      desc: lang === 'vi' ? 'Bố cục hiện đại theo phong cách Linear/Vercel với biểu đồ MRR thời gian thực, bảng phân tích khách hàng và phễu chuyển đổi 60 FPS.' : 'Modern Linear/Vercel-inspired dark interface with real-time MRR charts and conversion funnels.'
    },
    {
      title: lang === 'vi' ? 'Phễu Giới Thiệu & Tải Ứng Dụng Mobile Chuyển Đổi Cao' : 'Mobile App Download Funnel & Smart Links',
      tag: 'Mobile App Store',
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85',
      desc: lang === 'vi' ? 'Khung thiết bị di động tương tác, nút tải 1 chạm App Store & Google Play kèm tính năng quét mã QR tự động nhận diện hệ điều hành.' : 'Interactive mobile device mockup, 1-tap download buttons, and OS-aware dynamic QR codes.'
    },
    {
      title: lang === 'vi' ? 'Cổng Khóa Học Trực Tuyến & Cổng Thanh Toán Tức Thì' : 'Online Course Portal & Checkout Experience',
      tag: 'EdTech & Course',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85',
      desc: lang === 'vi' ? 'Bảng lộ trình học tập trực quan, video demo preview không giật lag và form đăng ký học viên đồng bộ Zalo trong 3 giây.' : 'Interactive curriculum syllabus, smooth video preview player, and 3-second Zalo CRM sync form.'
    }
  ];

  return (
    <section id="core-tabs" className={`py-20 relative overflow-hidden border-y transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#0A0D14]/90 border-indigo-500/15' 
        : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Modal/Section Card Container replicating Image */}
        <div className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-[#0E1118]/90 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]'
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          {/* Top Badges Exactly As Image */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                theme === 'dark'
                  ? 'bg-cyan-950/80 text-cyan-400 border-cyan-500/40'
                  : 'bg-cyan-50 text-cyan-700 border-cyan-300'
              }`}>
                {t('badge.category')}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                theme === 'dark'
                  ? 'text-emerald-300 bg-emerald-950/70 border-emerald-500/40'
                  : 'text-emerald-800 bg-emerald-50 border-emerald-300 font-bold'
              }`}>
                ⏱ {t('badge.time')}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                theme === 'dark'
                  ? 'text-amber-300 bg-amber-950/70 border-amber-500/40'
                  : 'text-amber-800 bg-amber-50 border-amber-300 font-bold'
              }`}>
                🎁 {t('badge.gift')}
              </span>
            </div>

            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              PRO-VERSION 2026.1
            </span>
          </div>

          {/* Main Title & Subtitle Exactly As Image */}
          <div className="mb-8">
            <h2 className={`font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {t('tabs.heading')}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
            }`}>
              {t('tabs.subheading')}
            </p>
          </div>

          {/* 3 Tabs Exactly As Image */}
          <div className={`flex items-center border-b mb-8 overflow-x-auto ${
            theme === 'dark' ? 'border-white/10' : 'border-slate-200'
          }`}>
            <button
              onClick={() => setActiveTab('demo')}
              className={`pb-3.5 px-4 sm:px-6 text-sm font-semibold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'demo'
                  ? 'border-cyan-400 text-cyan-400 font-bold'
                  : theme === 'dark' ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{t('tabs.tab1')}</span>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3.5 px-4 sm:px-6 text-sm font-semibold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'features'
                  ? 'border-cyan-400 text-cyan-400 font-bold'
                  : theme === 'dark' ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{t('tabs.tab2')}</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-3.5 px-4 sm:px-6 text-sm font-semibold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'border-cyan-400 text-cyan-400 font-bold'
                  : theme === 'dark' ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t('tabs.tab3')}</span>
            </button>
          </div>

          {/* TAB 2 CONTENT: Nghiệp vụ & Tính năng (ACTIVE IN IMAGE) */}
          {activeTab === 'features' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Section Subheading */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className={`text-base sm:text-lg font-bold tracking-tight flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                  {t('tabs.coreTitle')}
                </h3>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Production Certified
                </span>
              </div>

              {/* The 4 Core Feature Cards Exactly Replicating Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* Card 1: Bảng so sánh gói sản phẩm */}
                <div
                  onClick={onScrollToPricing}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-[#10141F] border-white/10 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-500 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-bold group-hover:text-cyan-400 transition-colors flex items-center justify-between ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        <span>{t('card1.title')}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-400 shrink-0 ml-2" />
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
                      }`}>
                        {t('card1.desc')}
                      </p>
                      <div className="pt-2 text-xs font-semibold text-cyan-400 flex items-center gap-1">
                        <span>{t('card1.action')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Khối feedback khách hàng */}
                <div
                  onClick={onScrollToTestimonials}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-[#10141F] border-white/10 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-amber-500 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-bold group-hover:text-amber-400 transition-colors flex items-center justify-between ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        <span>{t('card2.title')}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-amber-400 shrink-0 ml-2" />
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
                      }`}>
                        {t('card2.desc')}
                      </p>
                      <div className="pt-2 text-xs font-semibold text-amber-400 flex items-center gap-1">
                        <span>{t('card2.action')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Tích hợp form đăng ký nhận tư vấn và đồng bộ Zalo trong 3 giây */}
                <div
                  onClick={onOpenZaloModal}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-[#10141F] border-white/10 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-emerald-500 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-bold group-hover:text-emerald-400 transition-colors flex items-center justify-between ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        <span>{t('card3.title')}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-400 shrink-0 ml-2" />
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
                      }`}>
                        {t('card3.desc')}
                      </p>
                      <div className="pt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <span>{t('card3.action')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Tối ưu hiển thị hoàn hảo trên 100% các dòng điện thoại di động */}
                <div
                  onClick={onScrollToResponsive}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-[#10141F] border-white/10 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-500 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-bold group-hover:text-indigo-400 transition-colors flex items-center justify-between ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        <span>{t('card4.title')}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-indigo-400 shrink-0 ml-2" />
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
                      }`}>
                        {t('card4.desc')}
                      </p>
                      <div className="pt-2 text-xs font-semibold text-indigo-400 flex items-center gap-1">
                        <span>{t('card4.action')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1 CONTENT: Hình ảnh Demo & Trực quan (3) */}
          {activeTab === 'demo' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {demoVisuals.map((demo, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveDemoImg(idx)}
                    className={`rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 group ${
                      activeDemoImg === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-xl'
                        : theme === 'dark' ? 'bg-[#10141F] border-white/10 hover:border-white/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-400'
                    }`}
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-black relative">
                      <img
                        src={demo.url}
                        alt={demo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                        {demo.tag}
                      </span>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h4 className={`font-bold text-sm group-hover:text-cyan-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {demo.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {demo.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3 CONTENT: Kiến trúc & Bảo mật */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={`p-6 rounded-2xl border space-y-3 ${
                  theme === 'dark' ? 'bg-[#10141F] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className={`font-heading text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Next.js 15 & React 19 Engine
                  </h4>
                  <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Server-Side Rendering kết hợp Edge Serverless xử lý dữ liệu tức thì dưới 150ms trên 300+ PoPs toàn cầu của Vercel & Cloudflare.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border space-y-3 ${
                  theme === 'dark' ? 'bg-[#10141F] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className={`font-heading text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Bảo Mật Form & Webhook SLA 99.9%
                  </h4>
                  <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Chống spam rate-limit thông minh, mã hóa SSL 256-bit, chuyển tiếp webhook trực tiếp vào Zalo OA mà không qua trung gian thứ ba.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border space-y-3 ${
                  theme === 'dark' ? 'bg-[#10141F] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className={`font-heading text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    100% Full Clean Source Code
                  </h4>
                  <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Bàn giao trọn gói mã nguồn sạch chuẩn TypeScript + Tailwind CSS, tự do deploy lên server riêng, không bị khóa vào bất kỳ nền tảng nào.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* GIFT BOX BANNER: Exactly Replicating the Bottom Box from the Image */}
          <div id="gifts-section" className="mt-8 rounded-2xl p-5 sm:p-6 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-cyan-950/40 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3.5">
              <Gift className="w-5 h-5 text-emerald-400 animate-bounce" />
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 font-heading">
                {t('gift.title')}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="font-medium">{t('gift.item1')}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="font-medium">{t('gift.item2')}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="font-medium">{t('gift.item3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
