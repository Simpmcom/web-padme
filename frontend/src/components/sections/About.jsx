import React from 'react';

const About = () => {
  return (
    <>
      <section className="py-32 bg-surface-container-low" id="about">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-20 reveal reveal-up">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Công nghệ vị nhân sinh</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
                    Tại PADME, chúng tôi tin rằng công nghệ chỉ có giá trị khi phục vụ con người. Chúng tôi cam kết dành <span className="text-primary font-bold">10% lợi nhuận</span> hàng năm cho các hoạt động thiện nguyện.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Integrity Card */}
<div className="glass-card p-8 rounded-2xl hover:bg-surface-container-high transition-all duration-300 group reveal reveal-up stagger-1">
<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="verified_user">verified_user</span>
</div>
<h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Chính trực trong mọi giao dịch và giải pháp, đặt niềm tin của khách hàng lên hàng đầu.</p>
</div>
{/* Efficiency Card */}
<div className="glass-card p-8 rounded-2xl hover:bg-surface-container-high transition-all duration-300 group reveal reveal-up stagger-2">
<div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="bolt">bolt</span>
</div>
<h3 className="text-xl font-bold text-white mb-3">Efficiency</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Tối ưu hóa quy trình thông qua AI để mang lại hiệu quả vượt trội cho doanh nghiệp.</p>
</div>
{/* Humanity Card */}
<div className="glass-card p-8 rounded-2xl hover:bg-surface-container-high transition-all duration-300 group reveal reveal-up stagger-3">
<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="favorite">favorite</span>
</div>
<h3 className="text-xl font-bold text-white mb-3">Humanity</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Công nghệ được thiết kế để giải quyết các vấn đề thực tế của con người.</p>
</div>
{/* Giving Card */}
<div className="glass-card p-8 rounded-2xl hover:bg-surface-container-high transition-all duration-300 group reveal reveal-up stagger-4">
<div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="volunteer_activism">volunteer_activism</span>
</div>
<h3 className="text-xl font-bold text-white mb-3">Giving</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Lan tỏa yêu thương và chia sẻ giá trị thặng dư với cộng đồng yếu thế.</p>
</div>
</div>
</div>
</section>
    </>
  );
};

export default About;
