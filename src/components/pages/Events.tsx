import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
    // SEO: event lari, fun run, night run, easy run, komunitas lari, komunitas lari bandung, komunitas lari terdekat, komunitas lari indonesia
    const EVENTS = [
        { 
          title: "Easy Run", 
          date: "Every Sunday", 
          time: "05:30 AM", 
          loc: "Dago, Bandung",
          titleAttr: "Easy run - event lari komunitas lari Bandung"
        },
        { 
          title: "Night Run", 
          date: "Every Tuesday", 
          time: "19:00 PM", 
          loc: "Stadion Siliwangi",
          titleAttr: "Night run - event lari malam komunitas lari Bandung"
        },
        { 
          title: "Fun Run", 
          date: "Monthly", 
          time: "06:00 AM", 
          loc: "Braga, Bandung",
          titleAttr: "Fun run - event lari bulanan komunitas lari Bandung"
        },
      ];
      
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white" aria-label="Event lari komunitas lari Bandung Indonesia">
      {/* SEO: event lari, fun run, night run, easy run, komunitas lari, komunitas lari bandung, komunitas lari terdekat, komunitas lari indonesia */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none">
            EVENTS
          </h1>
          <p className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm">
            Show up. Keep up.
          </p>
          {/* Hidden SEO content */}
          <p className="sr-only">
            Jadwal event lari komunitas lari Bandung Indonesia. Bergabung dengan komunitas lari terdekat untuk fun run, night run, dan easy run. Komunitas lari terbaik di Bandung dengan event lari rutin.
          </p>
        </div>

        <div className="space-y-4" role="list" aria-label="Jadwal event lari komunitas lari Bandung - fun run, night run, easy run">
          {EVENTS.map((event, i) => (
            <article 
              key={i} 
              className="border border-white/10 p-8 hover:bg-white/5 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              role="listitem"
            >
              <div>
                <h3 
                  className="text-3xl font-['Syne'] font-bold uppercase mb-2"
                  title={event.titleAttr}
                >
                  {event.title}
                </h3>
                <div className="flex gap-6 text-zinc-400 font-['Syne'] text-sm uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} aria-hidden="true" /> {event.date} // {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} aria-hidden="true" /> {event.loc}
                  </span>
                </div>
              </div>
              <button 
                className="px-8 py-3 border border-white text-white font-['Syne'] uppercase hover:bg-white hover:text-black transition-all"
                aria-label={`RSVP untuk ${event.title} - event lari komunitas lari Bandung`}
                title={`Daftar ${event.title} - komunitas lari terdekat Bandung`}
              >
                RSVP
              </button>
            </article>
          ))}
        </div>
        
        <div className="mt-32 p-12 bg-[#111] border border-white/10 text-center">
          <h3 className="text-3xl font-['Pirata_One'] mb-6">JOIN THE WHATSAPP GROUP</h3>
          <p className="font-['Syne'] text-zinc-500 mb-8">Get live updates, drop locations, and banter.</p>
          <button 
            className="bg-white text-black px-8 py-4 font-['Syne'] font-bold uppercase tracking-widest hover:bg-zinc-200"
            aria-label="Gabung WhatsApp komunitas lari Bandung"
            title="Gabung grup WhatsApp komunitas lari terdekat - event lari fun run night run easy run"
          >
            Join Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;

