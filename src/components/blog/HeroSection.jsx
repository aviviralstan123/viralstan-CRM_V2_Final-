const HeroSection = () => (
  <section className="relative w-full max-w-[1280px] mx-auto h-[600px] flex items-center px-6 overflow-hidden">
    <div className="z-10 max-w-[600px]">
      <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 font-manrope font-bold text-[12px] tracking-[0.6px] uppercase rounded-full mb-6">
        Strategic Intelligence
      </span>
      <h1 className="font-jakarta font-extrabold text-7xl leading-[1.1] tracking-[-3.6px] text-[#181C20] mb-6">
        Insights That Drive <span className="text-blue-600">Real Growth</span>
      </h1>
      <p className="font-manrope text-lg text-[#434655] max-w-[450px] mb-8 leading-relaxed">
        Beyond the noise. Data becomes strategy, behavioral psychology, and market
        intuition combined for total brand dominance.
      </p>
      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-full text-white font-jakarta font-bold shadow-xl hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </div>

    {/* Fixed Size Image Container */}
    <div className="absolute right-5 top-1/2 -translate-y-1/2 w-[580px] h-[580px] hidden lg:block">
      <div className="relative w-full h-full rounded-[40px] rotate-3 overflow-hidden shadow-2xl border border-white/20">
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80" 
          alt="Future Tech"
          className="w-full h-full object-cover" 
        />
        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
      </div>
    </div>
  </section>
);
export default HeroSection;