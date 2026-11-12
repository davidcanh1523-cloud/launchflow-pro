import React, { useState } from 'react';
import { Check, Zap, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface PricingMatrixProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingMatrix: React.FC<PricingMatrixProps> = ({ onSelectTier }) => {
  const { theme, t, lang } = useThemeLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const tiers = [
    {
      id: 'starter',
      name: 'Starter Dev',
      tagline: lang === 'vi' ? 'Dành cho MVP & Sản phẩm số thử nghiệm' : 'For MVPs & Digital Launches',
      monthlyPrice: '490.000',
      yearlyPrice: '3.900.000',
      period: lang === 'vi' ? '/dự án' : '/project',
      featured: false,
      badge: null,
      features: [
        lang === 'vi' ? '1 Landing Page tối ưu chuyển đổi' : '1 High-Converting Landing Page',
        lang === 'vi' ? 'Thiết kế chuẩn Mobile-First 100%' : '100% Mobile-First Responsive',
        lang === 'vi' ? 'Form thu lead gửi qua Email tự động' : 'Automated Email Lead Capture Form',
        lang === 'vi' ? 'Điểm Google PageSpeed 95+' : 'Google PageSpeed 95+ Score',
        lang === 'vi' ? 'Bảo hành kỹ thuật 6 tháng' : '6-Month Technical Warranty',
        lang === 'vi' ? 'Bàn giao Full Source Code' : 'Full Clean Source Code'
      ],
      cta: lang === 'vi' ? 'Khởi Động Với Starter' : 'Start with Starter'
    },
    {
      id: 'growth',
      name: 'Growth Pro',
      tagline: lang === 'vi' ? 'Tối ưu phễu chuyển đổi cho SaaS & Khóa học' : 'Max Conversion for SaaS & Academies',
      monthlyPrice: '890.000',
      yearlyPrice: '7.900.000',
      period: lang === 'vi' ? '/dự án' : '/project',
      featured: true,
      badge: lang === 'vi' ? '🔥 GÓI BÁN CHẠY NHẤT' : '🔥 MOST POPULAR',
      features: [
        lang === 'vi' ? 'Tất cả tính năng của gói Starter' : 'Everything in Starter Tier',
        lang === 'vi' ? '⚡ Form đồng bộ Zalo Lead trong 3 giây' : '⚡ 3-Second Zalo Lead Webhook Sync',
        lang === 'vi' ? 'Khối feedback khách hàng Testimonial Carousel trượt' : 'Sliding Testimonial Carousel',
        lang === 'vi' ? 'Bảng so sánh giá trực quan (Pricing Matrix)' : 'Interactive Pricing Matrix Block',
        lang === 'vi' ? '🎁 Tặng Tên miền .com + Cloud Server 1 năm' : '🎁 Free .com Domain + 1-Yr Cloud Server',
        lang === 'vi' ? 'Tối ưu SEO Top 1 Google + Schema JSON-LD' : 'SEO Top 1 Google + Schema JSON-LD',
        lang === 'vi' ? 'Bảo hành trọn gói 12 tháng' : 'Comprehensive 12-Month Full Warranty'
      ],
      cta: lang === 'vi' ? 'Chọn Gói Bán Chạy Nhất' : 'Select Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Scale',
      tagline: lang === 'vi' ? 'Quy mô lớn, đa ngôn ngữ & hệ sinh thái EdTech' : 'Multi-Language & Large-Scale Scale',
      monthlyPrice: '1.690.000',
      yearlyPrice: '14.900.000',
      period: lang === 'vi' ? '/dự án' : '/project',
      featured: false,
      badge: lang === 'vi' ? 'DOANH NGHIỆP' : 'ENTERPRISE',
      features: [
        lang === 'vi' ? 'Tất cả tính năng của gói Growth Pro' : 'Everything in Growth Pro Tier',
        lang === 'vi' ? 'Hỗ trợ đa ngôn ngữ quốc tế (VI / EN)' : 'Full Multi-Language (VI / EN)',
        lang === 'vi' ? 'Tích hợp thanh toán trực tuyến (VNPAY / Momo)' : 'Online Payment Gateways (Stripe/VNPAY)',
        lang === 'vi' ? 'Cổng thành viên / LMS bảo mật khóa học' : 'Membership / LMS Protected Portal',
        lang === 'vi' ? 'Cam kết SLA 99.99% Uptime Cloudflare' : '99.99% Cloudflare SLA Commitment',
        lang === 'vi' ? 'Đội ngũ kỹ thuật hỗ trợ 1-1 riêng biệt' : 'Dedicated 1-on-1 Engineering Support'
      ],
      cta: lang === 'vi' ? 'Tư Vấn Gói Doanh Nghiệp' : 'Contact Enterprise'
    }
  ];

  return (
    <section id="pricing-matrix" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#08090C]' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRICING COMPARISON MATRIX</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t('pricing.heading')}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
          }`}>
            {t('pricing.subheading')}
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-full border bg-slate-900/60 dark:bg-white/5 border-slate-700/50">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('pricing.monthly')}
            </button>

            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>{t('pricing.yearly')}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-white">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                tier.featured
                  ? 'tech-card-featured border-2 border-indigo-500 scale-100 lg:-translate-y-2'
                  : theme === 'dark' ? 'tech-card border-white/10' : 'bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Highlight Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg ${
                    tier.featured
                      ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600'
                      : 'bg-slate-700'
                  }`}>
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="mb-5">
                  <h3 className={`font-heading text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-1.5">
                  <span className={`font-heading text-3xl sm:text-4xl font-extrabold ${
                    tier.featured ? 'text-cyan-400' : (theme === 'dark' ? 'text-white' : 'text-slate-900')
                  }`}>
                    {billingCycle === 'yearly' ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">
                    đ {tier.period}
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    {lang === 'vi' ? 'Bao gồm trọn gói:' : 'Package inclusions:'}
                  </span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        tier.featured ? 'bg-cyan-500/20 text-cyan-400' : 'bg-indigo-500/20 text-indigo-400'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTier(tier.name)}
                className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  tier.featured
                    ? 'btn-neon shadow-lg shadow-indigo-500/30'
                    : theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
