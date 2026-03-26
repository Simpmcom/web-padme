import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
{/* Full-Width Background Image */}
<div className="absolute inset-0 z-0">
<img alt="AI brain and neural network background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzBikvf-qmMrYtdvImJgooP150We4uUDRixSZJkPzBBKfO1uBhGv7prqWfiJD9HjzTqAwCpwcXO5aPUEvsuYZVi4Jb4UZAMguKs6J4PK-0B4l2ahohOyCBfXMaovDwiiukBnvhe1okWw2I4IWZINHG6z5EGE2x8dNGmBRXWqC9EFOFhzzc4Jq1Pl3FMHB1aCURiRKq6z-ykIKthQ8j05sCsb8OKotHSmhbTmBxSPAdb8HqNrMKVn_GOC84A9QyQ1LUjqHSujwcWv-0"/>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="max-w-7xl mx-auto w-full px-8 relative z-10">
<div className="max-w-3xl glass-card-light p-10 md:p-16 rounded-[2rem] border-white/5">
<h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
                    PADME+<br/>
<span className="text-primary text-glow">Giải pháp đúng, Cuộc sống khác</span>
</h1>
<p className="text-xl text-on-surface-variant mb-10 max-w-xl font-light leading-relaxed">
                    Kiến tạo tương lai số bằng sức mạnh của AI, eSIM toàn cầu và hệ thống Marketing tự động hóa. Chúng tôi đồng hành cùng doanh nghiệp bứt phá mọi giới hạn.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg glow-primary hover:scale-105 transition-transform duration-300">
                        Khám phá giải pháp
                    </button>
<button className="bg-surface-variant/30 backdrop-blur-xl border border-outline-variant/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-variant/50 transition-all">
                        Liên hệ hợp tác
                    </button>
</div>
</div>
</div>
</section>
    </>
  );
};

export default Hero;
