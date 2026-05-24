import React from 'react';

export default function SermonsPreview() {
  // Mock data representing what will later come from your database/CMS
  const pastSermons = [
    {
      id: 1,
      title: "Chasing Shadows",
      date: "May 17, 2026",
      speaker: "Pastor John Doe",
      thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400"
    },
    {
      id: 2,
      title: "The Table of Grace",
      date: "May 10, 2026",
      speaker: "Pastor Jane Doe",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=400"
    },
    {
      id: 3,
      title: "Rhythms of Rest",
      date: "May 03, 2026",
      speaker: "Pastor John Doe",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400"
    }
  ];

  return (
    <section className="bg-brand-soft-stone font-sans text-brand-deep-slate py-20 lg:py-28 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-brand-indigo uppercase text-xs font-bold tracking-widest block">Media Library</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Recent Messages</h2>
          </div>
          <a href="#all-sermons" className="text-brand-indigo font-semibold text-sm inline-flex items-center hover:text-brand-indigo-hover mt-4 md:mt-0 group">
            Browse Entire Archive 
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Current Series Feature (2/3 width) */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative bg-brand-deep-slate rounded-2xl overflow-hidden shadow-lg h-[450px] flex items-end">
              
              {/* Media team placeholder graphics layer */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200" 
                  alt="Current Sermon Series" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient shade for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-slate via-brand-deep-slate/40 to-transparent"></div>
              </div>

              {/* Text Layer */}
              <div className="relative z-10 p-8 sm:p-12 w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <div className="space-y-2">
                  <span className="bg-brand-indigo text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                    Current Series
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3">
                    Ancient Paths, Modern Steps
                  </h3>
                  <p className="text-stone-300 text-sm font-light max-w-md">
                    Part 4: Finding structural peace and anchored direction inside a chaotic, modern culture.
                  </p>
                </div>

                {/* Big Circular Play Button */}
                <div className="flex-shrink-0 w-14 h-14 bg-white text-brand-deep-slate rounded-full flex items-center justify-center shadow-lg group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Past Messages Stack (1/3 width) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 lg:hidden">
              Previous Weeks
            </h4>
            
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {pastSermons.map((sermon) => (
                <div 
                  key={sermon.id} 
                  className="bg-white p-4 rounded-xl border border-stone-200/40 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0 relative">
                    <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-deep-slate/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>

                  {/* Sermon Brief Meta Info */}
                  <div className="min-w-0">
                    <span className="text-[11px] text-stone-400 block font-medium uppercase tracking-wide">
                      {sermon.date}
                    </span>
                    <h5 className="font-serif font-bold text-base truncate group-hover:text-brand-indigo transition-colors mt-0.5">
                      {sermon.title}
                    </h5>
                    <p className="text-xs text-stone-500 font-light truncate">
                      {sermon.speaker}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}