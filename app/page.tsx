"use client";

import { hotels, dormitory, details } from "@/data/stayThiruvalla";
// import { hotels, dormitory, details } from "@/data/stayTrivandrum"; 
import { Phone, MapPin, Globe, Hotel, Navigation, Info, Printer, Download } from "lucide-react";
import { useRef } from "react";

// Modern vibrant color palettes for each card
const colorThemes = [
  { bg: "bg-indigo-50", border: "border-indigo-200", accent: "text-indigo-700", iconBg: "bg-indigo-600", lightText: "text-indigo-600" },
  { bg: "bg-emerald-50", border: "border-emerald-200", accent: "text-emerald-700", iconBg: "bg-emerald-600", lightText: "text-emerald-600" },
  { bg: "bg-rose-50", border: "border-rose-200", accent: "text-rose-700", iconBg: "bg-rose-600", lightText: "text-rose-600" },
  { bg: "bg-amber-50", border: "border-amber-200", accent: "text-amber-700", iconBg: "bg-amber-600", lightText: "text-amber-600" },
  { bg: "bg-violet-50", border: "border-violet-200", accent: "text-violet-700", iconBg: "bg-violet-600", lightText: "text-violet-600" },
  { bg: "bg-cyan-50", border: "border-cyan-200", accent: "text-cyan-700", iconBg: "bg-cyan-600", lightText: "text-cyan-600" },
  { bg: "bg-teal-50", border: "border-teal-200", accent: "text-teal-700", iconBg: "bg-teal-600", lightText: "text-teal-600" },
  { bg: "bg-orange-50", border: "border-orange-200", accent: "text-orange-700", iconBg: "bg-orange-600", lightText: "text-orange-600" },
];

type Stay = {
  id: number;
  name: string;
  contacts: string[];

  website?: string;
  location?: string;
  note?: string;

  tariffs: {
    room: string;
    price: string;
  }[];

  distances: {
    conferenceHall: string;
    railwayStation: string;
    ksrtc: string;
    privateBus: string;
  };
};

type StayTabProps = {
  accomodationData: Stay[];
  icon: string;
  type: string;
};


