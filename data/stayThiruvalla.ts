export const details = {
  eventName: "NMG RISE & REBUILD MEETING",
  year: 2026,
  location: "Thiruvalla, Pathanamthitta, Kerala",
  eventLocation: "MFGC Convention Centre, Thiruvalla",
  website: "https://nmgglobal.org/",
  eventGoogleMaps: "https://maps.app.goo.gl/AQpjHZoALShyFST6A",
  eventDate: "04-09-2026 to 05-09-2026",
  contact: {
    hostname: "Bro. Geo George",
    hostEmail: "admin@nmgglobal.org",
    hostPhone: "61-423 783 450",
    cordinatorName: "Bro. Johnson Gomez",
    cordinatorPhone: "+91-8078968975",
  },
  // ADD THESE TWO PROPERTIES BELOW
  city: "Thiruvalla, Kerala",
  referencePoints: {
    "Conf Hall": "MFGC Convention Centre, Thiruvalla",
    "Railway Station": "Railway station near MFGC Convention Centre, Thiruvalla",
    "KSRTC": "KSRTC bus stand near MFGC Convention Centre, Thiruvalla",
    "Private Bus": "Private bus stand near MFGC Convention Centre, Thiruvalla"
  }
};
// ───┬─────────────┐
// │ (index) │ ID │ Hotel                         │ Address                                                                            │ Rating │ Conf Hall │ Railway Station │ KSRTC     │ Private Bus │
// ├─────────┼────┼───────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────┼────────┼───────────┼─────────────────┼───────────┼─────────────┤
// │ 0       │ 1  │ 'International Tourist Home'  │ 'Pushpagiri Rd, Thiruvalla, Kerala 689101, India'                                  │ 3.3    │ '1.60 km' │ '0.82 km'       │ '0.32 km' │ '0.17 km'   │
// │ 1       │ 2  │ 'Airco Le Grand Inn Hotel'    │ 'TK Rd, Thiruvalla, Kerala 689101, India'                                          │ 3.7    │ '1.57 km' │ '0.81 km'       │ '0.29 km' │ '0.18 km'   │
// │ 2       │ 3  │ 'Melody Residency Thiruvalla' │ 'KSRTC Complex, Thiruvalla, Kerala 689101, India'                                  │ 4      │ '1.29 km' │ '0.78 km'       │ '0.03 km' │ '0.39 km'   │
// │ 3       │ 4  │ 'Hotel Centauri'              │ 'Pushpagiri Rd, opposite pentecost Hall, Thiruvalla, Kerala 689101, India'         │ 4.5    │ '1.95 km' │ '0.97 km'       │ '0.67 km' │ '0.36 km'   │
// │ 4       │ 5  │ 'Menaka Residency'            │ 'Chilanka Junction, Thiruvalla - Mallappally Rd, Thiruvalla, Kerala 689101, India' │ 4.1    │ '1.35 km' │ '0.34 km'       │ '0.42 km' │ '0.44 km'   │
// │ 5       │ 6  │ 'Kailath Hotel'               │ 'Kurushukavala, opp. BSNL Bhavan, Thiruvalla, Kerala 689101, India'                │ 3.9    │ '1.41 km' │ '1.43 km'       │ '0.68 km' │ '0.91 km'   │
// │ 6       │ 7  │ 'Atlas Residency'             │ '9HMJ+46G, Thiruvalla, Kerala 689101, India'                                       │ 3.8    │ '2.04 km' │ '0.98 km'       │ '0.76 km' │ '0.42 km'   │
// │ 7       │ 8  │ 'Hotel Aryas Park'            │ 'Deepa Towers, Near, SH 1, Thiruvalla, Kerala 689101, India'                       │ 3.8    │ '1.22 km' │ '0.60 km'       │ '0.19 km' │ '0.43 km'   │
// │ 8       │ 9  │ 'Santhi Nilayam'              │ 'Santhi Nilayam, Kulakkadu Rd, Thiruvalla, Kerala 689101, India'                   │ ''     │ '1.66 km' │ '1.52 km'       │ '0.79 km' │ '0.92 km'   │
// └─────────┴────┴───

