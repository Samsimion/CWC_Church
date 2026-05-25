import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Simulating Sunday morning live state (change to false to hide banner)
  const [isLive, setIsLive] = useState(true); 

  return (
    <div className="sticky top-0 z-50 font-sans">
      {/* 1. Sunday Live Banner */}
      {isLive && (
        <div className="bg-brand-amber-glow text-slate-900 text-center text-sm font-semibold py-2 px-4 transition-all animate-pulse">
          <span className="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>
          We are live right now! <a href="#live" className="underline ml-1 hover:text-black">Join our Online Campus →</a>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <nav className="bg-brand-warm-white/80 backdrop-blur-md border-b border-stone-200/50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-serif font-bold text-2xl text-brand-deepslate tracking-tight">
                GRACE<span className="text-brand-indigo">.</span>
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/about" className="text-stone-600 hover:text-brand-indigo font-medium transition-colors">About</a>
              <a href="/sermons" className="text-stone-600 hover:text-brand-indigo font-medium transition-colors">Sermons</a>
              <a href="#events" className="text-stone-600 hover:text-brand-indigo font-medium transition-colors">Events</a>
              <a href="#connect" className="text-stone-600 hover:text-brand-indigo font-medium transition-colors">Connect</a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a href="/visit" className="bg-brand-indigo text-white font-medium px-6 py-2.5 rounded-full hover:bg-brand-indigo-hover transition-all shadow-sm shadow-brand-indigo/10">
                Plan Your Visit
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-brand-deep-slate p-2 rounded-md focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-brand-warm-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 transition-all duration-300">
            <a href="#visit" className="block text-center bg-brand-indigo text-white font-medium px-4 py-3 rounded-xl shadow-sm">
              Plan Your Visit
            </a>
            <hr className="border-stone-200 my-2" />
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-100 rounded-lg">About</a>
            <a href="#sermons" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Sermons</a>
            <a href="#events" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Events</a>
            <a href="#connect" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-100 rounded-lg">Connect</a>
          </div>
        )}
      </nav>
    </div>
  );
}