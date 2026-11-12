import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

export const TestimonialCarousel: React.FC = () => {
  const { theme, t, lang } = useThemeLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Hoàng Nam',
      role: 'Co-founder & CEO',
      company: 'CloudPulse SaaS',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      metric: '+340% Lượt Dùng Thử',
      metricEn: '+340% Free Trials',
      content: lang === 'vi' 
        ? 'Trước đây trang landing page cũ của chúng tôi chỉ đạt conversion 2.1%. Sau khi triển khai LaunchFlow Pro, tỷ lệ giữ chân tăng vọt lên 74.8% và số lượt đăng ký dùng thử tăng 3.4 lần trong 30 ngày đầu tiên.'
        : 'Our previous landing page converted at only 2.1%. With LaunchFlow Pro, retention skyrocketed to 74.8% and free trial signups surged 3.4x in the very first month.',
      verified: true
    },
    {
      id: 2,
      name: 'Trần Thùy Linh',
      role: 'Founder & Head of Academy',
      company: 'IELTS Masterclass Edu',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      metric: 'Tăng 65% Tỷ Lệ Chốt Khóa',
      metricEn: '+65% Course Conversion',
      content: lang === 'vi'
        ? 'Khóa học của tôi chốt đơn cực kỳ ấn tượng nhờ form đồng bộ Zalo trong 3 giây. Học viên vừa điền số điện thoại là team tư vấn liên hệ ngay lập tức, tỷ lệ đóng học phí thành công tăng vọt.'
        : 'Course enrollment exceeded all expectations thanks to the 3-second Zalo sync. Leads are contacted instantaneously by our team, driving a 65% surge in paid students.',
      verified: true
    },
    {
      id: 3,
      name: 'Lê Minh Tuấn',
      role: 'Founder & CTO',
      company: 'ResumeAI Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      metric: 'Bàn Giao 24h & Clean Code',
      metricEn: '24h Delivery & Clean Code',
      content: lang === 'vi'
        ? 'Bàn giao trọn gói 100% full source code sạch sẽ chuẩn React & Tailwind. Tôi dễ dàng cắm backend API vào mà không gặp bất kỳ xung đột nào. Tốc độ PageSpeed đạt tuyệt đối 100 điểm.'
        : 'Handed over 100% clean source code in React & Tailwind. I plugged our backend APIs seamlessly without friction, scoring a flawless 100 on Google PageSpeed.',
      verified: true
    },
    {
      id: 4,
      name: 'Elena Vũ',
      role: 'Head of Growth',
      company: 'FinTrack Mobile',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      metric: 'CAC Giảm 42%',
      metricEn: 'CAC Reduced by 42%',
      content: lang === 'vi'
        ? 'Thiết kế mobile-first mượt mà 60 FPS giúp lượt tải ứng dụng từ chiến dịch quảng cáo chuyển đổi cực tốt. Khách hàng bấm 1 chạm là đưa thẳng về App Store, tiết kiệm đáng kể ngân sách ads.'
        : 'The 60 FPS mobile-first layout elevated our ad conversion rate dramatically. Users tap directly into the App Store with 1 click, shaving 42% off our acquisition costs.',
      verified: true
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0A0D14]' : 'bg-[#F8FAFC]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>TESTIMONIAL CAROUSEL</span>
            </div>
            <h2 className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {t('testi.heading')}
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-xl ${
              theme === 'dark' ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
            }`}>
              {t('testi.subheading')}
            </p>
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/15'
                  : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
              }`}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/15'
                  : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
              }`}
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="w-full shrink-0 px-2 sm:px-4"
              >
                <div className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 relative ${
                  theme === 'dark'
                    ? 'bg-[#10141F] border-white/10 shadow-2xl'
                    : 'bg-white border-slate-200 shadow-lg'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-indigo-500 shadow-md"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className={`font-heading text-lg font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.name}
                          </h4>
                          {item.verified && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                              <CheckCircle className="w-3 h-3 text-cyan-400" />
                              {lang === 'vi' ? 'Đã kiểm chứng' : 'Verified'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.role} • <span className="text-indigo-400 font-semibold">{item.company}</span>
                        </p>
                      </div>
                    </div>

                    {/* Metric Highlight Badge */}
                    <div className="flex items-center gap-3">
                      <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" />
                        <span>{lang === 'vi' ? item.metric : item.metricEn}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="relative">
                    <Quote className="w-10 h-10 text-indigo-500/15 absolute -top-4 -left-2 pointer-events-none" />
                    <p className={`text-sm sm:text-lg leading-relaxed relative z-10 ${
                      theme === 'dark' ? 'text-slate-200 font-light' : 'text-slate-700 font-normal'
                    }`}>
                      "{item.content}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i 
                  ? 'w-8 bg-gradient-to-r from-indigo-500 to-cyan-400' 
                  : 'w-2 bg-slate-600/40 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
