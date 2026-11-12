import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';
export type Language = 'vi' | 'en';

interface ThemeLanguageContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Top Bar Badges (Replicating Image)
    'badge.category': 'LANDING • SẢN PHẨM SỐ & CÔNG NGHỆ',
    'badge.time': '24 - 48 giờ',
    'badge.gift': 'Tặng Domain + Server 1 Năm',
    'badge.hotline': 'Hotline Tư Vấn: 0912 345 678',

    // Nav
    'nav.brand': 'LaunchFlow',
    'nav.brandSuffix': 'Pro',
    'nav.features': 'Tính Năng Cốt Lõi',
    'nav.pricing': 'Bảng Giá So Sánh',
    'nav.testimonials': 'Đánh Giá & Feedback',
    'nav.responsive': 'Trải Nghiệm Mobile',
    'nav.demo': 'Demo Trực Quan (3)',
    'nav.architecture': 'Kiến Trúc & Bảo Mật',
    'nav.gift': 'Quà Tặng 100%',
    'nav.cta': 'Nhận Tư Vấn 3 Giây',

    // Hero
    'hero.eyebrow': 'BẢN PHÁT HÀNH 2026 CHO SAAS, MOBILE APP & KHÓA HỌC',
    'hero.titleLine1': 'LaunchFlow Pro – Landing Page',
    'hero.titleLine2': 'Chuyển Đổi Cao Cho Sản Phẩm Công Nghệ',
    'hero.subtitle': 'Giao diện giới thiệu phần mềm SaaS, app di động và khóa học trực tuyến với tỷ lệ giữ chân trên 70%. Tối ưu hóa phễu đăng ký, tích hợp đồng bộ Zalo Lead trong 3 giây và bàn giao full source code 100%.',
    'hero.ctaConsult': 'Đăng Ký Nhận Tư Vấn (3 Giây)',
    'hero.ctaDemo': 'Xem Demo Thực Tế',
    'hero.stat1': '72.4%',
    'hero.stat1Label': 'Tỷ Lệ Giữ Chân Người Dùng',
    'hero.stat2': '< 150ms',
    'hero.stat2Label': 'Tốc Độ Tải Trang Global Edge',
    'hero.stat3': '3.2x',
    'hero.stat3Label': 'Tăng Trưởng Tỷ Lệ Chuyển Đổi',
    'hero.stat4': '100%',
    'hero.stat4Label': 'Sở Hữu Mã Nguồn Độc Lập',

    // Core Tabs Section (Image Replica)
    'tabs.heading': 'LaunchFlow Pro – Landing Page Chuyển Đổi Cao Cho Sản Phẩm Công Nghệ & Khóa Học',
    'tabs.subheading': 'Giao diện giới thiệu phần mềm SaaS, app di động và khóa học trực tuyến với tỷ lệ giữ chân trên 70%',
    'tabs.tab1': 'Hình ảnh Demo & Trực quan (3)',
    'tabs.tab2': 'Nghiệp vụ & Tính năng',
    'tabs.tab3': 'Kiến trúc & Bảo mật',
    'tabs.coreTitle': 'Quy trình & Tính năng cốt lõi đã hoàn thiện:',

    // 4 Core Cards
    'card1.title': 'Bảng so sánh gói sản phẩm trực quan, làm nổi bật gói bán chạy nhất',
    'card1.desc': 'Thiết kế bảng giá ma trận đa gói (Pricing Matrix) với công tắc chuyển đổi Tháng/Năm, huy hiệu Best Seller lấp lánh và nút CTA phân luồng theo chân dung khách hàng.',
    'card1.action': 'Trải nghiệm bảng giá ngay',

    'card2.title': 'Khối feedback khách hàng dạng thẻ trượt (Testimonial Carousel) uy tín',
    'card2.desc': 'Băng chuyền phản hồi thực tế dạng trượt mượt mà, định danh avatar, công ty, thang điểm 5 sao và chỉ số ROI cụ thể tạo niềm tin vững chắc cho người truy cập.',
    'card2.action': 'Xem khối testimonial trượt',

    'card3.title': 'Tích hợp form đăng ký nhận tư vấn và đồng bộ Zalo trong 3 giây',
    'card3.desc': 'Form thu thập khách hàng tiềm năng tốc độ cao với xác thực số điện thoại tự động, gửi webhook tức thì vào Zalo/Telegram của quản trị viên chỉ trong 3 giây.',
    'card3.action': 'Thử nghiệm gửi lead 3 giây',

    'card4.title': 'Tối ưu hiển thị hoàn hảo trên 100% các dòng điện thoại di động',
    'card4.desc': 'Chuẩn thiết kế Mobile-First đáp ứng 100% độ phân giải từ iPhone mini đến Galaxy Ultra và iPad, đảm bảo trải nghiệm chạm lướt 60 FPS không giật lag.',
    'card4.action': 'Kiểm tra giả lập thiết bị',

    // Gift Banner
    'gift.title': 'GÓI QUÀ TẶNG KÈM THEO DỰ ÁN (MIỄN PHÍ 100%)',
    'gift.item1': 'Tặng Tên miền .com + Cloud Server 1 năm',
    'gift.item2': 'Bảo hành 12 tháng bao trọn gói',
    'gift.item3': 'Bàn giao 100% Full Source Code',

    // Pricing Section
    'pricing.heading': 'Bảng So Sánh Các Gói Dịch Vụ',
    'pricing.subheading': 'Minh bạch chi phí, linh hoạt mở rộng tính năng theo quy mô sản phẩm công nghệ của bạn',
    'pricing.monthly': 'Thanh Toán Tháng',
    'pricing.yearly': 'Thanh Toán Năm (Tiết kiệm 20%)',
    'pricing.mostPopular': 'GÓI BÁN CHẠY NHẤT',

    // Testimonials
    'testi.heading': 'Khách Hàng Nói Gì Về LaunchFlow Pro',
    'testi.subheading': 'Được tin dùng bởi hơn 350+ Founder công nghệ, Giám đốc sản phẩm và Chuyên gia đào tạo',

    // Responsive Simulator
    'responsive.heading': 'Hiển Thị Hoàn Hảo Trên Mọi Thiết Bị Di Động',
    'responsive.subheading': 'Trải nghiệm tương tác mượt mà 60 FPS trên 100% kích thước màn hình',

    // Zalo Form Modal
    'modal.title': 'Đăng Ký Tư Vấn & Đồng Bộ Zalo Trong 3 Giây',
    'modal.subtitle': 'Hệ thống tự động kích hoạt webhook chuyển thông tin lead ngay lập tức qua Zalo / Telegram.',
    'modal.name': 'Họ và tên của bạn',
    'modal.namePlaceholder': 'Ví dụ: Nguyễn Đức Cảnh',
    'modal.phone': 'Số điện thoại nhận tư vấn (Zalo)',
    'modal.phonePlaceholder': 'Ví dụ: 0912 345 678',
    'modal.product': 'Loại sản phẩm cần làm landing page',
    'modal.submit': 'Gửi Thông Tin & Đồng Bộ Zalo Ngay',
    'modal.syncing': 'Đang đồng bộ qua Zalo (3 giây)...',
    'modal.success': 'Đã Đồng Bộ Thành Công Vào Zalo!',

    // Footer
    'footer.desc': 'LaunchFlow Pro – Giải pháp thiết kế landing page chuyển đổi cao chuẩn quốc tế dành riêng cho sản phẩm số, SaaS và khóa học trực tuyến.',
    'footer.copyright': '© 2026 LaunchFlow Pro by Paul Labs. Tất cả quyền được bảo lưu.'
  },
  en: {
    // Top Bar Badges
    'badge.category': 'LANDING • DIGITAL PRODUCTS & TECH',
    'badge.time': '24 - 48 Hours',
    'badge.gift': 'Free Domain + 1 Year Cloud Server',
    'badge.hotline': 'Concierge Line: +84 912 345 678',

    // Nav
    'nav.brand': 'LaunchFlow',
    'nav.brandSuffix': 'Pro',
    'nav.features': 'Core Features',
    'nav.pricing': 'Pricing Matrix',
    'nav.testimonials': 'Testimonials',
    'nav.responsive': 'Mobile Experience',
    'nav.demo': 'Live Demos (3)',
    'nav.architecture': 'Architecture & Security',
    'nav.gift': '100% Gifts',
    'nav.cta': '3-Second Instant Lead',

    // Hero
    'hero.eyebrow': '2026 FLAGSHIP RELEASE FOR SAAS, MOBILE APPS & COURSES',
    'hero.titleLine1': 'LaunchFlow Pro – High-Converting',
    'hero.titleLine2': 'Landing Page for Tech & Academies',
    'hero.subtitle': 'Showcase SaaS software, mobile apps & online academies with >70% audience retention rate. Optimized funnel, instant 3-second Zalo CRM sync, and 100% full source code ownership.',
    'hero.ctaConsult': 'Request Consultation (3s Sync)',
    'hero.ctaDemo': 'Explore Live Demos',
    'hero.stat1': '72.4%',
    'hero.stat1Label': 'Audience Retention Rate',
    'hero.stat2': '< 150ms',
    'hero.stat2Label': 'Global Edge Loading Latency',
    'hero.stat3': '3.2x',
    'hero.stat3Label': 'Conversion Rate Multiplier',
    'hero.stat4': '100%',
    'hero.stat4Label': 'Full Source Code Ownership',

    // Core Tabs Section
    'tabs.heading': 'LaunchFlow Pro – High-Converting Landing Page for Tech Products & Online Courses',
    'tabs.subheading': 'Showcase SaaS software, mobile apps & online academies with >70% audience retention rate',
    'tabs.tab1': 'Interactive Demo Visuals (3)',
    'tabs.tab2': 'Core Capabilities & Workflow',
    'tabs.tab3': 'Architecture & Security',
    'tabs.coreTitle': 'Production-Ready Core Features & Workflow:',

    // 4 Core Cards
    'card1.title': 'Intuitive pricing comparison matrix highlighting best-selling tier',
    'card1.desc': 'Interactive pricing matrix with Monthly/Yearly discount switch, radiant Best Seller badge, and audience-tailored conversion paths.',
    'card1.action': 'Test pricing table now',

    'card2.title': 'Credible testimonial carousel with sliding customer feedback cards',
    'card2.desc': 'Smooth touch-enabled sliding carousel with verified avatars, company titles, 5-star ratings, and tangible ROI case metrics.',
    'card2.action': 'Browse customer carousel',

    'card3.title': 'Lead consultation form with instant 3-second Zalo/Telegram webhook sync',
    'card3.desc': 'Lightning-speed lead capture with phone validation and automated 3-second instant webhook push directly to manager channels.',
    'card3.action': 'Test 3s webhook sync',

    'card4.title': 'Flawless responsive optimization across 100% mobile viewports',
    'card4.desc': 'Mobile-First architecture verified across iOS mini to Galaxy Ultra and tablets with seamless 60 FPS touch fluidity.',
    'card4.action': 'Try device emulator',

    // Gift Banner
    'gift.title': 'COMPLIMENTARY PROJECT INCLUSIONS (100% FREE)',
    'gift.item1': 'Free .com Domain + 1 Year Cloud Server',
    'gift.item2': 'Comprehensive 12-Month Full Warranty',
    'gift.item3': '100% Full Source Code Handover',

    // Pricing Section
    'pricing.heading': 'Comparative Pricing Matrix',
    'pricing.subheading': 'Transparent tiers designed to scale with your digital product velocity',
    'pricing.monthly': 'Monthly Billing',
    'pricing.yearly': 'Annual Billing (Save 20%)',
    'pricing.mostPopular': 'MOST POPULAR',

    // Testimonials
    'testi.heading': 'What Tech Leaders Say About LaunchFlow Pro',
    'testi.subheading': 'Trusted by 350+ software founders, product leads, and digital academy creators',

    // Responsive Simulator
    'responsive.heading': 'Engineered For 100% Mobile Perfection',
    'responsive.subheading': 'Pixel-perfect 60 FPS fluidity on every mobile and tablet viewport',

    // Zalo Form Modal
    'modal.title': 'Instant Consultation & 3-Second Zalo Lead Sync',
    'modal.subtitle': 'Automated webhook triggers lead information directly to manager Zalo/Telegram channels in 3 seconds.',
    'modal.name': 'Your Full Name',
    'modal.namePlaceholder': 'e.g., Alex Johnson',
    'modal.phone': 'Phone Number (Zalo / Mobile)',
    'modal.phonePlaceholder': 'e.g., +84 912 345 678',
    'modal.product': 'Product Type to Launch',
    'modal.submit': 'Submit & Sync to Zalo Now',
    'modal.syncing': 'Transmitting lead to Zalo (3s)...',
    'modal.success': 'Successfully Synced to Zalo CRM!',

    // Footer
    'footer.desc': 'LaunchFlow Pro – World-class high-converting landing page architecture tailored for SaaS, mobile apps & online education.',
    'footer.copyright': '© 2026 LaunchFlow Pro by Paul Labs. All rights reserved.'
  }
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get('theme') as Theme | null;
      if (urlTheme === 'light' || urlTheme === 'dark') return urlTheme;
      const savedTheme = localStorage.getItem('lf_theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    }
    return 'dark';
  });

  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language | null;
      if (urlLang === 'vi' || urlLang === 'en') return urlLang;
      const savedLang = localStorage.getItem('lf_lang') as Language | null;
      if (savedLang === 'vi' || savedLang === 'en') return savedLang;
    }
    return 'vi';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('lf_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lf_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['vi']?.[key] || key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  }
  return context;
};
