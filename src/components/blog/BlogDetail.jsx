import React from 'react';

const BlogDetail = () => {
    
  // 1. Hero Section (already responsive)
  const renderHero = () => (
    <section className="relative w-full min-h-[420px] sm:min-h-[520px] md:min-h-[620px] lg:h-[716px] flex flex-col justify-end overflow-hidden font-plus">   
      <div className="absolute inset-0 z-0 bg-[#0B1220]">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-50" 
          alt="Digital Backdrop" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7FAFF] via-[#F7FAFF]/20 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <span className="text-[12px] font-bold tracking-widest text-white uppercase">Digital Insights 2025</span>
        </div>
        <h1 className="max-w-[900px] font-display text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-[800] leading-[1.1] tracking-tight text-[#0B1220] mb-6 sm:mb-8">
          The Future of <span className="text-[#2563EB]">Algorithmic Branding</span> in 2025
        </h1>
        <div className="inline-flex flex-wrap items-center gap-3 sm:gap-6 p-3 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-sm font-bold">
          <div className="flex items-center gap-2 px-2"><div className="w-8 h-8 rounded-full bg-slate-300" /> Alex Rivera</div>
          <div className="text-slate-400 hidden sm:inline">|</div>
          <div>March 24, 2025</div>
          <div className="text-slate-400 hidden sm:inline">|</div>
          <div>12 Comments</div>
        </div>
      </div>
    </section>
  );

  // 2. AI Summary Section (responsive grid)
  const renderAISummary = () => (
    <div className="relative p-6 sm:p-10 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-blue-500/5 mb-12 sm:mb-16 overflow-hidden">
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg shadow-blue-500/30">
          <span className="text-white text-xl">⚡</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#0B1220]">AI Executive Summary</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-5">
        {[
          "Personalization is pivoting from 'segments' to individualized real-time content.",
          "Zero-click searches are rising, requiring more authoritative 'On-SERP' presence.",
          "Video-first architectures will dominate 85% of mobile interaction funnels.",
          "Trust metrics are being redefined by radical transparency and data ethics."
        ].map((text, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 border border-blue-100">
              <span className="text-[10px] text-blue-600">✓</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-manrope text-sm sm:text-base">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // 3. Article Content (already mostly responsive, just adjust blockquote padding)
  const renderArticleBody = () => (
    <article className="font-manrope text-base sm:text-lg text-slate-700 leading-relaxed space-y-8 sm:space-y-12">
      <p>In the rapidly evolving landscape of digital presence, the static brand is a dying relic. Today, we delve into the mechanics of <span className="text-blue-600 font-bold border-b-2 border-blue-100">Ethereal Branding</span>...</p>
      
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-plus">The Shift Toward Fluid Identity</h3>
      
      <blockquote className="relative p-6 sm:p-10 bg-[#F1F5FF] border-l-[6px] border-[#2563EB] rounded-2xl">
        <p className="text-xl sm:text-2xl font-medium text-[#0B1220] italic leading-snug">
          "Marketing is no longer about the stories you tell, but the atmospheric experiences you enable for your community."
        </p>
      </blockquote>

      <div className="rounded-3xl bg-[#0B1220] p-4 sm:p-8 aspect-video flex items-center justify-center overflow-hidden border border-slate-800 shadow-2xl">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" className="w-full h-full object-contain opacity-80" alt="Data Visualization" />
      </div>
    </article>
  );

  // 4. Aurora Effect Section (responsive grid and padding)
  const renderAuroraEffect = () => (
    <section className="my-16 sm:my-20 pt-8 sm:pt-10 border-t border-slate-100">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-plus mb-4">Implementing the Aurora Effect</h3>
      <p className="text-slate-500 mb-8 sm:mb-10 max-w-3xl font-manrope text-sm sm:text-base">By utilizing tonal layering and luminous UI elements, brands can evoke a sense of trust and premium quality that flat designs cannot match.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="p-6 sm:p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-5 text-purple-600 font-bold">◈</div>
          <h4 className="text-xl font-bold text-[#0B1220] mb-2">Cognitive Load Minimization</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-manrope">Design interfaces that breathe. Reduce friction by prioritizing white space over dense data blocks.</p>
        </div>
        <div className="p-6 sm:p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-5 text-blue-600 font-bold">❈</div>
          <h4 className="text-xl font-bold text-[#0B1220] mb-2">Omni-Channel Flow</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-manrope">Ensure your brand’s “Digital Aurora” follows the user from mobile to spatial computing environments.</p>
        </div>
      </div>

      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-[32px] text-center text-white shadow-2xl shadow-blue-500/20">
        <h2 className="text-2xl sm:text-3xl font-black mb-4">Transform Your Brand’s Atmosphere</h2>
        <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">Our strategy team uses predictive modeling to ensure your message hits the right audience.</p>
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-extrabold rounded-full hover:scale-105 transition-transform shadow-xl text-sm sm:text-base">Download the 2025 Guide</button>
      </div>
    </section>
  );

  // 5. CTA Section (responsive padding)
  const renderCTA = () => (
    <div className="p-8 sm:p-12 md:p-16 bg-[#F8FAFF] border border-white rounded-[40px] text-center my-16 sm:my-20 shadow-inner">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1220] mb-3">Ready to Apply This Strategy?</h2>
      <p className="text-slate-500 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">Join 500+ high-growth companies using Chroma Insights.</p>
      <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] rounded-2xl text-white font-bold text-lg sm:text-xl shadow-lg hover:shadow-indigo-500/40 transition-all">Start Growth</button>
    </div>
  );

  // 6. Continue Reading Section - FULLY RESPONSIVE (replaces hardcoded styles)
  const renderContinueReading = () => (
    <section className="w-full mx-auto py-12 sm:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-12">
        <div className="space-y-1">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-[900] text-[#0B1220] font-plus tracking-tight leading-none">
            Continue Reading
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-manrope">
            Deep dives into the mechanics of modern marketing.
          </p>
        </div>
        <a href="#" className="text-[#2563EB] font-bold text-sm sm:text-base flex items-center gap-1 hover:underline group font-manrope">
          View Journal <span className="group-hover:translate-x-1 transition-transform italic">→</span>
        </a>
      </div>

      {/* Responsive Grid: 1 column on mobile, 2 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        
        {/* LEFT: Main Feature Card */}
        <div className="group cursor-pointer relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[32px] overflow-hidden bg-[#0B1220] shadow-2xl border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" 
            alt="Micro-Interaction Psychology" 
          />
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20">
            <span className="px-3 sm:px-5 py-1 sm:py-2 bg-[#2563EB] text-white text-[10px] font-[900] rounded-full uppercase tracking-[2px] shadow-lg">
              Development
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-[800] text-white leading-[1.2] tracking-tight group-hover:text-blue-200 transition-colors">
              Micro-Interaction Psychology in Modern SaaS
            </h3>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 z-10" />
        </div>

        {/* RIGHT: Stacked cards (vertical flex) */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Top landscape card */}
          <div className="relative h-[200px] sm:h-[240px] md:h-[280px] rounded-[32px] overflow-hidden group cursor-pointer shadow-xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Cookie-Less Future" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 z-10" />
            <h4 className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20 text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
              Navigating the Cookie-Less Future
            </h4>
          </div>

          {/* Bottom two square cards: stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="flex-1 group cursor-pointer relative">
              <div className="w-full rounded-[32px] overflow-hidden bg-slate-200 shadow-lg border border-white/5 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Retention" 
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 text-center">
                <h5 className="text-base sm:text-lg font-bold text-[#0B1220] group-hover:text-[#2563EB] transition-colors font-plus tracking-tight">
                  Retention Loops
                </h5>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-40 rounded-[32px] z-10" />
            </div>

            {/* Card 2 */}
            <div className="flex-1 group cursor-pointer relative">
              <div className="w-full rounded-[32px] overflow-hidden bg-[#0B1220] shadow-lg border border-white/5 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" 
                  alt="AI Atoms" 
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <span className="text-white/40 font-black text-[8px] sm:text-[10px] tracking-[4px] uppercase text-center px-4">
                    Future Tench
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 text-center">
                <h5 className="text-base sm:text-lg font-bold text-[#0B1220] group-hover:text-[#2563EB] transition-colors font-plus tracking-tight">
                  AI Content Atoms
                </h5>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-40 rounded-[32px] z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // 7. Sidebar (already responsive with sticky, but adjust spacing)
  const renderSidebar = () => {
    const tocItems = [
      { id: 'fluid-identity', label: 'Fluid Brand Identity', active: true },
      { id: 'cognitive', label: 'Cognitive Architecture' },
      { id: 'growth', label: 'Growth Takeaways' },
      { id: 'aurora', label: 'The Aurora Effect' },
    ];

    const shareIcons = [
      { id: 'share', svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 5.25L13.125 4.875M12.75 12.75L13.125 13.125M5.25 9H12.75M9.75 5.25L9.375 5.625M9.75 12.75L9.375 12.375M12.75 5.25L12.375 5.625M12.75 12.75L12.375 12.375" stroke="#0B1220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 12C15.8284 12 16.5 12.6716 16.5 13.5C16.5 14.3284 15.8284 15 15 15C14.1716 15 13.5 14.3284 13.5 13.5C13.5 12.6716 14.1716 12 15 12Z" stroke="#0B1220" strokeWidth="1.5"></path><path d="M15 3C15.8284 3 16.5 3.67157 16.5 4.5C16.5 5.32843 15.8284 6 15 6C14.1716 6 13.5 5.32843 13.5 4.5C13.5 3.67157 14.1716 3 15 3Z" stroke="#0B1220" strokeWidth="1.5"></path><path d="M3 7.5C3.82843 7.5 4.5 8.17157 4.5 9C4.5 9.82843 3.82843 10.5 3 10.5C2.17157 10.5 1.5 9.82843 1.5 9C1.5 8.17157 2.17157 7.5 3 7.5Z" stroke="#0B1220" strokeWidth="1.5"></path></svg> },
      { id: 'comment', svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 8.25C15.75 11.5637 13.0637 14.25 9.75 14.25H4.5L6 12.75C3.933 11.4 2.25 9.3 2.25 7.5C2.25 4.18629 4.93629 1.5 8.25 1.5H9.75C13.0637 1.5 15.75 4.18629 15.75 8.25Z" stroke="#0B1220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.5 6H7.51M9.75 6H9.76M12 6H12.01" stroke="#0B1220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> },
      { id: 'link', svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6 12L12 6" stroke="#0B1220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.75 3C11.5174 3 13.1206 3.69248 14.3168 4.88871C15.513 6.08494 16.2055 7.68817 16.2055 9.45551C16.2055 11.2229 15.513 12.8261 14.3168 14.0223C13.1206 15.2185 11.5174 15.911 9.75 15.911M3 9.75C3 11.5174 3.69248 13.1206 4.88871 14.3168C6.08494 15.513 7.68817 16.2055 9.45551 16.2055M16.2055 9.45551V9.75M16.2055 9.45551H15.911M9.45551 16.2055V16.5M9.45551 16.2055H9.75M3 9.75V9.45551M3 9.75H3.29449" stroke="#0B1220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> },
    ];

    return (
      <aside className="sticky top-12 space-y-10 lg:space-y-12 shrink-0">
        <nav className="font-manrope">
          <h3 className="text-[12px] font-[900] tracking-[2px] text-slate-400 uppercase mb-6 lg:mb-8">
            On This Page
          </h3>
          <ul className="space-y-3 lg:space-y-4">
            {tocItems.map((item) => (
              <li key={item.id} className="relative pl-4 flex items-center">
                {item.active && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-[2px] bg-blue-600 rounded-full" />
                )}
                <a href={`#${item.id}`} className={`block text-[13px] lg:text-[14px] font-[800] leading-tight transition-colors ${item.active ? 'text-blue-600' : 'text-[#0B1220] hover:text-blue-400'}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-2 lg:pt-4">
          <h3 className="text-[12px] font-[900] tracking-[2px] text-slate-400 uppercase mb-5 lg:mb-6">
            Share Article
          </h3>
          <div className="flex gap-3">
            {shareIcons.map((icon) => (
              <div key={icon.id} className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center cursor-pointer shadow-sm hover:border-slate-200 transition-colors">
                {icon.svg}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#7C3AED] p-6 lg:p-8 shadow-2xl shadow-blue-500/10">
          <h4 className="text-lg lg:text-[20px] font-extrabold text-white leading-tight font-plus mb-2">
            Custom Growth Audit
          </h4>
          <p className="text-[13px] lg:text-[14px] text-white/80 leading-relaxed font-manrope mb-6 lg:mb-8">
            Let our experts analyze your dynamic digital presence for free.
          </p>
          <button className="w-full px-4 py-3 lg:py-4 bg-white text-[#2563EB] text-sm lg:text-[16px] font-[800] rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Request Audit
          </button>
        </div>
      </aside>
    );
  };

  // --- Main return (layout is already responsive, we just adjust the main container spacing) ---
  return (
    <div className="bg-[#F7FAFF] min-h-screen">
      {renderHero()}
      
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {renderAISummary()}
            {renderArticleBody()}
            {renderAuroraEffect()}
            {renderCTA()}
          </div>

          {/* Sidebar - hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block lg:col-span-4">
            {renderSidebar()}
          </div>
        </div>

        {/* Continue Reading Section (full width) */}
        <div className="w-full mt-8 sm:mt-12">
          {renderContinueReading()}
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;