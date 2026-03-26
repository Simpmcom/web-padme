import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b border-white/5">
<div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div className="text-2xl font-black tracking-tighter text-white uppercase font-['Space_Grotesk']">
            PADME
        </div>
<div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] font-bold tracking-tight">
<a className="text-orange-500 border-b-2 border-orange-500 pb-1" href="#">Trang chủ</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#about">Về chúng tôi</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#services">Dịch vụ</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#products">Sản phẩm</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#contact">Liên hệ</a>
</div>
<button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold scale-95 active:scale-90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,141,33,0.5)]">
            Khám phá giải pháp
        </button>
</div>
</nav>
    </>
  );
};

export default Header;
