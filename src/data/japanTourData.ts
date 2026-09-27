export interface HeroCard {
  id: string;
  tagline: string;
  sub: string;
  image: string;
  badge?: string;
  stat?: string;
}

export interface TimelineCity {
  id: string;
  city: string;
  days: string;
  tag: string;
  description: string;
  images: {
    url: string;
    caption: string;
  }[];
  highlights: string[];
  weather: string;
  transit: string;
}

export interface ItineraryDay {
  day: number;
  city: string;
  title: string;
  timeSlot: string;
  description: string;
  activities: {
    time: string;
    title: string;
    note: string;
    costJpy: number;
    category: 'culture' | 'food' | 'nature' | 'transit';
  }[];
  tips: string;
  walkDistance: string;
  shinkansen?: string;
}

export interface IncludedItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  subText: string;
  features: string[];
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'editing' | 'idle';
  color: string;
  currentStop?: string;
}

export interface ExpenseItem {
  id: string;
  title: string;
  amountJpy: number;
  amountUsd: number;
  paidBy: string;
  splitWith: string[];
  category: string;
}

export interface PollOption {
  id: string;
  label: string;
  votes: number;
  voters: string[];
}

export const CITIES_TIMELINE: TimelineCity[] = [
  {
    id: 'osaka',
    city: 'Osaka',
    days: 'Days 1–3',
    tag: 'Street Food & Feudal Castles',
    description:
      'Arrive at Kansai International (KIX). Experience Osaka Castle’s spring gardens, followed by nighttime culinary hunting in neon-drenched Dotonbori.',
    images: [
      {
        url: '/src/assets/images/osaka_castle_thumb_1790465487052.jpg',
        caption: 'Osaka Castle & Sakura Moat',
      },
      {
        url: '/src/assets/images/tokyo_neon_alley_1790465499670.jpg',
        caption: 'Dotonbori Alleyway & Takoyaki',
      },
    ],
    highlights: ['Osaka Castle Park', 'Kuromon Ichiba Market', 'Dotonbori Street Food Safari', 'Shinsekai Kushikatsu'],
    weather: '18°C / Mild spring breeze',
    transit: 'Private van from KIX + Osaka Subway Pass',
  },
  {
    id: 'kyoto',
    city: 'Kyoto',
    days: 'Days 4–6',
    tag: 'Zen Temples & Geisha Districts',
    description:
      'Board the rapid express to the cultural capital. Walk through 10,000 vermilion Torii gates at dawn, stroll Arashiyama bamboo groves, and savor Kaiseki dinner.',
    images: [
      {
        url: '/src/assets/images/kyoto_japan_hero_1790456521006.jpg',
        caption: 'Arashiyama Bamboo & Gion',
      },
      {
        url: '/src/assets/images/pagoda_fuji_sakura_1790465473618.jpg',
        caption: 'Traditional Pagoda & Cherry Blossoms',
      },
    ],
    highlights: ['Fushimi Inari Taisha (Dawn Walk)', 'Arashiyama Sagano Forest', 'Kinkaku-ji (Golden Pavilion)', 'Gion Evening Lantern Stroll'],
    weather: '16°C / Crisp mountain morning',
    transit: 'Shinkansen Nozomi bullet train (14 mins)',
  },
  {
    id: 'tokyo',
    city: 'Tokyo',
    days: 'Days 7–10',
    tag: 'Futuristic Metropolis & Mount Fuji',
    description:
      'Bullet train ride past Mount Fuji into Tokyo. From serene Meiji Jingu shrine to electric Shibuya crossing, Michelin ramen bars, and teamLab digital art.',
    images: [
      {
        url: '/src/assets/images/tokyo_neon_alley_1790465499670.jpg',
        caption: 'Shinjuku Omoide Yokocho',
      },
      {
        url: '/src/assets/images/japan_hero_bg_1790465455426.jpg',
        caption: 'Mount Fuji Day Trip & Sunset',
      },
    ],
    highlights: ['Shibuya Sky Observation Deck', 'Senso-ji Temple in Asakusa', 'Chureito Pagoda Fuji Viewpoint', 'Akihabara & Ginza Culinary'],
    weather: '19°C / Sunny spring afternoons',
    transit: 'JR Yamanote Line & Tokyo Metro 72-hr pass',
  },
];

