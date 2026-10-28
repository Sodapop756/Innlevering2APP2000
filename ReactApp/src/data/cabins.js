export const cabinData = {
  meta: {
    version: "1.0",
    generatedAt: "2026-03-15T10:00:00Z",
    defaultCurrency: "NOK",
  },
  cabins: [
    {
      id: "cabin-001",
      name: "Gjendesheim",
      type: "staffed",
      description: {
        nb: "Populær turisthytte ved Gjende, utgangspunkt for turen over Besseggen.",
        en: "Popular mountain lodge by Lake Gjende, starting point for the Besseggen hike.",
      },
      location: {
        lat: 61.4967,
        lng: 8.7717,
        elevationMeters: 995,
        municipality: "Vågå",
        region: "Innlandet",
      },
      pricing: {
        priceLevel: 3,
        currency: "NOK",
        perNight: { member: 590, nonMember: 790 },
      },
      capacity: { totalBeds: 120, bedsBySeason: { summer: 120, winter: 40 } },
      owner: {
        id: "user-101",
        name: "Jotunheimen Hyttedrift AS",
        contact: { email: "post@example.org", phone: "+47 61 00 00 01" },
      },
      rating: { average: 4.3, count: 3 },
      facilities: [
        "restaurant",
        "shop",
        "sauna",
        "wifi",
        "drying_room",
        "boat_service",
      ],
      openSeasons: [
        { name: "winter", start: "2026-03-01", end: "2026-04-30" },
        { name: "summer", start: "2026-06-15", end: "2026-09-30" },
      ],
      images: [
        {
          url: "https://example.org/img/gjendesheim-1.jpg",
          alt: "Main building seen from the lake",
        },
        {
          url: "https://example.org/img/gjendesheim-2.jpg",
          alt: "Dining room",
        },
      ],
      reviews: [
        {
          id: "rev-1",
          author: "Kari",
          stars: 5,
          text: "Fantastic food and a great starting point.",
          date: "2025-07-21",
        },
        {
          id: "rev-2",
          author: "Ola",
          stars: 4,
          text: "Crowded in July but well run.",
          date: "2025-07-29",
        },
        {
          id: "rev-3",
          author: "Mia",
          stars: 4,
          text: "Lovely sauna after a long day.",
          date: "2025-08-10",
        },
      ],
      connectedTripIds: ["trip-besseggen", "trip-jotunheimen-huttetur"],
    },
    {
      id: "cabin-002",
      name: "Litlos",
      type: "unstaffed",
      description: {
        nb: "Enkel ubetjent hytte på Hardangervidda med selvbetjening.",
        en: "Simple unstaffed cabin on Hardangervidda with self-service.",
      },
      location: {
        lat: 60.5833,
        lng: 7.3167,
        elevationMeters: 1220,
        municipality: "Eidfjord",
        region: "Vestland",
      },
      pricing: {
        priceLevel: 1,
        currency: "NOK",
        perNight: { member: 250, nonMember: 380 },
      },
      capacity: { totalBeds: 16 },
      owner: {
        id: "user-102",
        name: "Hardangervidda Turlag",
        contact: { email: "hytter@example.org" },
      },
      rating: { average: 3.5, count: 2 },
      facilities: ["wood_stove", "self_service_kitchen"],
      openSeasons: [
        { name: "all_year", start: "2026-01-01", end: "2026-12-31" },
      ],
      images: [
        {
          url: "https://example.org/img/litlos-1.jpg",
          alt: "Cabin in snowy landscape",
        },
      ],
      reviews: [
        {
          id: "rev-4",
          author: "Per <b>Bold</b>",
          stars: 4,
          text: "Cozy & quiet. Bring firewood > enough for 2 nights!",
          date: "2025-09-02",
        },
        {
          id: "rev-5",
          author: "Siri",
          stars: 3,
          text: "Basic, but exactly what you expect.",
          date: "2025-10-14",
        },
      ],
      connectedTripIds: ["trip-hardangervidda-tvers"],
    },
    {
      id: "cabin-003",
      name: "Nybygd Fjellstue",
      type: "unstaffed",
      description: {
        nb: "Nyåpnet hytte, ingen anmeldelser ennå.",
      },
      location: {
        lat: 62.0,
        lng: 9.0,
        elevationMeters: 1105,
        municipality: "Lesja",
        region: "Innlandet",
      },
      pricing: {
        priceLevel: 1,
        currency: "NOK",
        perNight: { member: 200, nonMember: 300 },
      },
      capacity: { totalBeds: 8 },
      owner: {
        id: "user-103",
        name: "Lesja Lokallag",
        contact: {},
      },
      rating: { average: null, count: 0 },
      facilities: [],
      openSeasons: [],
      images: [],
      reviews: [],
      connectedTripIds: [],
    },
  ],
};
