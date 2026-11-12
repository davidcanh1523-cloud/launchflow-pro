import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  CheckCircle2, 
  Phone, 
  User, 
  Send, 
  MessageSquare, 
  Gift, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface InstantZaloModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export const InstantZaloModal: React.FC<InstantZaloModalProps> = ({
  isOpen,
  onClose,
  selectedTier
}) => {
  const { theme, t, lang } = useThemeLanguage();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [productType, setProductType] = useState('saas');
  const [timeline, setTimeline] = useState('urgent');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStep, setSyncStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const validatePhone = (p: string) => {
    const cleaned = p.replace(/[\s.-]/g, '');
    return /^(0|84)(3|5|7|8|9)[0-9]{8}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage(lang === 'vi' ? 'Vui lòng nhập họ và tên của bạn' : 'Please enter your full name');
      return;
    }

    if (!validatePhone(phone)) {
      setErrorMessage(lang === 'vi' ? 'Số điện thoại không hợp lệ (cần 10 chữ số, đầu 03, 05, 07, 08, 09)' : 'Please enter a valid Vietnamese phone number');
      return;
    }

    setIsSyncing(true);
    setSyncStep(1);

    // 3-Second Real-Time Webhook Simulation
    setTimeout(() => {
      setSyncStep(2);
    }, 1000);

    setTimeout(() => {
      setSyncStep(3);
    }, 2000);

    setTimeout(() => {
      setIsSyncing(false);
      setIsSuccess(true);
      const generatedTicket = `LF-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);

      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#06B6D4', '#10B981', '#F59E0B']
      });
    }, 3000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsSyncing(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden transition-colors ${
          theme === 'dark' 
            ? 'bg-[#0E1118] border-indigo-500/30 text-white' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            theme === 'dark'
              ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess && !isSyncing && (
          <div>
            {/* Header */}
            <div className="text-left mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>ĐỒNG BỘ ZALO TRONG 3 GIÂY</span>
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight mt-1">
                {t('modal.title')}
              </h3>

              <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
              }`}>
                {selectedTier 
                  ? (lang === 'vi' ? `Bạn đang chọn tư vấn gói: ${selectedTier}` : `Selected tier: ${selectedTier}`)
                  : t('modal.subtitle')}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('modal.name')} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={t('modal.namePlaceholder')}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-[#141926] border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('modal.phone')} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder={t('modal.phonePlaceholder')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-[#141926] border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              {/* Product Type */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('modal.product')}
                </label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className={`w-full border rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-indigo-500 transition-all cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-[#141926] border-white/10 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <option value="saas">Phần mềm SaaS & Web App</option>
                  <option value="mobile">Ứng dụng Di Động (iOS / Android)</option>
                  <option value="course">Khóa Học Trực Tuyến & Masterclass Edu</option>
                  <option value="other">Sản phẩm số khác / MVP Khởi Nghiệp</option>
                </select>
              </div>

              {/* Timeline Radio */}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {lang === 'vi' ? 'Tiến độ mong muốn:' : 'Desired Launch Timeline:'}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setTimeline('urgent')}
                    className={`py-2 px-2.5 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                      timeline === 'urgent'
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                        : theme === 'dark' ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    ⏱ 24 - 48h (Gấp)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeline('standard')}
                    className={`py-2 px-2.5 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                      timeline === 'standard'
                        ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                        : theme === 'dark' ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    1 - 2 tuần
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeline('flexible')}
                    className={`py-2 px-2.5 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                      timeline === 'flexible'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : theme === 'dark' ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    Trong tháng
                  </button>
                </div>
              </div>

              {/* Inclusions badge reminder */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                <Gift className="w-4 h-4 shrink-0" />
                <span>Miễn phí 100%: Tặng Domain .com + Cloud Server 1 năm & Full Source Code</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider btn-neon transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-xl shadow-indigo-500/25"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>{t('modal.submit')}</span>
              </button>
            </form>
          </div>
        )}

        {/* Live 3-Second Synchronizing Animation Screen */}
        {isSyncing && (
          <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
            <div className="relative w-20 h-20 mx-auto">
              <div className="w-20 h-20 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xl font-bold text-cyan-400">{3 - syncStep + 1}s</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-heading text-xl font-bold text-white">
                {t('modal.syncing')}
              </h4>
              <p className="text-xs font-mono text-slate-400">
                {syncStep === 1 && '🔐 Bước 1/3: Đang mã hóa thông tin người dùng chuẩn SSL 256-bit...'}
                {syncStep === 2 && '⚡ Bước 2/3: Đang kết nối webhook Zalo ZNS / OA bảo mật...'}
                {syncStep === 3 && '🚀 Bước 3/3: Đã gửi thông báo thành công đến chuyên viên tư vấn!'}
              </p>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 transition-all duration-1000"
                style={{ width: `${(syncStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Success Screen */}
        {isSuccess && (
          <div className="py-6 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1.5">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                TICKET: {ticketId}
              </span>
              <h4 className="font-heading text-2xl font-bold text-emerald-400 pt-2">
                {t('modal.success')}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                Cảm ơn <strong>{fullName}</strong>! Thông tin của bạn đã được chuyển thẳng tới Zalo của chuyên viên tư vấn (Hotline: 0912 345 678). Chúng tôi sẽ liên hệ lại ngay trong ít phút.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-left space-y-1.5 font-mono">
              <div className="text-slate-400">Khách hàng: <span className="text-white font-bold">{fullName}</span></div>
              <div className="text-slate-400">Số điện thoại Zalo: <span className="text-cyan-400 font-bold">{phone}</span></div>
              <div className="text-slate-400">Sản phẩm: <span className="text-amber-400 font-bold">{productType.toUpperCase()}</span></div>
              <div className="text-slate-400">Tiến độ: <span className="text-emerald-400 font-bold">24-48 Giờ</span></div>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={`https://zalo.me/0912345678`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Mở Chat Zalo Với Chuyên Viên Ngay</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Đóng Cửa Sổ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
