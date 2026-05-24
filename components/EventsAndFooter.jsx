import React from 'react';

export default function EventsAndFooter() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Outreach Day",
      date: "JUN 06",
      time: "9:00 AM - 1:00 PM",
      desc: "Joining forces with local partners to serve families in our city's downtown district.",
    },
    {
      id: 2,
      title: "Youth Summer Kickoff",
      date: "JUN 12",
      time: "6:30 PM - 9:00 PM",
      desc: "A high-energy night for all middle and high school students with music, games, and food trucks.",
    },
    {
      id: 3,
      title: "Discover Grace Membership Class",
      date: "JUN 21",
      time: "12:30 PM - 2:00 PM",
      desc: "New to the church? Meet the leadership, hear the vision, and find out how to get involved.",
    }
  ];

  return (
    <div className="font-sans text-brand-deep-slate">
      
      {/* SECTION 6: Upcoming Events */}
      <section className="bg-brand-soft-stone py-20 lg:py-28 border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-brand-indigo uppercase text-xs font-bold tracking-widest block">What's Happening</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Upcoming Events</h2>
            </div>
            <a href="#calendar" className="text-brand-indigo font-semibold text-sm inline-flex items-center hover:text-brand-indigo-hover mt-4 md:mt-0 group">
              View Full Calendar
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Events Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-2xl p-6 border border-stone-200/40 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Floating Date Badge Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-brand-soft-stone text-brand-indigo font-bold text-center rounded-xl p-2.5 min-w-[60px]">
                      <span className="block text-xs uppercase tracking-wide opacity-70">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="block text-xl leading-none mt-1">
                        {event.date.split(' ')[1]}
                      </span>
                    </div>
                    <span className="text-xs text-stone-400 font-medium tracking-wide bg-stone-50 px-3 py-1 rounded-full border border-stone-100">
                      {event.time}
                    </span>
                  </div>

                  {/* Event Detail Information */}
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-brand-indigo transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                    {event.desc}
                  </p>
                </div>

                <a href={`#event-${event.id}`} className="text-sm font-semibold text-brand-deep-slate hover:text-brand-indigo inline-flex items-center mt-auto group/link">
                  Details & Registration
                  <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MASTER FOOTER ARCHITECTURE */}
      <footer className="bg-brand-deep-slate text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content Columns Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            
            {/* Column 1: Essentials branding block */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#" className="font-serif font-bold text-2xl text-white tracking-tight block">
                GRACE<span className="text-brand-indigo">.</span>
              </a>
              <p className="text-slate-400 text-sm font-light max-w-sm leading-relaxed">
                A contemporary community built on historic grace. Empowering people to live fully alive in Christ.
              </p>
              {/* Media layout framework placeholder icons */}
              <div className="flex space-x-4 pt-2">
                <a href="#facebook" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#instagram" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Ministries block link collection */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Ministries</h4>
              <ul className="space-y-2 text-sm font-light text-slate-400">
                <li><a href="#kids" className="hover:text-white transition-colors">Grace Kids</a></li>
                <li><a href="#youth" className="hover:text-white transition-colors">Youth Ministry</a></li>
                <li><a href="#groups" className="hover:text-white transition-colors">Connect Groups</a></li>
                <li><a href="#outreach" className="hover:text-white transition-colors">Outreach & Impact</a></li>
              </ul>
            </div>

            {/* Column 3: Secondary quick navigation block */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm font-light text-slate-400">
                <li><a href="#live" className="hover:text-white transition-colors">Watch Live Campus</a></li>
                <li><a href="#give" className="hover:text-white transition-colors">Give / Donate Online</a></li>
                <li><a href="#prayer" className="hover:text-white transition-colors">Request Prayer</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Office</a></li>
              </ul>
            </div>

            {/* Column 4: Physical logistics operational meta data */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Times & Location</h4>
              <div className="text-sm font-light text-slate-400 space-y-2 leading-relaxed">
                <p>
                  <span className="font-semibold text-white block">Every Sunday morning:</span>
                  9:00 AM & 11:00 AM
                </p>
                <p>
                  <span className="font-semibold text-white block">Main Campus:</span>
                  123 Community Way, Cityville
                </p>
              </div>
              <div className="pt-2">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center"
                >
                  <svg className="w-3.5 h-3.5 mr-1.5 text-brand-amber-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  Get Driving Directions
                </a>
              </div>
            </div>

          </div>

          {/* Copyright & Sub-legal Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-light gap-4">
            <p>&copy; {new Date().getFullYear()} Grace Church. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Use</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}