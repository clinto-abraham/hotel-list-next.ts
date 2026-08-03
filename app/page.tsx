// import { hotels } from "@/data/hotels";
import { hotels } from "@/data/hotel";
// import { Phone, MapPin, Globe, Hotel, Navigation } from "lucide-react";

// import { hotels } from "@/data/hotels";
import { Phone, MapPin, Globe, Hotel, Navigation, Info } from "lucide-react";

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

export default function AccommodationPage() {
  return (
    <main className="min-h-screen bg-slate-100 pb-16 font-sans">
      {/* Event Header */}
      <header className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-14 px-4 text-center shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2">Welcome to Thiruvalla</h2>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            NMG RISE & REBUILD <br /> MEETING 2026
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl font-light text-blue-100 italic">Official Accommodation Guide</p>
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
      <div className="max-w-5xl mx-auto px-4 mt-12 grid gap-10">
        {hotels.map((hotel, index) => {
          const theme = colorThemes[index % colorThemes.length];
          return (
            <section key={hotel.id} className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${theme.border}`}>
              <div className="p-1"> {/* Thin inner padding for colored border effect */}
                <div className={`p-6 md:p-8 rounded-2xl`}>
                  
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:justify-between gap-6 border-b border-gray-100 pb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`${theme.iconBg} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-lg`}>
                          {hotel.id}
                        </span>
                        <h2 className="text-3xl font-black text-slate-800 tracking-tight leading-tight">
                          {hotel.name}
                        </h2>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        {hotel.contacts.map((phone, i) => (
                          <a key={i} href={`tel:${phone}`} className={`flex items-center gap-2 font-bold ${theme.lightText} hover:scale-105 transition-transform`}>
                            <Phone size={18} fill="currentColor" className="opacity-20" />
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {hotel.website && (
                        <a href={hotel.website} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-700 transition-colors">
                          <Globe size={16} /> Visit Website
                        </a>
                      )}
                      <a href={hotel.location} target="_blank" rel="noopener" className={`flex items-center justify-center gap-2 ${theme.bg} ${theme.accent} px-4 py-2 rounded-xl text-sm font-bold hover:brightness-95 transition-all`}>
                        <MapPin size={16} /> Open in Maps
                      </a>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 gap-10 mt-8">
                    {/* Tariff Table */}
                    <div className={`${theme.bg} p-6 rounded-2xl`}>
                      <h3 className={`flex items-center gap-2 font-black ${theme.accent} mb-4 uppercase tracking-widest text-xs`}>
                        <Hotel size={18} strokeWidth={3} /> Room Rates (Brief)
                      </h3>
                      <div className="space-y-3">
                        {hotel.tariffs.map((t, idx) => (
                          <div key={idx} className="flex justify-between items-center border-b border-white/50 pb-2">
                            <span className="text-slate-700 font-medium text-sm">{t.room}</span>
                            <span className="bg-white px-3 py-1 rounded-lg font-black text-slate-900 shadow-sm border border-gray-100">
                              ₹{t.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Distances */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                      <h3 className="flex items-center gap-2 font-black text-slate-500 mb-4 uppercase tracking-widest text-xs">
                        <Navigation size={18} strokeWidth={3} /> Proximity
                      </h3>
                      <div className="space-y-4">
                        <DistanceRow label="Conference Hall" value={hotel.distances.conferenceHall} />
                        <DistanceRow label="Railway Station" value={hotel.distances.railwayStation} />
                        <DistanceRow label="KSRTC Bus Terminal" value={hotel.distances.ksrtc} />
                        <DistanceRow label="Private Bus Stand" value={hotel.distances.privateBus} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <footer className="mt-20 text-center text-slate-500 border-t border-slate-200 pt-10 px-4">
        <p className="font-bold text-slate-800">NMG Rise & Rebuild Meeting 2026</p>
        <p className="text-sm mt-1 uppercase tracking-tighter">Thiruvalla | Pathanamthitta | Kerala</p>
        <p className="mt-6 text-xs opacity-60 italic">Distances are approximate as per Google Maps data.</p>
      </footer>
    </main>
  );
}

// Helper component for Distance Rows to ensure dark, bold KM text
function DistanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center group/row">
      <span className="text-slate-500 text-sm group-hover/row:text-slate-800 transition-colors">{label}</span>
      <span className="text-slate-950 font-black text-base tracking-tight border-b-2 border-slate-300">
        {value}
      </span>
    </div>
  );
}

// export default function AccommodationPage() {
//   return (
//     <main className="min-h-screen bg-gray-50 pb-12">
//       {/* Header */}
//       <header className="bg-blue-700 text-white py-10 px-4 text-center shadow-lg">
//         <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
//           Accommodation Facilities
//         </h1>
//         <p className="mt-2 text-blue-100 text-lg">Thiruvalla, Kerala</p>
//         <div className="mt-4 max-w-2xl mx-auto bg-blue-800/50 p-4 rounded-lg text-sm">
//           <p>For booking and detailed information regarding rooms and prices, please contact the hotels directly.</p>
//         </div>
//       </header>

//       {/* Hotel List */}
//       <div className="max-w-5xl mx-auto px-4 mt-8 grid gap-8">
//         {hotels.map((hotel) => (
//           <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
//             <div className="p-6">
//               <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//                     <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
//                       {hotel.id}
//                     </span>
//                     {hotel.name}
//                   </h2>
                  
//                   {/* Contacts */}
//                   <div className="mt-3 space-y-1">
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <Phone size={16} className="text-blue-600" />
//                       <span className="font-semibold">{hotel.contacts.join(", ")}</span>
//                     </div>
//                     {hotel.website && (
//                       <div className="flex items-center gap-2 text-blue-600 hover:underline">
//                         <Globe size={16} />
//                         <a href={hotel.website} target="_blank" rel="noopener noreferrer text-sm">
//                           Official Website
//                         </a>
//                       </div>
//                     )}
//                     {hotel.location && (
//                       <div className="flex items-center gap-2 text-green-700 hover:underline">
//                         <MapPin size={16} />
//                         <a href={hotel.location} target="_blank" rel="noopener noreferrer text-sm">
//                           View on Google Maps
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8 mt-8">
//                 {/* Tariff Table */}
//                 <div>
//                   <h3 className="flex items-center gap-2 font-bold text-gray-700 mb-3 border-b pb-2 uppercase text-sm tracking-wider">
//                     <Hotel size={18} /> Rooms & Tariff
//                   </h3>
//                   <div className="space-y-2">
//                     {hotel.tariffs.map((t, idx) => (
//                       <div key={idx} className="flex justify-between text-sm bg-gray-50 p-2 rounded">
//                         <span className="text-gray-600">{t.room}</span>
//                         <span className="font-bold text-gray-900">₹{t.price}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Distances */}
//                 <div>
//                   <h3 className="flex items-center gap-2 font-bold text-gray-700 mb-3 border-b pb-2 uppercase text-sm tracking-wider">
//                     <Navigation size={18} /> Distances
//                   </h3>
//                   <div className="grid grid-cols-1 gap-2 text-sm">
//                     <div className="flex justify-between border-b border-dashed py-1">
//                       <span className="text-gray-500">Conference Hall</span>
//                       <span className="font-medium">{hotel.distances.conferenceHall}</span>
//                     </div>
//                     <div className="flex justify-between border-b border-dashed py-1">
//                       <span className="text-gray-500">Railway Station</span>
//                       <span className="font-medium">{hotel.distances.railwayStation}</span>
//                     </div>
//                     <div className="flex justify-between border-b border-dashed py-1">
//                       <span className="text-gray-500">KSRTC Bus Terminal</span>
//                       <span className="font-medium">{hotel.distances.ksrtc}</span>
//                     </div>
//                     <div className="flex justify-between border-b border-dashed py-1">
//                       <span className="text-gray-500">Private Bus Stand</span>
//                       <span className="font-medium">{hotel.distances.privateBus}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <footer className="mt-12 text-center text-gray-500 text-sm px-4">
//         <p>© {new Date().getFullYear()} Accommodation Directory - Thiruvalla</p>
//         <p className="mt-1 font-medium italic">Distances are approximate as per Google Maps</p>
//       </footer>
//     </main>
//   );
// }