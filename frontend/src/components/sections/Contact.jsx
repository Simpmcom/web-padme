import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="relative py-32 overflow-hidden" id="contact">
{/* Background Decoration */}
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
{/* Visual Side */}
<div className="w-full lg:w-1/2 relative group reveal reveal-left">
<div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-surface-container-lowest border border-outline-variant/10">
<img alt="AI Core Evolution" className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZalmRliaPnx8zZDqzMCPs0b5TAYtnnOHJrHk3MCKHDjZS6WCEQKNw_PwUwHg2kuKw2Kzc8Arm2rwF8KTT5FsM5fdADg3T_3-EO-rCBxlOXFlWJb2f57o2l9OKBbD4qq2UU8Td7gnWwGdA6gOG34dyhHV0oAvVZ4EWKhlHxXtpn7BIGfd7f9kyUW6_UE-xinUb5RF83XBuz4UE90RDXwPMxt5E6LCfm1pJbbvylSUFzic6oaxnMfZXFVGVyvf8kagsKlrfEUV1irsS"/>
{/* Neural Link Overlay elements */}
<div className="absolute top-12 right-12 glass-card p-4 rounded-xl border border-white/10">
<span className="material-symbols-outlined text-primary text-3xl mb-2">neurology</span>
<p className="text-xs font-bold text-white uppercase tracking-tighter">Processing Core</p>
</div>
<div className="absolute bottom-12 left-12 glass-card p-4 rounded-xl border border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-[10px] text-primary font-bold uppercase">System Active</span>
</div>
<p className="text-lg font-bold text-white tracking-tight">AI Optimizing...</p>
</div>
</div>
</div>
{/* Content Side */}
<div className="w-full lg:w-1/2 space-y-10 reveal reveal-right">
<div className="space-y-6">
<h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                        Bứt phá giới hạn cùng <span className="text-primary text-glow">PADME</span>
</h2>
<p className="text-on-surface-variant text-xl leading-relaxed">
                        Chúng tôi không chỉ xây dựng phần mềm; chúng tôi kiến tạo các hệ sinh thái thông minh, trao quyền cho doanh nghiệp làm chủ tương lai thông qua sức mạnh của Trí tuệ nhân tạo và Tự động hóa quy mô lớn.
                    </p>
</div>
<div className="glass-card p-8 rounded-2xl border border-outline-variant/20 relative overflow-hidden">
{/* Decorative glow */}
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl"></div>
<form className="space-y-6">
<h4 className="text-xl font-bold text-white flex items-center gap-3">
<span className="material-symbols-outlined text-primary">rocket_launch</span>
                            Bắt đầu dự án của bạn
                        </h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest ml-1">Họ và tên</label>
<input className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 text-white placeholder:text-slate-600 px-4 py-3 rounded-lg transition-all" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest ml-1">Email liên hệ</label>
<input className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 text-white placeholder:text-slate-600 px-4 py-3 rounded-lg transition-all" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest ml-1">Thông điệp</label>
<textarea className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 text-white placeholder:text-slate-600 px-4 py-3 rounded-lg transition-all" placeholder="Chia sẻ nhu cầu của bạn..." rows="3"></textarea>
</div>
<button className="w-full primary-gradient py-4 rounded-xl font-bold text-on-primary-container hover:shadow-primary/40 hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-3" type="submit">
                            Gửi yêu cầu tư vấn
                            <span className="material-symbols-outlined">send</span>
</button>
</form>
</div>
</div>
</div>
</section>
    </>
  );
};

export default Contact;
