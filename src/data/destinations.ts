export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  category: 'trek' | 'camp' | 'dining' | 'scenic' | 'culture';
  duration: string;
  cost: number;
  elevation?: string;
  coordinates?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  date: string;
  summary: string;
  distance: string;
  elevationGain: string;
  items: ItineraryItem[];
}

export interface Destination {
  id: string;
  title: string;
  country: string;
  category: string;
  tagline: string;
  image: string;
  duration: string;
  rating: number;
  reviewCount: number;
  altitude: string;
  idealSeason: string;
  difficulty: 'Moderate' | 'Challenging' | 'Expert' | 'Accessible';
  estimatedCost: string;
  description: string;
  collaborators: {
    name: string;
    avatar: string;
    role: string;
    status: 'online' | 'editing' | 'idle';
  }[];
  itinerary: ItineraryDay[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'machu-picchu',
    title: 'MACHU PICCHU',
    country: 'PERU',
    category: 'HISTORICAL EXPEDITION',
    tagline: 'Adventure is never far away',
    image: '/src/assets/images/machu_picchu_hero_1790456470973.jpg',
    duration: '7 Days',
    rating: 4.97,
    reviewCount: 384,
    altitude: '2,430 m',
    idealSeason: 'May – October',
    difficulty: 'Challenging',
    estimatedCost: '$1,480 / person',
    description: 'Traverse the ancient stone stairways of the Inca Empire through cloud forests and high alpine passes, culminating in dawn over the Sun Gate.',
    collaborators: [
      { name: 'Sofia Torres', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', role: 'Expedition Lead', status: 'editing' },
      { name: 'Liam Davies', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', role: 'Photographer', status: 'online' },
      { name: 'Aria Thorne', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', role: 'Gear Logistics', status: 'online' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Cusco Acclimatization & Sacred Valley',
        date: 'Day 1',
        summary: 'Gentle exploratory hike through Ollantaytambo ruins and high-altitude hydration prep.',
        distance: '6.4 km',
        elevationGain: '+320 m',
        items: [
          { time: '07:30', title: 'Espresso & Route Briefing in San Blas', description: 'Meet with mountain guides to inspect gear and calibrate GPS trackers.', category: 'culture', duration: '1h 30m', cost: 18, elevation: '3,400m' },
          { time: '10:00', title: 'Sacred Valley Terraces Exploration', description: 'Stroll ancient agricultural stone terraces and test elevation endurance.', category: 'scenic', duration: '3h', cost: 45, elevation: '2,800m' },
          { time: '14:30', title: 'Traditional Andean Earth Oven Feast', description: 'Pachamanca lunch prepared with local herbs, roasted tubers, and corn.', category: 'dining', duration: '2h', cost: 35 },
          { time: '18:00', title: 'Team Gear Check & Route Lock', description: 'Final pack weight balancing and satellite communicator test.', category: 'trek', duration: '1h 30m', cost: 0 },
        ]
      },
      {
        dayNumber: 2,
        title: 'Inca Trail — Dead Woman’s Pass Ascent',
        date: 'Day 2',
        summary: 'The iconic high ridge push through misty Polylepis dwarf forests up to 4,215m.',
        distance: '11.8 km',
        elevationGain: '+1,180 m',
        items: [
          { time: '05:30', title: 'Alpine Dawn Departure from Wayllabamba', description: 'Headlamps on through early morning highland mist along ancient stone steps.', category: 'trek', duration: '4h', cost: 0, elevation: '3,000m' },
          { time: '10:00', title: 'Dead Woman’s Pass Summit (Warmiwañusqa)', description: 'Spectacular 360° panoramas across Vilcabamba snow peaks.', category: 'scenic', duration: '1h', cost: 0, elevation: '4,215m' },
          { time: '13:00', title: 'Pacaymayo Glacial Stream Rest', description: 'High-energy trail lunch beside crystal runoff waterfalls.', category: 'dining', duration: '1h 30m', cost: 20, elevation: '3,600m' },
          { time: '16:30', title: 'Cloud Forest Eco-Camp Setup', description: 'Pitch ultralight tents under the starry southern constellation canopy.', category: 'camp', duration: '2h', cost: 65, elevation: '3,650m' },
        ]
      },
      {
        dayNumber: 3,
        title: 'Inti Punku Dawn & The Sacred Citadel',
        date: 'Day 3',
        summary: 'First light breaking over Huayna Picchu through the Sun Gate gateway.',
        distance: '8.2 km',
        elevationGain: '+240 m',
        items: [
          { time: '05:00', title: 'Inti Punku (Sun Gate) First Light', description: 'Watch the sunrise pierce through morning mist onto the citadel walls.', category: 'scenic', duration: '2h', cost: 75, elevation: '2,720m' },
          { time: '08:30', title: 'Private Citadel Architectural Deep-Dive', description: 'Explore Temple of the Sun, Intihuatana stone, and royal quarters.', category: 'culture', duration: '3h 30m', cost: 110, elevation: '2,430m' },
          { time: '13:30', title: 'Panoramic Lunch at Sanctuary Lodge', description: 'Gourmet Peruvian fusion overlooking cloud-swept valleys.', category: 'dining', duration: '2h', cost: 68 },
        ]
      }
    ]
  },
  {
    id: 'chamonix-france',
    title: 'CHAMONIX',
    country: 'FRANCE',
    category: 'ALPINE TRAIL',
    tagline: 'Let your dreams come true',
    image: '/src/assets/images/chamonix_france_hero_1790456484738.jpg',
    duration: '6 Days',
    rating: 4.95,
    reviewCount: 412,
    altitude: '3,842 m',
    idealSeason: 'June – September',
    difficulty: 'Expert',
    estimatedCost: '€1,820 / person',
    description: 'Climb into the cradle of mountaineering beneath Mont Blanc with glacial traverses, legendary high refuges, and sweeping granite vistas.',
    collaborators: [
      { name: 'Jean-Luc Vasseur', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', role: 'UIAGM Guide', status: 'online' },
      { name: 'Clara Moreau', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', role: 'Cartographer', status: 'editing' },
      { name: 'Felix Meyer', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80', role: 'Nutritionist', status: 'idle' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Aiguille du Midi & Grand Balcon Nord',
        date: 'Day 1',
        summary: 'Ascend to 3,842m on the world-famous cableway and traverse panoramic high balconies.',
        distance: '9.2 km',
        elevationGain: '+480 m',
        items: [
          { time: '08:00', title: 'Aiguille du Midi Glass Skywalk', description: 'Step into the Void suspended 1,000m above Chamonix valley.', category: 'scenic', duration: '2h', cost: 78, elevation: '3,842m' },
          { time: '11:00', title: 'Grand Balcon Traverse to Montenvers', description: 'Hike across granite boulder fields facing the Mer de Glace glacier.', category: 'trek', duration: '3h 30m', cost: 0, elevation: '2,200m' },
          { time: '15:30', title: 'Alpine Refuge Fondue & Route Planning', description: 'Savoyard cheese fondue and Crampon safety briefing.', category: 'dining', duration: '2h', cost: 42 },
        ]
      }
    ]
  },
  {
    id: 'mimisa-rocks',
    title: 'MIMISA ROCKS',
    country: 'AUSTRALIA',
    category: 'COASTAL WILDERNESS',
    tagline: 'A piece of heaven',
    image: '/src/assets/images/mimisa_rocks_hero_1790456496876.jpg',
    duration: '5 Days',
    rating: 4.92,
    reviewCount: 226,
    altitude: '45 m',
    idealSeason: 'September – April',
    difficulty: 'Moderate',
    estimatedCost: 'A$1,650 / person',
    description: 'Untamed oceanic coastlines with sculpted sea stacks, secluded tidal lagoons, and starry beach bivouacs along the Southern Ocean.',
    collaborators: [
      { name: 'Kylie Ward', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', role: 'Marine Biologist', status: 'online' },
      { name: 'Sam Gallagher', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80', role: 'Surfer & Pilot', status: 'editing' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Coastal Stack Sunset & Tidal Kayaking',
        date: 'Day 1',
        summary: 'Paddle through sea caves and pitch cliffside wilderness camp.',
        distance: '7.5 km',
        elevationGain: '+110 m',
        items: [
          { time: '09:00', title: 'Ocean Kayak Launch into Turquoise Coves', description: 'Guided sea kayak passage around volcanic stack formations.', category: 'trek', duration: '3h', cost: 85 },
          { time: '13:00', title: 'Bush BBQ & Kingfish Tasting', description: 'Freshly grilled catch prepared over native wood coals.', category: 'dining', duration: '1h 30m', cost: 45 },
          { time: '17:30', title: 'Golden Hour Stack Photography Session', description: 'Capture surging ocean spray illuminated by twilight rays.', category: 'scenic', duration: '2h', cost: 0 },
        ]
      }
    ]
  },
  {
    id: 'dolomites-italy',
    title: 'TRE CIME',
    country: 'ITALY',
    category: 'DOLOMITES PASS',
    tagline: 'Sculpted by titans',
    image: '/src/assets/images/dolomites_italy_hero_1790456508786.jpg',
    duration: '6 Days',
    rating: 4.98,
    reviewCount: 519,
    altitude: '2,999 m',
    idealSeason: 'June – October',
    difficulty: 'Challenging',
    estimatedCost: '€1,750 / person',
    description: 'Cathedral limestone peaks rising vertically over turquoise glacial lakes with classic Via Ferrata iron paths and cozy rifugios.',
    collaborators: [
      { name: 'Matteo Rossi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', role: 'Alpine Guide', status: 'online' },
      { name: 'Giulia Bianchi', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', role: 'Trail Photographer', status: 'editing' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Tre Cime di Lavaredo Loop & Rifugio Locatelli',
        date: 'Day 1',
        summary: 'The world-famous circuit around the three colossal dolomite towers.',
        distance: '10.4 km',
        elevationGain: '+520 m',
        items: [
          { time: '08:30', title: 'Rifugio Auronzo Trailhead Launch', description: 'Ascend the southeastern ridge with panoramic views into Cadore.', category: 'trek', duration: '2h 30m', cost: 0, elevation: '2,320m' },
          { time: '12:00', title: 'Tyrolean Lunch at Rifugio Locatelli', description: 'Handmade canederli and speck dumplings with Drei Zinnen view.', category: 'dining', duration: '1h 30m', cost: 32 },
          { time: '15:00', title: 'Via Ferrata Innerkofler Cave Route', description: 'WW1 tunnels carved straight through solid limestone ridges.', category: 'trek', duration: '3h', cost: 65, elevation: '2,740m' },
        ]
      }
    ]
  },
  {
    id: 'kyoto-japan',
    title: 'ARASHIYAMA',
    country: 'JAPAN',
    category: 'CULTURAL SANCTUARY',
    tagline: 'Silent paths of reflection',
    image: '/src/assets/images/kyoto_japan_hero_1790456521006.jpg',
    duration: '6 Days',
    rating: 4.96,
    reviewCount: 341,
    altitude: '380 m',
    idealSeason: 'Year-round',
    difficulty: 'Accessible',
    estimatedCost: '¥195,000 / person',
    description: 'Wander through ancient bamboo groves, moss gardens, and mountain monasteries with evening tea ceremonies and artisan workshops.',
    collaborators: [
      { name: 'Kenji Sato', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', role: 'Cultural Historian', status: 'online' },
      { name: 'Emi Tanaka', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', role: 'Tea Master & Host', status: 'editing' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Bamboo Forest Dawn & Tenryu-ji Gardens',
        date: 'Day 1',
        summary: 'Early morning quiet solitude before the temple bells chime.',
        distance: '5.2 km',
        elevationGain: '+90 m',
        items: [
          { time: '06:00', title: 'Silent Bamboo Grove Walk', description: 'Experience the soft morning rustle and gentle fog between green culms.', category: 'scenic', duration: '1h 30m', cost: 0 },
          { time: '08:30', title: 'Zen Meditation at Tenryu-ji', description: 'Guided seated meditation overlooking 14th-century pond garden.', category: 'culture', duration: '2h', cost: 25 },
          { time: '12:00', title: 'Shojin Ryori Buddhist Kaiseki', description: 'Seasonal plant-based culinary art served on lacquerware.', category: 'dining', duration: '2h', cost: 55 },
        ]
      }
    ]
  }
];
