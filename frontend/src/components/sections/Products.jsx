import React from 'react';

const Products = () => {
  return (
    <>
      <section className="py-24 px-8 max-w-7xl mx-auto" id="products">
<div className="mb-20 space-y-4 reveal reveal-up">
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-primary"></div>
<span className="text-primary font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                Sản phẩm <span className="text-primary text-glow">nổi bật</span>
</h2>
<p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                Khám phá những giải pháp công nghệ tiên phong, nơi AI và dữ liệu hội tụ để kiến tạo giá trị thực cho doanh nghiệp.
            </p>
</div>
{/* Bento-style Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Project 1: simpm.vn */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 reveal reveal-up stagger-1">
<div className="aspect-[16/9] w-full overflow-hidden">
<img alt="simpm.vn Platform" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtA-xdfRrRnK1O-C4aOFGtiYHn56u004_11rU1jwsu1u46nLjL8qtU1PmLGzzwvoUpAz46gOqItuyl_JvGY7Hsqw6vxXR0gPxzmbFXWX0ruLbf-UMO3UQbu7r3AyWDaVq0tWBp4ufTGNsOrFjq95RiobkDd8Bub63Wb74jJwtMkHBHTmBdfJ9x-wLOKBNAJvMyrzngmLxh4TgiLVgQcNA1-bldAGD4KtfcNzrqtkYQaOR0NTJoskhy_ZvdCvLro3-IpO3tBULCC080"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent p-8 flex flex-col justify-end">
<div className="flex items-center gap-3 mb-4">
<span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Telecom Tech</span>
</div>
<h3 className="text-3xl font-bold text-white mb-3">simpm.vn</h3>
<p className="text-on-surface-variant max-w-xl text-sm md:text-base leading-relaxed mb-6">
                        Nền tảng cung cấp eSIM du lịch toàn cầu tối ưu, tích hợp hệ thống thanh toán đa phương thức (VNPAY, MoMo, ZaloPay) với tốc độ xử lý giao dịch dưới 2 giây. Hỗ trợ hơn 200 quốc gia và vùng lãnh thổ.
                    </p>
<div className="flex gap-4">
<button className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group/link">
                            Xem chi tiết 
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Project 2: AI Dashboard */}
<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 reveal reveal-up stagger-2">
<div className="aspect-[4/5] w-full overflow-hidden">
<img alt="AI Enterprise Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARSUVmSyKFnTtFWyh_S5UU2InCY4euJBy_xmwETRp-kPo_3J6Xsc-yAv9nUFthswfYPHw8nvcy4ZE3alfppkT55DHOJ9KYp9vCSp2XIddOR-vp3D8PoyfXubrzWbHJQYuk2NpuslmxKvsofpuraMaTSO6-Z83TjyBIg8K-7JkpZY4OS16K6y0SkMbx0pewYR1VugMPYNZPFh4NI05gBJKCwnsHOQY0J3YOHvslx6oYAAOT2KJwuSsPoQIV_e_J3nBtvdlU24AlSulD"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent p-8 flex flex-col justify-end">
<span className="bg-tertiary/20 text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">AI Business</span>
<h3 className="text-2xl font-bold text-white mb-3">AI Dashboard</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                        Hệ thống quản trị doanh nghiệp ứng dụng AI để phân tích dữ liệu kinh doanh theo thời gian thực, dự báo xu hướng thị trường.
                    </p>
</div>
</div>
{/* Project 3: Marketing Report */}
<div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row reveal reveal-up stagger-3">
<div className="md:w-1/2 overflow-hidden">
<img alt="Marketing Automation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADbTxzFumN4jx9Fh9e7yVGsB8iYe_ggSMw_3NlbDnQNAS0W6dDNVyFLXipdITC70F5iRRHHtTt4JsZjAtZqStp_qfwg-GMioWIsEkbqb-4cd7cADO0BuxPTvnL4RqHPFQuE73A7wlipNLI93MROBvvoNcy_hl-DstRN4Aev_z8G1qmYAgzHJhTwEWOMHJQ3VlZZDB2o5PYtr_R7zcJhgLbuTifLViPxl1IsnbOvIWKQKrqIBqAsVOW_NbQ-ZBFu1zNOpYqIgz2Nac1"/>
</div>
<div className="md:w-1/2 p-12 flex flex-col justify-center bg-surface-container-high">
<span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-6">Automation</span>
<h3 className="text-4xl font-bold text-white mb-6">Marketing Report</h3>
<p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        Công cụ tự động hóa báo cáo đa kênh, tích hợp AI để đánh giá hiệu quả chiến dịch và đề xuất giải pháp tối ưu hóa chi phí quảng cáo tự động. Giúp doanh nghiệp tiết kiệm 40% thời gian tổng hợp dữ liệu.
                    </p>
<div className="flex items-center gap-8">
<div className="flex flex-col">
<span className="text-3xl font-bold text-primary">98%</span>
<span className="text-xs text-on-surface-variant uppercase tracking-widest">Accuracy</span>
</div>
<div className="h-10 w-px bg-outline-variant/20"></div>
<div className="flex flex-col">
<span className="text-3xl font-bold text-primary">40%</span>
<span className="text-xs text-on-surface-variant uppercase tracking-widest">Efficiency</span>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
};

export default Products;
