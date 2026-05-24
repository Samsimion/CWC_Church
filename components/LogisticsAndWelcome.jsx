import React from 'react';

export default function LogisticsAndWelcome() {
  return (
    <div className="bg-brand-warm-white font-sans text-brand-deep-slate pb-16 sm:pb-24">
      
      {/* SECTION 2: Overlapping Logistics Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 sm:-mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Times & Location */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-deep-slate/5 border border-stone-200/40 transform transition hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-indigo/10 rounded-xl flex items-center justify-center text-brand-indigo mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Join Us In Person</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Sundays at 9:00 AM & 11:00 AM <br />
              123 Community Way, Cityville
            </p>
            <a href="#directions" className="text-brand-indigo text-sm font-semibold inline-flex items-center hover:text-brand-indigo-hover">
              Get Directions 
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Card 2: What to Expect */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-deep-slate/5 border border-stone-200/40 transform transition hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-indigo/10 rounded-xl flex items-center justify-center text-brand-indigo mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">What to Expect</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              A warm welcome, casual dress environment, engaging modern worship, and a safe, fun space for your kids.
            </p>
            <a href="#expect" className="text-brand-indigo text-sm font-semibold inline-flex items-center hover:text-brand-indigo-hover">
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Card 3: Church Online */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-deep-slate/5 border border-stone-200/40 transform transition hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-indigo/10 rounded-xl flex items-center justify-center text-brand-indigo mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Church Online</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Can't make it physically? Join our vibrant chat community online every Sunday streaming live right to your device.
            </p>
            <a href="#live" className="text-brand-indigo text-sm font-semibold inline-flex items-center hover:text-brand-indigo-hover">
              Stream Live
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

        </div>
      </div>

      {/* SECTION 3: The "New Here?" Pastoral Welcome split-row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Media container for media team picture */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-indigo rounded-2xl transform rotate-3 scale-98 opacity-10"></div>
            {/* The actual image layout slot */}
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" 
              alt="Welcome Team" 
              className="rounded-2xl shadow-xl object-cover w-full h-[400px] relative z-10"
            />
          </div>

          {/* Right: Text layout */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-indigo uppercase text-xs font-bold tracking-widest block">Welcome to Grace</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              We’re glad you're here. Let us show you around.
            </h2>
            <p className="text-stone-600 leading-relaxed font-light">
              Walking into a church for the first time can feel intimidating, but we want you to know that no matter where you are on your spiritual journey, you are genuinely welcome here. Our hope is to create an environment where you can connect deeply with God and find an authentic community to build your life with.
            </p>
            <p className="font-serif italic text-stone-500 font-medium text-lg">
              — Pastors Karanje & peterson, Lead Pastors
            </p>
            
            <div className="pt-4">
              <a href="#visit" className="inline-block bg-brand-deep-slate text-white font-medium px-7 py-3 rounded-xl hover:bg-stone-800 transition-colors shadow-md">
                Plan Your Visit Experience
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}