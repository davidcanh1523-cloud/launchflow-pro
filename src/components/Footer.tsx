import React from 'react';
import { 
  Rocket, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowUp, 
  ShieldCheck, 
  Code2, 
  Gift, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface FooterProps {
  onOpenZaloModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenZaloModal }) => {
  const { theme, t, lang } = useThemeLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className={`border-t text-xs pt-16 pb-28 md:pb-16 relative transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-[#05060A] border-white/10 text-slate-400' 
          : 'bg-[#F1F5F9] border-slate-200 text-slate-600'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                  <Rocket className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1">
                  <span className={`font-heading text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    LaunchFlow
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-indigo-600 text-white">
                    PRO
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed">
                {t('footer.desc')}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-slate-400">
                  React 19
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-slate-400">
                  Tailwind v4
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-slate-400">
                  TypeScript 5
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-slate-400">
                  PageSpeed 100
                </span>
              </div>
            </div>

            {/* Col 2: Cam kết */}
            <div className="space-y-3">
              <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan-400">
                {lang === 'vi' ? 'Cam Kết Tiêu Chuẩn' : 'Service SLA'}
              </h5>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bàn giao thần tốc: 24 - 48 giờ</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bảo hành toàn diện 12 tháng</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tặng Domain .com & Cloud Server 1 năm</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bàn giao 100% Full Source Code</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Hotline & Liên hệ */}
            <div className="space-y-3">
              <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-indigo-400">
                {lang === 'vi' ? 'Liên Hệ Trực Tiếp' : 'Direct Channels'}
              </h5>
              <div className="space-y-2">
                <a
                  href="tel:0912345678"
                  className="inline-flex items-center gap-2 text-base font-bold text-cyan-400 hover:text-cyan-300 font-mono"
                >
                  <Phone className="w-4 h-4" />
                  0912 345 678
                </a>
                <p className="text-[11px] text-slate-400">
                  Tư vấn kỹ thuật & Demo trực tiếp qua Zalo
                </p>
                <div className="pt-1 flex items-center gap-2">
                  <a
                    href="mailto:contact@paullabs.dev"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    contact@paullabs.dev
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4: Quick Action */}
            <div className="space-y-4">
              <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400">
                {lang === 'vi' ? 'Hành Động Ngay' : 'Get Started'}
              </h5>
              <p className="text-xs leading-relaxed">
                Đăng ký ngay hôm nay để nhận trọn bộ quà tặng Tên miền + Cloud Server 1 năm và đồng bộ Zalo trong 3 giây.
              </p>
              <button
                onClick={onOpenZaloModal}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider btn-neon flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>{t('nav.cta')}</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>{t('footer.copyright')}</p>
            <div className="flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <span>Lên đầu trang</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl backdrop-blur-md transition-colors ${
        theme === 'dark' ? 'bg-[#08090C]/95 border-indigo-500/30' : 'bg-white/95 border-slate-200'
      }`}>
        <a
          href="tel:0912345678"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Gọi Ngay</span>
        </a>

        <a
          href="https://zalo.me/0912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/30 active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
          <span>Chat Zalo</span>
        </a>

        <button
          onClick={onOpenZaloModal}
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white btn-neon active:scale-95 cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 text-amber-300" />
          <span>Tư Vấn 3 Giây</span>
        </button>
      </div>
    </>
  );
};