const StayTab = ({
  accomodationData,
  icon,
  type,
}: StayTabProps) => {
  return (<div className="max-w-7xl mx-auto px-6 mt-16 grid gap-10">


    <div className={`p-8 text-center shadow-xl bg-emerald-600 text-white`}>
      <div className="text-6xl mb-3">
        {icon}
      </div>

      <h2 className="text-5xl font-black tracking-widest uppercase">
        {type}
      </h2>

      <p className="text-3xl mt-2 font-bold">
        Accommodations
      </p>
    </div>

    {accomodationData.map((stay, index) => {
      const theme = colorThemes[index % colorThemes.length];
      return (
        <section key={stay.id} className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${theme.border}`}>
          <div className="p-1"> {/* Thin inner padding for colored border effect */}
            <div className={`p-6 md:p-8 rounded-2xl`}>

              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:justify-between gap-6 border-b border-gray-100 pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`${theme.iconBg} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-lg`}>
                      {stay.id}
                    </span>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight leading-tight">
                      {stay.name}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {stay.contacts.map((phone, i) => (
                      <a key={i} href={`tel:${phone}`} className={`flex items-center gap-2 font-bold ${theme.lightText} hover:scale-105 transition-transform text-3xl`}>
                        <Phone size={18} fill="currentColor" className="opacity-20" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>


                <div className="flex flex-col gap-2">
                  {stay?.website && (
                    <a href={stay.website} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-xl text-2xl font-bold hover:bg-slate-700 transition-colors">
                      <Globe size={16} /> Visit Website
                    </a>
                  )}
                  {stay?.location && (
                    <a href={stay.location} target="_blank" rel="noopener" className={`flex items-center justify-center gap-2 ${theme.bg} ${theme.accent} px-4 py-2 rounded-xl text-2xl font-bold hover:brightness-95 transition-all`}>
                      <MapPin size={16} /> Open in Maps
                    </a>
                  )}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-10 mt-8">

                {/* Tariff Table */}
                <div className={`${theme.bg} p-6 rounded-2xl`}>
                  <h3 className={`flex items-center gap-2 font-black ${theme.accent} mb-4 uppercase tracking-widest text-xl`}>
                    <Hotel size={28} strokeWidth={3} /> Room Rates (Brief)
                  </h3>
                  <div className="space-y-3">
                    {stay.tariffs.map((t, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-white/50 pb-2">
                        <span className="text-slate-700 font-medium text-3xl">{t.room}</span>
                        <span className="bg-white px-3 py-1 rounded-lg font-black text-slate-900 shadow-sm border border-gray-100 text-3xl">
                          ₹{t.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Distances */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="flex items-center gap-2 font-black text-slate-500 mb-4 uppercase tracking-widest text-xl">
                    <Navigation size={18} strokeWidth={3} /> Proximity
                  </h3>
                  <div className="space-y-4 text-3xl">
                    <DistanceRow label="Conference Hall" value={stay.distances.conferenceHall} />
                    <DistanceRow label="Railway Station" value={stay.distances.railwayStation} />
                    <DistanceRow label="KSRTC Bus Terminal" value={stay.distances.ksrtc} />
                    <DistanceRow label="Private Bus Stand" value={stay.distances.privateBus} />
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm md:text-base font-medium">{stay?.note ? stay.note : null}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    })}
  </div>)
}

export default function AccommodationLIST() {
  const theme = colorThemes[0];
  const handlePrint = () => {
    window.print();
  };

  const reportTemplateRef = useRef<HTMLDivElement>(null);

  return (
    // <main className="min-h-screen bg-slate-100 pb-16 font-sans">
    <main className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900 print:bg-white print:p-0">
      {/* 1. FLOATING PRINT BUTTON (Hidden during print) */}

      {/* Wrapping the content in a Div with a Ref */}
      <div ref={reportTemplateRef} id="pdf-content" className="bg-slate-50">
{/* 
        <button
          onClick={handlePrint}
          className="fixed bottom-8 right-8 z-[100] bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-110 active:scale-95 print:hidden"
        >
          <Printer size={28} />
          <span className="font-bold text-xl pr-2">Save as PDF / Print</span>
        </button> */}

    
        {/* Event Header */}
        <header className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-14 px-4 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2">Praise The Lord Yeshua</h2>
            <br />
            <br />
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
              {details.eventName + " " + details.year}
            </h1>
            <div className="flex justify-center gap-4 mt-10">
              <button
                className={`px-8 py-4 uppercase rounded-full font-bold text-xl transition-all bg-yellow-400 text-black scale-110 shadow-xl`}
              >
                {details.location}
              </button>
            </div>
            <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl font-light text-blue-100 italic">Official Accommodation Guide</p>
            <p>Event Date : {details.eventDate}</p>
            <div className="flex flex-col gap-2">
              <a href={details.eventGoogleMaps} target="_blank" rel="noopener" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-2xl font-bold hover:brightness-95 transition-all`}>
                <MapPin size={16} /> Open in Maps for Event Location
              </a>
            </div>

          </div>
        </header>

        {/* Info Callout */}
        <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white p-5 rounded-2xl shadow-xl border-l-8 border-blue-600 flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Info className="text-blue-700" size={24} />
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              For <strong>booking and detailed information</strong> regarding rooms and prices, please contact the hotels directly. Mention the event name for any potential assistance.
            </p>
          </div>
        </div>

        {/* Hotel List */}

        <StayTab accomodationData={hotels} icon={"🏨"} type="HOTEL" />
        {dormitory.length > 0 ? (
          <StayTab accomodationData={dormitory} icon={" 🛏"} type="DORMITORY" />
        ) : null}

        <footer className="mt-24 py-20 bg-slate-900 text-center text-white">
          <p className="text-4xl font-black mb-2 tracking-tighter">MAY GOD BLESS YOU ALL.</p>
          <p className="text-4xl font-black mb-2 tracking-tighter"></p>
          <p className="text-xl text-slate-400 uppercase tracking-[0.5em]">NMG RISE & BUILD MEETING 2026 - {details.location}</p>
          <div className="flex flex-col gap-2">
            <a href={details.website} target="_blank" rel="noopener" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-2xl font-bold hover:brightness-95 transition-all`}>
              <Globe size={16} /> Visit website at nmgglobal.org
            </a>
          </div>
          <p className="mt-6 text-xs opacity-60 italic">Distances are approximate as per Google Maps data.</p>
        </footer>
      </div>
    </main>
  );
}

// Helper component for Distance Rows to ensure dark, bold KM text
function DistanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center group/row">
      <span className="text-slate-500 text-sm group-hover/row:text-slate-800 transition-colors text-xl">{label}</span>
      <span className="text-slate-950 font-black text-base tracking-tight border-b-2 border-slate-300 text-xl">
        {value}
      </span>
    </div>
  );
}


