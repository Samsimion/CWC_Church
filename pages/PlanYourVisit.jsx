import React, { useState } from 'react';

export default function PlanYourVisit() {
  // State to manage the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceTime: '9:00 AM',
    hasKids: 'no',
    kidsInfo: ''
  });

  // State to handle accordion dropdowns for FAQs
  const [activeFaq, setActiveFaq] = useState(null);

  // State to handle successful form submission
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What should I wear?",
      a: "Whatever you are comfortable in! You'll see people in jeans, t-shirts, sneakers, and dresses. We care about you, not your wardrobe. Come as you are."
    },
    {
      q: "How long is the service?",
      a: "Our services last exactly 65 minutes. We start with about 20 minutes of live modern worship music, share a few community updates, and then hear an encouraging, practical message from our pastor."
    },
    {
      q: "Is there anything for my kids?",
      a: "Yes! Grace Kids is open every Sunday for infants through 5th grade. They will experience a safe, fun, and age-appropriate environment designed just for them while you enjoy the main service."
    }
  ];

  return (
    <div className="bg-brand-warm-white font-sans text-brand-deep-slate min-h-screen">
      
      {/* 1. HEADER HERO */}
      <header className="bg-brand-soft-stone py-16 sm:py-24 border-b border-stone-200/50 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-brand-indigo uppercase text-xs font-bold tracking-widest block">Join Us This Sunday</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-deep-slate">
            We’ve got a seat saved for you.
          </h1>
          <p className="text-stone-600 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Visiting a new place can be intimidating, so we want to handle the details for you. Let us know you're coming, and we'll make your first visit seamless.
          </p>
        </div>
      </header>

      {/* 2. WALKTHROUGH TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight">Your Sunday Walkthrough</h2>
          <p className="text-stone-500 font-light text-sm mt-2">Here is what your morning will look like from start to finish.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Step 1 */}
          <div className="space-y-4 relative">
            <div className="w-10 h-10 bg-brand-indigo text-white font-bold rounded-xl flex items-center justify-center shadow-md shadow-brand-indigo/20">1</div>
            <h3 className="font-serif text-lg font-bold">VIP Parking</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Look for our bright 'First Time Visitor' flags near the main entrance. Those front row spots are reserved strictly for you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4 relative">
            <div className="w-10 h-10 bg-brand-indigo text-white font-bold rounded-xl flex items-center justify-center shadow-md shadow-brand-indigo/20">2</div>
            <h3 className="font-serif text-lg font-bold">Free Coffee</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Head straight to the lobby coffee bar. Our host team will meet you there, and your drinks and specialty lattes are completely on us.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-4 relative">
            <div className="w-10 h-10 bg-brand-indigo text-white font-bold rounded-xl flex items-center justify-center shadow-md shadow-brand-indigo/20">3</div>
            <h3 className="font-serif text-lg font-bold">Kids Check-In</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              If you have little ones, we'll escort you to our secure kids' station, pre-print their safety tags, and introduce you to their leaders.
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-4 relative">
            <div className="w-10 h-10 bg-brand-indigo text-white font-bold rounded-xl flex items-center justify-center shadow-md shadow-brand-indigo/20">4</div>
            <h3 className="font-serif text-lg font-bold">Find a Seat</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              We’ll guide you into the auditorium and help you find great seats. Sit back, relax, and enjoy the music and message.
            </p>
          </div>

        </div>
      </section>

      {/* 3. KIDS REASSURANCE SPLIT SECTION */}
      <section className="bg-white py-16 sm:py-24 border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=800" 
                alt="Grace Kids Environment" 
                className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
              />
            </div>
            <div className="space-y-6">
              <span className="text-brand-amber-glow uppercase text-xs font-bold tracking-widest block">Family Safety First</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight">Bringing Your Children?</h2>
              <p className="text-stone-600 font-light leading-relaxed">
                We take the safety and security of your children incredibly seriously so that you can experience service completely worry-free. 
              </p>
              <ul className="space-y-3 font-sans text-sm text-stone-700 font-light">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-indigo flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Secure, randomized matching check-in numbers for every parent and child.</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-indigo flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Every single volunteer is fully background-checked, interviewed, and trained.</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-indigo flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Sanitized, bright, and age-specific curriculum environments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOST CONTACT VISIT FORM */}
      <section className="max-w-3xl mx-auto px-4 py-20 lg:py-28">
        <div className="bg-brand-soft-stone rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200/40">
          
          {submitted ? (
            <div className="text-center space-y-4 py-8 animate-fadeIn">
              <div className="w-16 h-16 bg-brand-indigo text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-serif text-2xl font-bold mt-4">We can't wait to meet you!</h3>
              <p className="text-stone-600 font-light max-w-md mx-auto text-sm leading-relaxed">
                Thank you for scheduling your visit. A member of our host team will reach out via email shortly to let you know exactly where to meet us this coming Sunday. See you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8 space-y-2">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">Schedule Your Visit</h2>
                <p className="text-stone-500 font-light text-xs sm:text-sm">Let us know you're coming and we'll roll out the red carpet.</p>
              </div>

              {/* Name field */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="johndoe@example.com"
                  className="bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Service Select Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Service Time</label>
                  <select 
                    className="bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-indigo transition-all"
                    value={formData.serviceTime}
                    onChange={(e) => setFormData({...formData, serviceTime: e.target.value})}
                  >
                    <option>9:00 AM</option>
                    <option>11:00 AM</option>
                  </select>
                </div>

                {/* Kids Toggle option */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Bringing Kids?</label>
                  <select 
                    className="bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-indigo transition-all"
                    value={formData.hasKids}
                    onChange={(e) => setFormData({...formData, hasKids: e.target.value})}
                  >
                    <option value="no">No, just me</option>
                    <option value="yes">Yes, I am bringing children</option>
                  </select>
                </div>
              </div>

              {/* Conditional Kids Textbox render */}
              {formData.hasKids === 'yes' && (
                <div className="flex flex-col space-y-1.5 animate-fadeIn">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Kids Names & Ages</label>
                  <textarea 
                    rows="2"
                    placeholder="e.g. Leo (Age 5), Maya (Age 8)"
                    className="bg-white border border-stone-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-indigo transition-all"
                    value={formData.kidsInfo}
                    onChange={(e) => setFormData({...formData, kidsInfo: e.target.value})}
                  />
                  <span className="text-[11px] text-stone-500 font-light">This allows our children's team to pre-print security badges and speed up your arrival!</span>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-brand-indigo hover:bg-brand-indigo-hover text-white font-semibold py-4 rounded-xl shadow-md shadow-brand-indigo/10 transition-colors tracking-wide mt-4"
              >
                Host Team, Save Me a Seat!
              </button>
            </form>
          )}

        </div>
      </section>

      {/* 5. ACCORDION FAQS */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <h3 className="font-serif text-2xl font-bold text-center mb-8">Common Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-stone-200/50 overflow-hidden">
              <button 
                className="w-full flex justify-between items-center px-6 py-5 text-left font-serif font-bold text-base sm:text-lg focus:outline-none text-brand-deep-slate"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span>{faq.q}</span>
                <svg className={`w-5 h-5 text-stone-400 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeFaq === index && (
                <div className="px-6 pb-6 text-sm sm:text-base font-light text-stone-600 leading-relaxed border-t border-stone-50 pt-3 animate-slideDown">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}