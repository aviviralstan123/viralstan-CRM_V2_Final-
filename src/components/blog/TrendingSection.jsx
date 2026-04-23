import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrendingSection = () => {
  // Slider container ke liye reference
  const scrollRef = useRef(null);

  // Scroll function: 300px per click slide karega
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - 300 
        : scrollLeft + 300;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

 const trendingItems = [
  { id: 1, title: "The Year Short-Form Video Evolved...", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200" },
  { id: 2, title: "SEO Strategies for 2024 Tech Brands", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200" },
  { id: 3, title: "How AI is Reshaping Copywriting", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=200" },
  // Niche wali 3 images fix kar di gayi hain:
  { id: 4, title: "Viralstan: Building a SaaS Empire", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=200" },
  { id: 5, title: "Next-Gen UI Design Trends", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=200" },
  { id: 6, title: "The Future of Headless CMS", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=200" },
];

  return (
    <section className="bg-white py-20 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1232px] mx-auto px-4">
        
        {/* Header with Nav Buttons */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-jakarta font-extrabold text-3xl mb-2">Trending Now</h2>
            <p className="text-brand-gray">What everyone is reading this week</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-brand-dark" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-brand-dark" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trendingItems.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[300px] flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer group scroll-snap-align-start"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h5 className="font-bold text-sm leading-tight text-brand-dark group-hover:text-blue-600 transition-colors">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;