export const INCLUDED_SERVICES: IncludedItem[] = [
  {
    id: 'guides',
    title: 'Guides',
    iconName: 'Compass',
    shortDesc: '2 awesome guides who know everything about Japan!',
    subText: 'Bilingual local experts (English & Japanese) with 10+ years showing hidden alleys, culinary spots, and cultural etiquette.',
    features: ['24/7 on-tour coordination', 'Language translation & booking support', 'Local culture & history insights'],
  },
  {
    id: 'flights',
    title: 'Flights',
    iconName: 'Plane',
    shortDesc: 'Routes:\nMoscow / NYC / London — Osaka\nTokyo — Return',
    subText: 'Optimized flight routes with checked baggage (23kg x 2), direct transfers, and coordinated group arrival windows.',
    features: ['International multi-city booking', 'Priority check-in assistance', 'Flight disruption guarantee'],
  },
  {
    id: 'transfers',
    title: 'Transfers',
    iconName: 'Train',
    shortDesc: 'From the airport\nto the hotels + Bullet trains',
    subText: 'Private executive vans from airport upon arrival, plus JR Shinkansen Bullet Train reserved green-car tickets.',
    features: ['JR Rail Passes included', 'Luggage forward service (Takkyubin)', 'Private airport pickup & dropoff'],
  },
  {
    id: 'hotels',
    title: 'Hotels',
    iconName: 'Building2',
    shortDesc: 'Comfortable accommodation\n2 people per room\n(breakfasts included)',
    subText: 'Curated 4-star boutique design hotels in central Tokyo & Osaka, plus 1 authentic night in a traditional Onsen Ryokan.',
    features: ['Boutique central district hotels', 'Traditional Ryokan with mineral onsen', 'Japanese & Western breakfast daily'],
  },
];

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    day: 1,
    city: 'Osaka',
    title: 'Konnichiwa Japan & Dotonbori Neon Safari',
    timeSlot: 'Arrival & Welcome Dinner',
    description: 'Land at Kansai Airport, private transfer to Namba hotel. Evening walking food crawl through Dotonbori neon arcade.',
    activities: [
      { time: '14:00', title: 'Check-in at Swissôtel Namba', note: 'Drop bags, refresh, receive pocket Wi-Fi & welcome kit', costJpy: 0, category: 'transit' },
      { time: '17:30', title: 'Dotonbori Street Food Crawl', note: 'Takoyaki octopus balls, Gyoza & craft Japanese draft beer', costJpy: 3500, category: 'food' },
      { time: '20:00', title: 'Tombori River Canal Cruise', note: 'Night cruise beneath the iconic Glico Running Man sign', costJpy: 1200, category: 'culture' },
    ],
    tips: 'Pick up an IC card (ICOCA) for contactless beverage vending machines.',
    walkDistance: '7.2 km (11,000 steps)',
  },
  {
    day: 2,
    city: 'Osaka',
    title: 'Feudal Samurai Fortresses & Kuromon Kitchen',
    timeSlot: 'Castles & Historic Alleys',
    description: 'Morning exploration of Osaka Castle and massive stone ramparts, followed by seafood tasting at Osaka’s legendary kitchen.',
    activities: [
      { time: '09:00', title: 'Osaka Castle & Tenshukaku Tower', note: 'Panoramic observation deck overlooking cherry blossom gardens', costJpy: 1800, category: 'culture' },
      { time: '13:00', title: 'Kuromon Ichiba Market Lunch', note: 'Fresh grilled king crab, sea urchin & Kobe beef skewers', costJpy: 4800, category: 'food' },
      { time: '16:00', title: 'Shinsekai Retro District', note: 'Tsutenkaku Tower & authentic Kansai Kushikatsu dinner', costJpy: 2900, category: 'culture' },
    ],
    tips: 'Wear comfortable slip-on walking shoes; castles require removing footwear inside.',
    walkDistance: '12.4 km (18,500 steps)',
  },
  {
    day: 3,
    city: 'Osaka → Kyoto',
    title: 'Nara Sacred Sika Deer & Transit to Ancient Kyoto',
    timeSlot: 'Sacred Temples & Bamboo Forest',
    description: 'Side excursion to Nara Deer Park and Todai-ji Great Buddha, then express transfer into central Kyoto.',
    activities: [
      { time: '09:30', title: 'Nara Park & Todai-ji Giant Bronze Buddha', note: 'Bowing sika deer feeding and world’s largest wooden temple', costJpy: 2200, category: 'nature' },
      { time: '14:00', title: 'Express Train to Kyoto Gion', note: 'Check in to boutique Machiya heritage townhouse hotel', costJpy: 1400, category: 'transit' },
      { time: '18:00', title: 'Evening Gion Lantern Walk', note: 'Quiet wooden cobblestone alleys in search of Geiko & Maiko', costJpy: 0, category: 'culture' },
    ],
    tips: 'Deer crackers (Shika-senbei) can be purchased for 200 yen from street elders.',
    walkDistance: '10.1 km (15,200 steps)',
  },
  {
    day: 4,
    city: 'Kyoto',
    title: 'Fushimi Inari 10,000 Gates at Sunrise & Bamboo Grove',
    timeSlot: 'Spiritual Shrines & Zen Gardens',
    description: 'Dawn climb through the mystic orange Torii tunnel before the crowds, followed by matcha tea in Arashiyama.',
    activities: [
      { time: '06:30', title: 'Fushimi Inari Taisha Sunrise Walk', note: 'Hike to Yotsutsuji intersection for Kyoto morning valley vista', costJpy: 0, category: 'nature' },
      { time: '11:00', title: 'Sagano Bamboo Forest & Tenryu-ji', note: 'UNESCO World Heritage Zen garden and bamboo canopy', costJpy: 800, category: 'culture' },
      { time: '15:30', title: 'Traditional Tea Ceremony in Uji Style', note: 'Ceremonial stone-ground matcha and seasonal wagashi sweet', costJpy: 3200, category: 'food' },
    ],
    tips: 'Early sunrise start ensures zero photo photobombs inside the orange Torii tunnels.',
    walkDistance: '14.8 km (21,400 steps)',
  },
  {
    day: 5,
    city: 'Kyoto → Hakone',
    title: 'Shinkansen Bullet Train & Traditional Onsen Ryokan',
    timeSlot: 'Bullet Train & Hot Springs',
    description: 'Board Shinkansen bullet train at 300 km/h past Mount Fuji. Check into a mountainside ryokan with private cedar hot spring.',
    activities: [
      { time: '10:00', title: 'Shinkansen Nozomi Express', note: 'Gliding past Mount Fuji with authentic Ekiben bento box', costJpy: 8500, category: 'transit' },
      { time: '14:30', title: 'Hakone Ropeway & Owakudani Valley', note: 'Volcanic sulphur fumaroles and longevity black eggs', costJpy: 2600, category: 'nature' },
      { time: '18:30', title: 'Multi-course Kaiseki Banquet & Onsen', note: '11-course traditional dinner served in tatami room, hot spring soak', costJpy: 0, category: 'food' },
    ],
    tips: 'Ryokan baths are gender-separated; ensure you rinse thoroughly before entering.',
    walkDistance: '6.5 km (9,800 steps)',
  },
  {
    day: 6,
    city: 'Hakone → Tokyo',
    title: 'Lake Ashi Pirate Ship & Arrival into Tokyo Neon',
    timeSlot: 'Alpine Lake & Mega City',
    description: 'Cruise Lake Ashi with reflection of Mount Fuji, then express transit directly to Shinjuku, Tokyo.',
    activities: [
      { time: '09:30', title: 'Lake Ashi Sightseeing Cruise', note: 'Scenic cruise with views of the submerged Hakone shrine Torii gate', costJpy: 1600, category: 'nature' },
      { time: '13:00', title: 'Romancecar Train to Tokyo Shinjuku', note: 'Arrive at the world’s busiest station, hotel check-in', costJpy: 2400, category: 'transit' },
      { time: '18:30', title: 'Omoide Yokocho & Golden Gai Bar Crawl', note: 'Charcoal yakitori skewers in historic tiny 6-seat bars', costJpy: 4500, category: 'food' },
    ],
    tips: 'Keep cash handy; Golden Gai alley bars usually only accept Japanese yen cash.',
    walkDistance: '8.7 km (13,000 steps)',
  },
  {
    day: 7,
    city: 'Tokyo',
    title: 'Shibuya Scramble, Meiji Shrine & Harajuku Fashion',
    timeSlot: 'Modern Metropolis Vibes',
    description: 'Experience the contrasts of Tokyo: ancient cedar forest of Meiji Jingu beside the sensory overload of Shibuya.',
    activities: [
      { time: '09:00', title: 'Meiji Jingu Shinto Shrine', note: 'Tranquil 170-acre forest in the heart of Tokyo', costJpy: 0, category: 'culture' },
      { time: '12:00', title: 'Takeshita Street & Omotesando Architecture', note: 'Trendy crêpes, Japanese designer boutiques, cat street coffee', costJpy: 2100, category: 'food' },
      { time: '16:30', title: 'Shibuya Sky 360° Rooftop Deck', note: 'Sunset over Shibuya Crossing and Mount Fuji silhouette in distance', costJpy: 2500, category: 'culture' },
    ],
    tips: 'Shibuya Sky rooftop slots sell out weeks early; TripForge guarantees your sunset pass.',
    walkDistance: '13.2 km (19,800 steps)',
  },
  {
    day: 8,
    city: 'Tokyo',
    title: 'teamLab Borderless & Tsukiji Outer Fish Market',
    timeSlot: 'Digital Art & Ocean Gastronomy',
    description: 'Immersion in world-famous digital light art followed by fresh bluefin tuna sushi and Asakusa heritage.',
    activities: [
      { time: '08:30', title: 'Tsukiji Outer Market Food Tour', note: 'Tamagoyaki rolled omelet, A5 wagyu skewers, and fresh sashimi', costJpy: 5200, category: 'food' },
      { time: '11:30', title: 'teamLab Borderless Azabudai Hills', note: 'Jaw-dropping boundary-less digital light waterfalls and rooms', costJpy: 4200, category: 'culture' },
      { time: '16:00', title: 'Senso-ji Asakusa & Nakamise Dori', note: 'Tokyo’s oldest Buddhist temple and souvenir street', costJpy: 500, category: 'culture' },
    ],
    tips: 'Wear pants or shorts; teamLab exhibits feature reflective mirrored floors.',
    walkDistance: '11.5 km (16,900 steps)',
  },
  {
    day: 9,
    city: 'Tokyo',
    title: 'Akihabara Electric Town & Michelin Ramen Quest',
    timeSlot: 'Subculture & Culinary Climax',
    description: 'Explore retro arcade buildings, anime culture, and enjoy our curated private ramen workshop.',
    activities: [
      { time: '10:00', title: 'Akihabara Retro Gaming & Electronics', note: 'Mandarake treasure hunt and 7-story arcade challenges', costJpy: 1500, category: 'culture' },
      { time: '13:00', title: 'Ramen Tasting & Noodle Crafting Session', note: 'Hand-make Tokyo style Shoyu broth with master chef', costJpy: 6500, category: 'food' },
      { time: '19:00', title: 'Roppongi Hills Farewell Dinner', note: 'Celebration dinner overlooking glowing Tokyo Tower', costJpy: 8000, category: 'food' },
    ],
    tips: 'Pack empty luggage space for unique Japanese snacks, kitkats, and ceramics.',
    walkDistance: '9.3 km (14,100 steps)',
  },
  {
    day: 10,
    city: 'Tokyo',
    title: 'Sayonara Japan & Haneda / Narita Departure',
    timeSlot: 'Farewell & Airport Transfer',
    description: 'Morning matcha ceremony, souvenir pickup at Ginza Six, and direct express transfer to Tokyo international airports.',
    activities: [
      { time: '10:00', title: 'Ginza Six Rooftop Garden & Shopping', note: 'Last minute stationery, green teas, and souvenir packing', costJpy: 0, category: 'culture' },
      { time: '13:30', title: 'Tokyo Monorail or Narita Express', note: 'Comfortable coordinated transit straight to your departure terminal', costJpy: 3100, category: 'transit' },
      { time: '16:00', title: 'International Departure Flights', note: 'Board flight back home with memories of a lifetime', costJpy: 0, category: 'transit' },
    ],
    tips: 'Tax-free shopping requires showing your physical passport at checkout.',
    walkDistance: '5.2 km (7,600 steps)',
  },
];