export const hotels = [
  {
    id: 1,
    name: "International Tourist Home",
    address: "Pushpagiri Rd, Thiruvalla, Kerala 689101, India",
    ratings: 3.3,
    contacts: ["9605095155", "9797486931"],
    website: "https://internationalthiruvalla.com",
    googleMaps: "https://maps.app.goo.gl/CmzEM9MpcHkt2ShHA",
    tariffs: [
      { room: "Double Bed (Non A/C)", price: "770" },
      { room: "Double Bed Suite (A/C)", price: "1,785" },
      { room: "3 Bed Room (A/C)", price: "2,625" },
      { room: "4 Bed Room (A/C)", price: "3,675" },
    ],
    distances: {
      conferenceHall: "2.5km",
      railwayStation: "1.5km",
      ksrtc: "1.6km",
      privateBus: "250m",
    },
  },
  {
    id: 2,
    name: "Airco Le Grand Inn Hotel",
    address: "TK Rd, Thiruvalla, Kerala 689101, India",
     ratings: 3.7,
    contacts: ["0469-2603252", "7592871987"],
    website: "https://www.aircolegrand.com",
    googleMaps: "https://maps.app.goo.gl/aekwoaBDRjUzZ3D67",
    tariffs: [
      { room: "Double Room (Non A/C)", price: "1,120" },
      { room: "Double Room (A/C)", price: "1,880" },
    ],
    distances: {
      conferenceHall: "2.5km",
      railwayStation: "1.1km",
      ksrtc: "450m",
      privateBus: "230m",
    },
  },
  {
    id: 3,
    name: "Melody Residency Thiruvalla",
    address: "KSRTC Complex, Thiruvalla, Kerala 689101, India",
     ratings: 4,
    contacts: ["0469-2909070", "8921660700"],
    website: "",
    googleMaps: "https://maps.app.goo.gl/xbgf3WP8qvfxdti18",
    tariffs: [
      { room: "Double Bed (A/C)", price: "1,600" },
      { room: "Double Bed (Non A/C)", price: "1,300" },
      { room: "Single Bed (Non A/C)", price: "1,000" },
      { room: "Deluxe Room", price: "2,500" },
      { room: "Dormitory (12 hrs)", price: "400" },
      { room: "Fresh Up Only", price: "150" },
    ],
    distances: {
      conferenceHall: "2.4km",
      railwayStation: "1.1km",
      ksrtc: "30m",
      privateBus: "500m",
    },
  },
  {
    id: 4,
    name: "Hotel Centauri",
    address: "Pushpagiri Rd, opposite pentecost Hall, Thiruvalla, Kerala 689101, India",
     ratings: 4.5,
    contacts: ["9745455888"],
    googleMaps: "https://maps.app.goo.gl/RRjMzcJygp67bMSG6",
    website: "",
    tariffs: [
      { room: "Standard A/C", price: "2,000" },
      { room: "Deluxe A/C", price: "2,200" },
      { room: "Semi Suit", price: "2,500" },
      { room: "Double Bed (Non A/C)", price: "1,700" },
    ],
    distances: {
      conferenceHall: "3.1km",
      railwayStation: "1.4km",
      ksrtc: "1.1km",
      privateBus: "1.2km",
    },
  },
  {
    id: 5,
    name: "Menaka Residency",
    address: "Chilanka Junction, Thiruvalla - Mallappally Rd, Thiruvalla, Kerala 689101, India",
     ratings: 4.1,
    contacts: ["0469-2706000", "8547706000"],
    googleMaps: "https://maps.app.goo.gl/QM3CsHGP2HfSgNvk7",
    website: "",
    tariffs: [
      { room: "2 Bed Room", price: "850" },
      { room: "Double Room (Non A/C)", price: "1,100" },
      { room: "Double Bed (A/C)", price: "1,600" },
      { room: "Deluxe A/C", price: "2,000" },
      { room: "Suite Room", price: "2,800" },
    ],
    distances: {
      conferenceHall: "2.1km",
      railwayStation: "1.1km",
      ksrtc: "700m",
      privateBus: "400m",
    },
  },
  {
    id: 6,
    name: "Kailath Hotel",
    address: "Kurushukavala, opp. BSNL Bhavan, Thiruvalla, Kerala 689101, India",
     ratings: 3.9,
    contacts: ["7025000087"],
    googleMaps: "https://maps.app.goo.gl/kzNxjXo2LpMqDMSH8",
    website: "",
    tariffs: [
      { room: "Single Room (Non A/C)", price: "1,120" },
      { room: "Single Room (A/C)", price: "1,650" },
      { room: "Double Room (Non A/C)", price: "1,400" },
      { room: "Double Room (A/C)", price: "2,000" },
      { room: "Family Room (A/C)", price: "2,240" },
      { room: "Family Room (Non A/C)", price: "3,000" },
    ],
    distances: {
      conferenceHall: "3km",
      railwayStation: "2.1km",
      ksrtc: "1.3km",
      privateBus: "1.4km",
    },
  },
  {
    id: 7,
    name: "Atlas Residency",
    address: "9HMJ+46G, Thiruvalla, Kerala 689101, India",
     ratings: 3.8,
    contacts: ["9744492360"],
    googleMaps: "https://maps.app.goo.gl/pD8VdvWNvpxAbENf6",
    website: "",
    tariffs: [
      { room: "Single Room", price: "400" },
      { room: "Double Room", price: "550" },
      { room: "4 Bed Room", price: "950" },
    ],
    distances: {
      conferenceHall: "3.2km",
      railwayStation: "1.5km",
      ksrtc: "1.1km",
      privateBus: "1.3km",
    },
  },
  {
    id: 8,
    name: "Hotel Aryas Park",
    address: "Deepa Towers, Near, SH 1, Thiruvalla, Kerala 689101, India",
     ratings: 3.8,
    contacts: ["0469-2603736", "8921676942"],
    tariffs: [{ room: "Double Bed (Non A/C)", price: "900" }],
    website: "",
    distances: {
      conferenceHall: "1.9km",
      railwayStation: "1.7km",
      ksrtc: "1km",
      privateBus: "700m",
    },
  },
   {
    id: 9,
    name: "Santhinilayam",
    address: "Santhinilayam, Kulakkadu Rd, Thiruvalla, Kerala 689101, India",
    ratings: "4.6",
    contacts: ["8078390259"],
    tariffs: [{ room: "Double Bed (Non A/C) with Bathroom", price: "945" }],
    googleMaps: "https://maps.app.goo.gl/x3eEnxdodE4oo6JVA?g_st=awb",
    website: "",
    note: "Kulakkadu Rd, Thiruvalla, Kerala 689101",
    distances: {
      conferenceHall: "1.66km",
      railwayStation: "",
      ksrtc: "",
      privateBus: "",
    },
  },
];

// export const dormitory = [];

export const dormitory = [
 {
  id: 1,
  name: "Marthoma Camp centre, Kompady",
  contacts: ["9526748765", "9895416720"],
  website: "",
  address: "Kompady - Meenthalakara Rd, Mangadu, Kompady, Manjadi, Kerala 689105",
  googleMaps: "https://maps.app.goo.gl/NRt7gy87xagLgsLp8",
  ratings:4.6,
  tariffs: [
    {
      room: "Dormitory room",
      price: "250",
    },
  ],
  distances: {
    conferenceHall: "",
    railwayStation: "",
    ksrtc: "",
    privateBus: "",
  },
  note: "Dormitory rate Rs. 250/- per person. Please book your dormitory at the earliest. Nearby hotel beds will be provided on 'first come first serve' basis. Further assistance will be provided by the NMG team - Sister Alphonsa Isaac & Brother Sarath S.S.",
}
];
