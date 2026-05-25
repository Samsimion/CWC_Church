import React from 'react';

export default function AboutUs() {
  // 1. MOCK LEADERSHIP TEAM DATABASE
  const leadershipTeam = [
    {
      id: 1,
      name: "Pastor John Doe",
      role: "Lead Pastor",
      email: "john@gracecommunity.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Worship Director",
      email: "sarah@gracecommunity.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
    },
    {
      id: 3,
      name: "Marcus Reyes",
      role: "Grace Kids Coordinator",
      email: "marcus@gracecommunity.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600"
    }
  ];

  // 2. CORE VALUES OBJECT ARRAY
  const coreValues = [
    {
      title: "Radical Hospitality",
      description: "We believe inside environments should look and feel like a celebration. We prioritize creating spaces where outsiders can belong long before they believe.",
      accent: "border-brand-indigo"
    },
    {
      title: "Intentional Growth",
      description: "Faith is a journey, not a static destination. We reject shallow religious check-boxes and prioritize real, daily life-transformation.",
      accent: "border-brand-amber-glow"
    },
    {
      title: "Sacrificial Service",
      description: "Our church doesn't exist for itself—it exists to serve our city. We mobilize our resources and people to heal brokenness right where we live.",
      accent: "border-stone-400"
    }
  ];

  return (
    <div className="bg-brand-warm-white text-brand-deep-slate min-h-screen font-sans">
      
      {/* 1. HEADER HERO & MISSION STATEMENT */}
      <header className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center space-y-6">
        <span className="text-brand-indigo uppercase text-xs font-bold tracking-widest block">Who We Are</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
          Our Vision & Story
        </h1>
        <div className="h-1 w-12 bg-brand-indigo mx-auto rounded-full"></div>
        <p className="font-serif text-xl sm:text-2xl text-stone-700 font-light max-w-2xl mx-auto leading-relaxed italic">
          "To build a contemporary community rooted in ancient faith, bringing hope to our city."
        </p>
      </header>

      {/* 2. CORE VALUES BLOCK GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-stone-200/50">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">What Drives Us</h2>
          <p className="text-stone-500 font-light text-sm mt-1">The three core pillars beneath everything we build.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl p-8 border-t-4 ${value.accent} shadow-xs border-x border-b border-stone-200/40 space-y-3`}
            >
              <h3 className="font-serif text-xl font-bold tracking-tight text-brand-deep-slate">
                {value.title}
              </h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STAFF / LEADERSHIP SYSTEM GRID */}
      <section className="bg-brand-soft-stone border-t border-stone-200/50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="font-serif text-3xl font-bold tracking-tight">Our Leadership Team</h2>
            <p className="text-stone-500 font-light text-base">
              We are regular people dedicated to serving our community. Feel free to reach out to any of us directly.
            </p>
          </div>

          {/* RESPONSIVE CARD DISPLAY SYSTEM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map(leader => (
              <div 
                key={leader.id} 
                className="bg-white rounded-3xl p-4 border border-stone-200/30 shadow-xs flex flex-col items-center text-center group"
              >
                {/* Profile Portrait Container */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-5 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="object-cover w-full h-full object-top group-hover:scale-101 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Metadata Details */}
                <div className="space-y-1 w-full pb-2">
                  <h3 className="font-serif text-lg font-bold tracking-tight group-hover:text-brand-indigo transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    {leader.role}
                  </p>
                  
                  {/* Direct Mail System Anchor */}
                  <div className="pt-3 mt-3 border-t border-stone-100">
                    <a 
                      href={`mailto:${leader.email}`}
                      className="text-xs font-semibold text-brand-indigo hover:text-brand-indigo-hover transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Contact {leader.name.split(' ')[1] || leader.name}
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}