export const INITIAL_CREW: CrewMember[] = [
  { id: '1', name: 'Kenji Sato', role: 'Lead Tour Curator (Kyoto)', avatar: '🏯', status: 'online', color: '#10B981', currentStop: 'Kyoto Gion' },
  { id: '2', name: 'Sophia Chen', role: 'Expedition Photographer', avatar: '📸', status: 'editing', color: '#F59E0B', currentStop: 'Shibuya Sky' },
  { id: '3', name: 'Marcus Vance', role: 'Culinary & Logistics', avatar: '🍜', status: 'online', color: '#6366F1', currentStop: 'Dotonbori' },
  { id: '4', name: 'Yuki Tanaka', role: 'Cultural Translator', avatar: '🌸', status: 'idle', color: '#EC4899', currentStop: 'Hakone Onsen' },
];

export const INITIAL_EXPENSES: ExpenseItem[] = [
  { id: 'e1', title: 'Bullet Train Green Car Upgrades', amountJpy: 32000, amountUsd: 215, paidBy: 'Kenji Sato', splitWith: ['All 8 travelers'], category: 'Transit' },
  { id: 'e2', title: 'Private Tea House Kaiseki in Gion', amountJpy: 64000, amountUsd: 430, paidBy: 'Sophia Chen', splitWith: ['All 8 travelers'], category: 'Food & Dining' },
  { id: 'e3', title: 'Shibuya Sky Sunset Group Tickets', amountJpy: 16000, amountUsd: 108, paidBy: 'Marcus Vance', splitWith: ['All 8 travelers'], category: 'Activities' },
];
