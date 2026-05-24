import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[85vh] sm:h-[90vh] bg-brand-deep-slate flex items-center justify-center overflow-hidden">
      
      {/* Video / Image Placeholder backdrop */}
      <div className="absolute inset-0 z-0">
        {/* Replace the src with the streaming loop link later */}
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1544427928-c49cdfb81940?q=80&w=1920" // high-res baseline background
        >
          <source src="" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-brand-deep-slate/65 mix-blend-multiply"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white flex flex-col items-center">
        
        {/* Main Welcome Hook */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          A place to discover <br />
          <span className="text-brand-warm-white underline decoration-brand-indigo decoration-4 underline-offset-8">hope & belonging</span>
        </h1>

        {/* Logistics Context */}
        <p className="font-sans text-stone-200 text-lg sm:text-xl max-w-2xl mb-8 font-light tracking-wide">
          Join us this Sunday in person at <span className="font-semibold text-white">9:00 AM & 11:00 AM</span> <br className="hidden sm:inline" />
          or watch live right here online.
        </p>

        {/* Action Buttons Split */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans">
          <a 
            href="#visit" 
            className="bg-brand-indigo text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-indigo-hover transition-all text-center tracking-wide shadow-lg shadow-brand-indigo/20 transform hover:-translate-y-0.5"
          >
            Join Us Sunday
          </a>
          <a 
            href="#latest-sermon" 
            className="border-2 border-white/80 text-white hover:bg-white hover:text-brand-deep-slate font-semibold px-8 py-4 rounded-full transition-all text-center tracking-wide backdrop-blur-sm"
          >
            Watch Latest Message
          </a>
        </div>
      </div>

      {/* Subtle indicator scroll arrow hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block opacity-60">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}