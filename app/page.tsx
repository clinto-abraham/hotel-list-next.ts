"use client";

// import { hotels, dormitory, details } from "@/data/stayThiruvalla";
//  import { hotels, dormitory, details } from "@/data/stayChalakudy"; 
import { hotels, dormitory, details, oyo, police } from "@/data/stayTrivandrum";
import { Phone, MapPin, Globe, Hotel, Navigation, Info, Star } from "lucide-react";
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
  ratings?: number | string; // <--- Update this line to accept strings
  contacts: string[];
  website?: string;
  address?: string;
  googleMaps?: string;
  note?: string;
  notes?: string[]
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

// Helper function to find the absolute lowest price in a given hotel's tariffs
const getLowestPrice = (tariffs: { room: string; price: string }[]) => {
  if (!tariffs || tariffs.length === 0) return Infinity; // Push to bottom if no price
  const prices = tariffs.map((t) => Number(t.price.replace(/[^0-9.-]+/g, "")));
  return Math.min(...prices);
};

const StayTab = ({ accomodationData, icon, type }: StayTabProps) => {

  // Create a sorted copy of the accommodations based on their lowest tariff price
  const sortedAccommodations = [...accomodationData].sort((a, b) => {
    return getLowestPrice(a.tariffs) - getLowestPrice(b.tariffs);
  });

  return (
    <div className="max-w-7xl mx-auto px-6 mt-16 grid gap-10">

      {/* Category Header */}
      <div className="p-8 text-center shadow-xl bg-emerald-600 text-white rounded-3xl">
        <div className="text-6xl mb-3">{icon}</div>
        <h2 className="text-4xl font-black tracking-widest uppercase">{type}</h2>
        <p className="text-xl mt-2 font-bold opacity-90">Accommodations</p>
      </div>

      {/* Accommodations Grid - NOW MAPPING OVER SORTED DATA */}
      {sortedAccommodations.map((stay, index) => {
        const theme = colorThemes[index % colorThemes.length];

        return (
          <section key={stay.id} className={`group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${theme.border}`}>
            <div className="p-6 md:p-8">

              {/* Card Title & ratings Header */}
              <div className="flex items-center justify-between mb-8 flex-wrap gap-6">

                {/* Title Section */}
                <div className="flex items-center gap-4">
                  {/* CHANGED stay.id to index + 1 so it always displays 1, 2, 3 based on lowest price */}
                  <span className={`${theme.iconBg} text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shadow-md shrink-0`}>
                    {index + 1}
                  </span>
                  <h2 className="text-3xl md:text-3xl font-black text-slate-800 tracking-tight">
                    {stay.name}
                  </h2>
                </div>

                {/* Google ratings Section */}
                {stay.ratings && (
                  <div className="flex items-center bg-amber-50 px-5 py-3 rounded-2xl border border-amber-200 shadow-sm">
                    <div className="flex gap-1.5 mr-4">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const ratingNum = Number(stay.ratings) || 0;
                        const fillPercentage = Math.max(0, Math.min(100, (ratingNum - star + 1) * 100));

                        return (
                          <div key={star} className="relative w-8 h-8">
                            <Star className="absolute top-0 left-0 text-amber-200/60" fill="currentColor" size={32} />
                            <div
                              className="absolute top-0 left-0 overflow-hidden h-full"
                              style={{ width: `${fillPercentage}%` }}
                            >
                              <Star className="text-amber-500" fill="currentColor" size={32} />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Numeric Score */}
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-amber-600 text-3xl">{Number(stay.ratings).toFixed(1)}</span>
                      <span className="font-bold text-amber-600/60 text-xl">/ 5</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Top Row: Contacts & Links (2 Column Grid) */}
              <div className="grid md:grid-cols-2 gap-6 border-b border-gray-100 pb-8 mb-8">

                {/* Contacts Box */}
                <div className={`${theme.bg} p-6 rounded-2xl flex flex-col justify-center`}>
                  <h3 className={`font-bold ${theme.lightText} text-3xl uppercase tracking-widest mb-3`}>
                    Contacts
                  </h3>
                  <div className="flex flex-col gap-3">
                    {stay.contacts.map((phone, i) => (
                      <a key={i} href={`tel:${phone}`} className={`flex items-center gap-3 font-semibold ${theme.lightText} hover:opacity-80 transition-opacity text-3xl`}>
                        <Phone size={18} fill="currentColor" className="opacity-70" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Links Box */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-center gap-3">
                  {stay?.website && (
                    <a href={stay.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-800 text-white px-4 py-3 rounded-xl text-3xl font-bold hover:bg-slate-700 transition-colors">
                      <Globe size={18} /> Visit Website
                    </a>
                  )}
                  {stay?.googleMaps && (
                    <a href={stay.googleMaps} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 ${theme.bg} ${theme.accent} px-4 py-3 rounded-xl text-3xl font-bold hover:brightness-95 transition-all`}>
                      <MapPin size={18} /> Open in Maps
                    </a>
                  )}

                  {stay?.address && (
                    <span className={`flex items-center justify-center gap-2 ${theme.bg} ${theme.accent} px-4 py-3 rounded-xl text-3xl font-bold hover:brightness-95 transition-all text-center`}>
                      {stay.address}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Row: Rates & Proximity (2 Column Grid) */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Tariff Table */}
                <div className={`${theme.bg} p-6 rounded-2xl`}>
                  <h3 className={`flex items-center gap-2 font-black ${theme.accent} mb-5 uppercase tracking-widest text-3xl`}>
                    <Hotel size={20} strokeWidth={2.5} /> Room Rates (Brief)
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[...stay.tariffs]
                      .sort((a, b) => {
                        const priceA = Number(a.price.replace(/[^0-9.-]+/g, ""));
                        const priceB = Number(b.price.replace(/[^0-9.-]+/g, ""));
                        return priceA - priceB;
                      })
                      .map((t, idx) => (
                        <div key={idx} className="flex justify-between items-center py-1">
                          <span className="text-slate-700 font-medium text-base md:text-3xl">{t.room}</span>
                          <span className="bg-white px-3 py-1.5 rounded-lg font-bold text-slate-900 shadow-sm text-base md:text-3xl">
                            ₹{t.price}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Distances */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="flex items-center gap-2 font-black text-slate-500 mb-5 uppercase tracking-widest text-3xl">
                    <Navigation size={18} strokeWidth={2.5} /> Proximity
                  </h3>
                  <div className="flex flex-col gap-4">
                    <DistanceRow label="Conference Hall" value={stay.distances.conferenceHall} />
                    <DistanceRow label="Railway Station" value={stay.distances.railwayStation} />
                    <DistanceRow label="KSRTC Bus Terminal" value={stay.distances.ksrtc} />
                    <DistanceRow label="Private Bus Stand" value={stay.distances.privateBus} />
                  </div>
                </div>

              </div>

              {/* Notes Footer */}
              {stay?.note && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-slate-500 text-3xl font-medium">Note: {stay.note}</span>
                </div>
              )}
              {stay?.notes && stay.notes.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-slate-500 text-3xl font-medium block mb-4">
                    Notes:
                  </span>
                  <ul className="list-disc list-inside text-slate-500 text-2xl md:text-xl space-y-2 ml-2">
                    {stay.notes.map((note, index) => (
                      <li key={index} className="leading-snug">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </section>
        );
      })}
    </div>
  );
}

export default function AccommodationLIST() {
  const reportTemplateRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900 print:bg-white print:p-0">
      <div ref={reportTemplateRef} id="pdf-content" className="bg-slate-50">

        {/* Event Header */}
        <header className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16 px-4 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-3xl mb-4">Praise The Lord Yeshua</h2>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
              {details.eventName} {details.year}
            </h1>

            <div className="flex justify-center mb-10">
              <span className="px-8 py-3 uppercase rounded-full font-bold text-3xl bg-yellow-400 text-black shadow-xl">
                {details.location}
              </span>
            </div>

            <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-3xl md:text-xl font-light text-blue-100 italic mb-2">Official Accommodation Guide</p>
            <p className="text-3xl text-blue-200 mb-6">Event Date: {details.eventDate}</p>

            <div className="flex justify-center">
              <a href={details.eventGoogleMaps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl text-3xl font-bold transition-all border border-white/20">
                <MapPin size={18} /> Open Event Location in Maps
              </a>
            </div>
          </div>
        </header>

        {/* Info Callout */}
        <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-blue-600 flex items-center gap-5">
            <div className="bg-blue-100 p-3 rounded-full shrink-0">
              <Info className="text-blue-700" size={24} />
            </div>
            <p className="text-gray-700 text-3xl md:text-base leading-relaxed">
              For <strong>booking and detailed information</strong> regarding rooms and prices, please contact the hotels directly. Mention the event name for any potential assistance.
            </p>
          </div>
        </div>

        {/* Police Dormitory Trivandrum List */}
        {police && police.length > 0 && (
          <StayTab accomodationData={police} icon={"🛏"} type="POLICE DORMITORY - Managed by NMG Volunteers" />
        )}
        {/* Dormitory List */}
        {/* {dormitory && dormitory.length > 0 && (
          <StayTab accomodationData={dormitory} icon={"🛏"} type="DORMITORY" />
        )} */}

        {oyo && oyo.length > 0 && (
          <StayTab accomodationData={oyo} icon={"🏨"} type="OYO" />
        )}

         {/* Hotel List */}
        <StayTab accomodationData={hotels} icon={"🏨"} type="HOTEL" />

        <footer className="mt-24 py-16 bg-slate-900 text-center text-white">
          <p className="text-3xl font-black mb-6 tracking-wide">MAY GOD BLESS YOU ALL.</p>
          <p className="text-3xl text-slate-400 uppercase tracking-widest mb-8">NMG RISE & BUILD MEETING {details.year} - {details.location}</p>

          <div className="flex justify-center mb-8">
            <a href={details.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-3xl font-bold transition-all">
              <Globe size={18} /> Visit nmgglobal.org
            </a>
          </div>

          <p className="text-xs opacity-50 italic">Distances are approximate as per Google Maps data.</p>
        </footer>
      </div>
    </main>
  );
}

// Helper component aligned to match the screenshot provided
function DistanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center group/row">
      <span className="text-slate-500 text-3xl md:text-base group-hover/row:text-slate-700 transition-colors">
        {label}
      </span>
      <span className="text-slate-900 font-bold text-3xl md:text-base tracking-tight border-b-2 border-slate-300 pb-0.5">
        {value}
      </span>
    </div>
  );
}