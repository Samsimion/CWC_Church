import React from 'react';

export default function MinistriesGrid() {
  const ministries = [
    {
      id: 1,
      title: "Grace Kids",
      ageGroup: "Infant – 5th Grade",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600",
      link: "#kids"
    },
    {
      id: 2,
      title: "Youth Ministry",
      ageGroup: "6th – 12th Grade",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600",
      link: "#youth"
    },
    {
      id: 3,
      title: "Connect Groups",
      ageGroup: "Community & Circles",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600",
      link: "#groups"
    },
    {
      id: 4,
      title: "Outreach & Missions",
      ageGroup: "Local & Global Impact",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600",
      link: "#outreach"
    }
  ];

  return (
    <section className="bg-brand-warm-white font-sans text-brand-deep-slate py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-brand-indigo uppercase text-xs font-bold tracking-widest block">Get Connected</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Ministries for Everyone</h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            Church doesn't just happen on Sundays inside the main sanctuary. Find your community, grow in your faith, and make a difference.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry) => (
            <a 
              key={ministry.id} 
              href={ministry.link}
              className="group relative rounded-2xl overflow-hidden shadow-md shadow-brand-deep-slate/5 h-[420px] block cursor-pointer"
            >
              
              {/* Background Image Layer with Zoom Effect */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={ministry.image} 
                  alt={ministry.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* 
                  Tailwind v4 Gradient Fade:
                  Transitions from a very dark overlay at the bottom to complete transparency at the top
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-slate/90 via-brand-deep-slate/40 to-transparent transition-opacity group-hover:opacity-95"></div>
              </div>

              {/* Bottom Text Content Layer */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] uppercase tracking-wider text-brand-amber-glow font-semibold mb-1 opacity-90">
                  {ministry.ageGroup}
                </span>
                
                <h3 className="font-serif text-2xl font-bold tracking-wide group-hover:text-brand-amber-glow transition-colors duration-300">
                  {ministry.title}
                </h3>
                
                {/* Smooth reveal chevron indicator arrow on hover */}
                <div className="mt-4 flex items-center text-xs font-medium text-stone-200 group-hover:text-white transition-colors">
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out mr-1">
                    Learn more
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}