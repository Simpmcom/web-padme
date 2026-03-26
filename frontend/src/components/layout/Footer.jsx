import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-950 w-full pt-20 pb-10 border-t border-slate-800/50">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-6">
<div className="text-xl font-black text-white uppercase font-headline">PADME VIỆT NAM</div>
<p className="text-slate-500 font-['Inter'] leading-relaxed text-sm">
                Đơn vị cung cấp giải pháp chuyển đổi số toàn diện, tối ưu hóa vận hành doanh nghiệp bằng công nghệ AI tiên tiến.
            </p>
</div>
<div className="space-y-4">
<h5 className="text-white font-bold uppercase tracking-wider text-xs">Về chúng tôi</h5>
<ul className="space-y-3 font-['Inter'] text-sm text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Chính sách bảo mật</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Điều khoản sử dụng</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Hợp tác</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Tuyển dụng</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-white font-bold uppercase tracking-wider text-xs">Liên hệ</h5>
<ul className="space-y-3 font-['Inter'] text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-orange-500 text-sm">mail</span>
                    contact@padme.vn
                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-orange-500 text-sm">call</span>
                    0345 595 999
                </li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-white font-bold uppercase tracking-wider text-xs">Đăng ký bản tin</h5>
<div className="flex">
<input className="bg-slate-900 border-none text-white text-xs px-4 py-2 rounded-l-lg w-full focus:ring-1 focus:ring-orange-500" placeholder="Email của bạn" type="email"/>
<button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors">
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
<p>© 2024 CÔNG TY TNHH THƯƠNG MẠI PADME VIỆT NAM. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-orange-500 transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="hover:text-orange-500 transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
</div>
</div>
</footer>
    </>
  );
};

export default Footer;
