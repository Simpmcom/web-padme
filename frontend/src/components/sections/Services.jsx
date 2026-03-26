import React from 'react';

const Services = () => {
  return (
    <>
      <section className="py-32" id="services">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal reveal-up">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Dịch vụ và Giải pháp</h2>
<p className="text-on-surface-variant text-lg">Chúng tôi cung cấp hệ sinh thái giải pháp số toàn diện, giúp doanh nghiệp chuyển đổi và tăng trưởng bền vững.</p>
</div>
<div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block mb-6"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Card 1 */}
<div className="glass-card rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,13,42,0.6)] transition-all duration-500 reveal reveal-up stagger-1">
<div className="h-64 overflow-hidden relative">
<img alt="Software Development" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYX9fvUN7oPTiC0HUZqyDrHfjmbL6hoDR1Ido7pJaBg-zdMBcaXdq7o9njnM9S2RUJrE3g1y_D8XS3ox1RsDZ1d74SLwPWb6czsip_KlBWt7n1DbcB8tzSRxXKBgTGH8irKVzdMv2P2g4Qn1X2skmCDT5-iP9RWUPgFcPmX35a-rLOK3nFpdRbY6BfitEPPXa_hajRc6sKgitmWOtLFm0VFjul6z--rMIPhK0t_OgZruMXrlL4xHsI983vELKhIaaDoWRn0E02US4l"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-variant/80 to-transparent"></div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-white mb-4">Software Development</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Hệ thống CRM / ERP tùy chỉnh
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                AI Agents cho doanh nghiệp
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Ứng dụng di động tối ưu
                            </li>
</ul>
<button className="text-primary font-bold flex items-center gap-2 group">
                            Tìm hiểu thêm 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Card 2 */}
<div className="glass-card rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,13,42,0.6)] transition-all duration-500 border-primary/20 reveal reveal-up stagger-2">
<div className="h-64 overflow-hidden relative">
<img alt="Digital Marketing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwOHinkkGIMlagz1xVivx2IrPUw0GW0XQNcjfvTdrBwXKdtjXyErTNGcrm5oY1jt9bwkzK9F_k5hP3rd9s6rZMRAodrrZi-HEOhetiX8ThiPw00HtJPJGBMtvLn0_nEwCmD3WxgAp2hdWMDpOVy1M2Mnvs3c1U9Sx1ZeGpFh5OM8jq5iMI8l5a-eDbF8Qg2QDo4B8T6Qjg-1W15FbUhw3i2PJ-o8ze-h51uiIchuASQ42DLL3TNz2Via6ZDy4XpPE68l6rTNa1Dnbu"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-variant/80 to-transparent"></div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-white mb-4">Digital Marketing</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Chiến lược tăng trưởng đột phá
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Marketing Automation chuyên sâu
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Data-driven Advertising
                            </li>
</ul>
<button className="text-primary font-bold flex items-center gap-2 group">
                            Tìm hiểu thêm 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Card 3 */}
<div className="glass-card rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,13,42,0.6)] transition-all duration-500 reveal reveal-up stagger-3">
<div className="h-64 overflow-hidden relative">
<img alt="Travel eSIM" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9zVrgwN9XE0pydlgSvajk1qAz6h99_bQSRXwzYiUmdwr12cNb6eF2MQMxRnZuy8NSLvuFu6-r-rgQ5fjjKZJrN9E8BV89suEqVumVCGbcKGdnTiOfIdBuyt6Ybd4gF_gpuF8doBq1hjK-7fGSFbCKTLN02GTZRlxffFgsgWUneH3QfK6MliWnvWGV6GU8aYv9ADuT8gL3-OT37Dar6W-RjN3x-UjSoegPGGePTExxtWHCmnGcj2pyWaWH9QC2n5h8uwnh48iEO3yv"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-variant/80 to-transparent"></div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-white mb-4">Travel eSIM (simpm.vn)</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Phủ sóng hơn 200+ quốc gia
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Kết nối tức thì, không cần sim vật lý
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                                Quản lý linh hoạt qua ứng dụng
                            </li>
</ul>
<button className="text-primary font-bold flex items-center gap-2 group">
                            Ghé thăm simpm.vn
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</section>
    </>
  );
};

export default Services;
