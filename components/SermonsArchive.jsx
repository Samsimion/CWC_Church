import React, { useState, useMemo } from 'react';

export default function SermonsArchive() {
  // 1. STATE FOR SEARCH AND FILTERING
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('All Series');
  const [selectedSpeaker, setSelectedSpeaker] = useState('All Speakers');
  const [selectedTopic, setSelectedTopic] = useState('All');

  // 2. MOCK SERMON DATABASE
  const sermonData = [
    {
      id: 1,
      title: "Finding Peace in the Noise",
      series: "Rhythms of Rest",
      speaker: "Pastor John Doe",
      date: "May 24, 2026",
      duration: "34:12",
      topic: "Mental Health",
      thumbnail: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800"
    },
    {
      id: 2,
      title: "The Cost of Convenience",
      series: "Ancient Paths",
      speaker: "Pastor John Doe",
      date: "May 17, 2026",
      duration: "38:45",
      topic: "Theology",
      thumbnail: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800"
    },
    {
      id: 3,
      title: "Built for Relationship",
      series: "Better Together",
      speaker: "Sarah Jenkins",
      date: "May 10, 2026",
      duration: "29:15",
      topic: "Community",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800"
    },
    {
      id: 4,
      title: "Guard Your Heart",
      series: "Rhythms of Rest",
      speaker: "Pastor John Doe",
      date: "May 03, 2026",
      duration: "36:20",
      topic: "Mental Health",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800"
    },
    {
      id: 5,
      title: "Reclaiming the Sabbath",
      series: "Rhythms of Rest",
      speaker: "Sarah Jenkins",
      date: "Apr 26, 2026",
      duration: "41:02",
      topic: "Purpose",
      thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800"
    },
    {
      id: 6,
      title: "The Narrow Gate",
      series: "Ancient Paths",
      speaker: "Pastor John Doe",
      date: "Apr 19, 2026",
      duration: "35:50",
      topic: "Theology",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800"
    }
  ];

  // 3. EXTRACT UNIQUE FILTER OPTIONS DYNAMICALLY
  const seriesOptions = ['All Series', ...new Set(sermonData.map(s => s.series))];
  const speakerOptions = ['All Speakers', ...new Set(sermonData.map(s => s.speaker))];
  const topicTags = ['All', 'Mental Health', 'Theology', 'Community', 'Purpose'];

  // 4. FILTER FILTERING ENGINE (COMPUTED STATE)
  const filteredSermons = useMemo(() => {
    return sermonData.filter(sermon => {
      const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            sermon.series.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSeries = selectedSeries === 'All Series' || sermon.series === selectedSeries;
      const matchesSpeaker = selectedSpeaker === 'All Speakers' || sermon.speaker === selectedSpeaker;
      const matchesTopic = selectedTopic === 'All' || sermon.topic === selectedTopic;

      return matchesSearch && matchesSeries && matchesSpeaker && matchesTopic;
    });
  }, [searchQuery, selectedSeries, selectedSpeaker, selectedTopic]);

  // 5. RESET ALL FILTERS HANDLER
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSeries('All Series');
    setSelectedSpeaker('All Speakers');
    setSelectedTopic('All');
  };

  return (
    <div className="bg-brand-warm-white text-brand-deep-slate min-h-screen font-sans">
      
      {/* HEADER HERO */}
      <header className="bg-brand-soft-stone py-16 border-b border-stone-200/50 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-brand-indigo uppercase text-xs font-bold tracking-widest block">Media Vault</span>
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">Sermon Archive</h1>
          <p className="text-stone-500 font-light max-w-xl mx-auto text-base sm:text-lg">
            Explore past teachings, catch up on a missed message, or dive deep into an entire teaching collection.
          </p>
        </div>
      </header>

      {/* FILTER CONTROL HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sticky top-0 bg-brand-warm-white/90 backdrop-blur-md z-30 border-b border-stone-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          {/* Text Search Field */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input 
              type="text"
              placeholder="Search by title or series..."
              className="w-full bg-white border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Series Dropdown */}
          <div>
            <select
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-indigo transition-all"
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
            >
              {seriesOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Speaker Dropdown */}
          <div>
            <select
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-indigo transition-all"
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
            >
              {speakerOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

        </div>

        {/* TOPIC TAG ROW */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-stone-200/40 items-center">
          <span className="text-xs font-bold uppercase text-stone-400 tracking-wider mr-2">Topics:</span>
          {topicTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTopic(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedTopic === tag 
                  ? 'bg-brand-indigo text-white shadow-sm' 
                  : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200/60'
              }`}
            >
              {tag}
            </button>
          ))}
          
          {/* Active Filter Clear Prompt Indicator */}
          {(searchQuery || selectedSeries !== 'All Series' || selectedSpeaker !== 'All Speakers' || selectedTopic !== 'All') && (
            <button 
              onClick={resetFilters}
              className="text-xs font-bold text-brand-indigo hover:underline ml-auto flex items-center gap-1 cursor-pointer"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </section>

      {/* WIDESCREEN VIDEO LAYOUT GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Dynamic Header Displaying Result Count */}
        <div className="mb-6 text-stone-500 font-light text-sm">
          Showing {filteredSermons.length} {filteredSermons.length === 1 ? 'sermon' : 'sermons'}
        </div>

        {filteredSermons.length === 0 ? (
          
          /* EMPTY STATE ELEMENT BUILD */
          <div className="text-center py-20 bg-brand-soft-stone rounded-3xl border border-dashed border-stone-300 px-4">
            <svg className="w-12 h-12 text-stone-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="font-serif text-xl font-bold">No Sermons Found</h3>
            <p className="text-stone-500 font-light text-sm mt-1 max-w-sm mx-auto">
              We couldn't find any recordings matching your current filters. Try tweaking your search keywords.
            </p>
            <button 
              onClick={resetFilters}
              className="mt-5 bg-brand-indigo hover:bg-brand-indigo-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              Reset Search Filters
            </button>
          </div>

        ) : (

          /* DYNAMIC GRID EXECUTION WITH CUSTOM RESPONSIVE MEDIA QUERIES */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {filteredSermons.map(sermon => (
              <article 
                key={sermon.id} 
                className="group flex flex-col space-y-4 cursor-pointer"
              >
                {/* Image Media Container */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-stone-100 shadow-sm border border-stone-200/30">
                  <img 
                    src={sermon.thumbnail} 
                    alt={sermon.title}
                    className="object-cover w-full h-full transform group-hover:scale-102 transition-transform duration-500" 
                  />
                  {/* Black Overlay Tint Shield */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 rounded-full flex items-center justify-center transition-all shadow-md">
                      <svg className="w-5 h-5 text-brand-indigo ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  {/* Media Length Badge */}
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-[11px] text-white font-medium px-2 py-0.5 rounded-md tracking-wider">
                    {sermon.duration}
                  </span>
                </div>

                {/* Meta Text Information */}
                <div className="space-y-1.5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-stone-400 uppercase">
                    <span>{sermon.series}</span>
                    <span>•</span>
                    <span className="text-brand-indigo">{sermon.topic}</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold tracking-tight group-hover:text-brand-indigo transition-colors flex-1 line-clamp-1">
                    {sermon.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-1 border-t border-stone-200/40 text-stone-500 font-light text-xs">
                    <span>{sermon.speaker}</span>
                    <span>{sermon.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        )}
      </main>

    </div>
  );
}