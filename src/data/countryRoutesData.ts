import { TimelineCity } from './japanTourData';
import machuPicchuImg from '@/src/assets/images/machu_picchu_hero_1790456470973.jpg';
import chamonixImg from '@/src/assets/images/chamonix_france_hero_1790456484738.jpg';
import mimosaRocksImg from '@/src/assets/images/mimisa_rocks_hero_1790456496876.jpg';
import dolomitesImg from '@/src/assets/images/dolomites_italy_hero_1790456508786.jpg';
import japanHeroBg from '@/src/assets/images/japan_hero_bg_1790465455426.jpg';
import kyotoThumb from '@/src/assets/images/kyoto_japan_hero_1790456521006.jpg';
import osakaCastleThumb from '@/src/assets/images/osaka_castle_thumb_1790465487052.jpg';
import tokyoNeonAlley from '@/src/assets/images/tokyo_neon_alley_1790465499670.jpg';
import pagodaFujiSakura from '@/src/assets/images/pagoda_fuji_sakura_1790465473618.jpg';

export interface CountryTourRoute {
  countryId: string;
  countryName: string;
  badge: string;
  title: string;
  summary: string;
  subDescription: string;
  stages: TimelineCity[];
}

export const COUNTRY_ROUTES: Record<string, CountryTourRoute> = {
  japan: {
    countryId: 'japan',
    countryName: 'Japan',
    badge: '🌸 The Master Sakura Route',
    title: '10-Day Golden Triangle Expedition',
    summary: "We've planned a simple and convenient 10-day itinerary for your trip to Japan. You'll visit three legendary cities: Osaka, Kyoto, and Tokyo.",
    subDescription: "No need to worry about routes, schedules, or finding places — everything is already organized. We'll show you where to go, what to see, and where to eat, so you can simply enjoy the journey.",
    stages: [
      {
        id: 'osaka',
        city: 'Osaka',
        days: 'Days 1–3',
        tag: 'Street Food & Feudal Castles',
        description: 'Arrive at Kansai International. Experience Osaka Castle gardens followed by culinary night walks in Dotonbori.',
        images: [
          { url: osakaCastleThumb, caption: 'Osaka Castle & Sakura Moat' },
          { url: tokyoNeonAlley, caption: 'Dotonbori Street Food' },
        ],
        highlights: ['Osaka Castle Park', 'Kuromon Market', 'Dotonbori Neon Safari', 'Shinsekai Kushikatsu'],
        weather: '18°C / Mild spring breeze',
        transit: 'Private van from KIX + Osaka Metro',
      },
      {
        id: 'kyoto',
        city: 'Kyoto',
        days: 'Days 4–6',
        tag: 'Zen Temples & Geisha Districts',
        description: 'Walk through 10,000 orange Torii gates at dawn, stroll Arashiyama bamboo groves, and savor Kaiseki banquets.',
        images: [
          { url: kyotoThumb, caption: 'Arashiyama Bamboo & Gion' },
          { url: pagodaFujiSakura, caption: 'Traditional Pagoda & Gardens' },
        ],
        highlights: ['Fushimi Inari Taisha', 'Sagano Bamboo Forest', 'Kinkaku-ji', 'Gion Evening Lantern Stroll'],
        weather: '16°C / Crisp morning mist',
        transit: 'Shinkansen Nozomi bullet train',
      },
      {
        id: 'tokyo',
        city: 'Tokyo',
        days: 'Days 7–10',
        tag: 'Futuristic Metropolis & Mount Fuji',
        description: 'Glide past Mount Fuji on bullet trains into Tokyo. Modern Shibuya scramble, Meiji Jingu, and teamLab digital art.',
        images: [
          { url: tokyoNeonAlley, caption: 'Shinjuku Omoide Yokocho' },
          { url: japanHeroBg, caption: 'Mount Fuji Day Trip' },
        ],
        highlights: ['Shibuya Sky Rooftop Deck', 'Senso-ji Asakusa', 'Chureito Pagoda Fuji View', 'Ginza & Akihabara'],
        weather: '19°C / Sunny spring afternoons',
        transit: 'JR Yamanote Line & Tokyo 72h pass',
      },
    ],
  },
  peru: {
    countryId: 'peru',
    countryName: 'Peru',
    badge: '🏔️ Ancient Inca Trail Route',
    title: '7-Day High Andes & Sun Gate Trek',
    summary: "Traverse high alpine valleys and mystical stone ruins carved through cloud forests, culminating in dawn over the Lost Citadel of the Incas.",
    subDescription: "With certified UIAGM and native Quechua trail masters, your porter permits, oxygen saturation checks, and private Andean earth oven banquets are handled with precision.",
    stages: [
      {
        id: 'cusco',
        city: 'Cusco & Sacred Valley',
        days: 'Days 1–2',
        tag: 'High Altitude Acclimatization',
        description: 'Explore ancient cobblestone plazas in San Blas and Ollantaytambo terraces with guided hydration prep.',
        images: [
          { url: machuPicchuImg, caption: 'Sacred Valley Stone Terraces' },
          { url: machuPicchuImg, caption: 'Ollantaytambo Feudal Ruins' },
        ],
        highlights: ['San Blas Artisan Quarter', 'Ollantaytambo Sun Temple', 'Traditional Pachamanca Lunch', 'Altitude Acclimatization'],
        weather: '15°C / Crisp alpine air',
        transit: 'Private 4x4 highland shuttle',
      },
      {
        id: 'inca-trail',
        city: 'Dead Woman’s Pass',
        days: 'Days 3–5',
        tag: 'Alpine Ridge & Polylepis Forest',
        description: 'Ascend stone stairways to 4,215m across Warmiwañusqa pass with 360° panoramas over snowbound Vilcabamba ranges.',
        images: [
          { url: machuPicchuImg, caption: 'Warmiwañusqa Summit View' },
          { url: machuPicchuImg, caption: 'Cloud Forest High Camp' },
        ],
        highlights: ['Warmiwañusqa Pass (4,215m)', 'Runkurakay Circular Ruins', 'Phuyupatamarca Cloud Camp', 'Starry Southern Cross Canopy'],
        weather: '8°C / Cool starry night',
        transit: 'Guided alpine trekking route',
      },
      {
        id: 'machu-picchu',
        city: 'Machu Picchu Citadel',
        days: 'Days 6–7',
        tag: 'Inti Punku First Light',
        description: 'Enter the citadel through the Sun Gate as morning light pierces the mist over Huayna Picchu peaks.',
        images: [
          { url: machuPicchuImg, caption: 'Inti Punku Sun Gate Dawn' },
          { url: machuPicchuImg, caption: 'Citadel Temples & Terraces' },
        ],
        highlights: ['Sun Gate Dawn Entry', 'Temple of the Three Windows', 'Huayna Picchu Peak Ascent', 'Vistadome Scenic Train Return'],
        weather: '19°C / Warm valley morning',
        transit: 'Inca Rail Vistadome Glass Train',
      },
    ],
  },
  france: {
    countryId: 'france',
    countryName: 'France',
    badge: '❄️ Cradle of Mountaineering',
    title: '6-Day Mont Blanc & Haute-Savoie Traverse',
    summary: "Climb into the legendary granite needles and high glacial valleys of Chamonix, following paths blazed by the pioneers of alpinism.",
    subDescription: "Enjoy private cableway access, crampon safety sessions on the Mer de Glace, and cozy evenings savoring Savoyard cheese fondue in mountain refuges.",
    stages: [
      {
        id: 'chamonix-valley',
        city: 'Chamonix Town',
        days: 'Days 1–2',
        tag: 'Alpine Basecamp & Acclimatization',
        description: 'Stroll the historic mountaineering capital and ride the Montenvers red cogwheel train to Mer de Glace.',
        images: [
          { url: chamonixImg, caption: 'Chamonix Valley & Needles' },
          { url: chamonixImg, caption: 'Montenvers Historic Train' },
        ],
        highlights: ['Chamonix Alpine Museum', 'Mer de Glace Ice Cave', 'Savoyard Fondue Dinner', 'Glacier Crampon Workshop'],
        weather: '17°C / Fresh mountain breeze',
        transit: 'Montenvers Mountain Cog Railway',
      },
      {
        id: 'aiguille-midi',
        city: 'Aiguille du Midi',
        days: 'Days 3–4',
        tag: 'Step into the Void (3,842m)',
        description: 'World-famous cableway ascent into the high alpine zone facing Mont Blanc and the Vallée Blanche.',
        images: [
          { url: chamonixImg, caption: 'Aiguille du Midi Glass Skywalk' },
          { url: chamonixImg, caption: 'Mont Blanc Summit Panorama' },
        ],
        highlights: ['Step into the Void Glass Box', 'Cosmiques Alpine Ridge', 'Grand Balcon Nord Trail', 'Glacier Moraine Walk'],
        weather: '-2°C / High altitude sun',
        transit: 'High-speed telepherique cable car',
      },
      {
        id: 'lac-blanc',
        city: 'Lac Blanc & High Refuges',
        days: 'Days 5–6',
        tag: 'Refugio Nights & Emerald Lakes',
        description: 'Trek to the pristine waters of Lac Blanc reflecting the entire Mont Blanc massif at golden hour.',
        images: [
          { url: chamonixImg, caption: 'Lac Blanc Mirror Reflection' },
          { url: chamonixImg, caption: 'Sunset over Aiguilles Rouges' },
        ],
        highlights: ['Lac Blanc High Alpine Tarn', 'Alpine Ibex & Chamois Sightings', 'Refuge du Lac Blanc Dinner', 'Sunset Valley Descent'],
        weather: '12°C / Crisp twilight air',
        transit: 'Scenic alpine trail route',
      },
    ],
  },
  italy: {
    countryId: 'italy',
    countryName: 'Italy',
    badge: '⛰️ Dolomites UNESCO World Heritage',
    title: '6-Day Tre Cime di Lavaredo & Via Ferrata',
    summary: "Walk among colossal cathedral limestone towers and turquoise glacial tarns in South Tyrol’s most dramatic mountain park.",
    subDescription: "Traverse WW1 historic cave tunnels, stay in celebrated mountain rifugios, and savor handmade Tyrolean canederli and local wines.",
    stages: [
      {
        id: 'cortina',
        city: 'Cortina d’Ampezzo',
        days: 'Days 1–2',
        tag: 'Queen of the Dolomites',
        description: 'Arrive in Cortina, check into boutique alpine chalets, and hike the crystal waters of Lake Misurina.',
        images: [
          { url: dolomitesImg, caption: 'Lake Misurina Alpine Tarn' },
          { url: dolomitesImg, caption: 'Cortina Valley Vistas' },
        ],
        highlights: ['Lake Misurina Stroll', 'Cortina Corso Italia', 'Cadore Alpine Tasting', 'Via Ferrata Gear Prep'],
        weather: '18°C / Warm alpine sun',
        transit: 'Private Dolomite shuttle van',
      },
      {
        id: 'tre-cime',
        city: 'Tre Cime di Lavaredo',
        days: 'Days 3–4',
        tag: 'Three Colossal Limestone Towers',
        description: 'Classic circuit hike around the Drei Zinnen monoliths with overnight stay at historic Rifugio Locatelli.',
        images: [
          { url: dolomitesImg, caption: 'Drei Zinnen North Faces' },
          { url: dolomitesImg, caption: 'Rifugio Locatelli at Sunset' },
        ],
        highlights: ['Rifugio Auronzo Trailhead', 'Paternsattel Ridge Viewpoint', 'Drei Zinnen High Plateau', 'Sunset over Dolomite Peaks'],
        weather: '14°C / Cool afternoon breeze',
        transit: 'Trekker trail with rifugio stops',
      },
      {
        id: 'innerkofler',
        city: 'Via Ferrata Innerkofler',
        days: 'Days 5–6',
        tag: 'Historic Rock Tunnels & Peaks',
        description: 'Ascend Mount Paterno via historical tunnels and iron cable rungs offering sheer vertical panoramas.',
        images: [
          { url: dolomitesImg, caption: 'Mount Paterno Ridge Traverse' },
          { url: dolomitesImg, caption: 'Historic Rock Gallery Windows' },
        ],
        highlights: ['WW1 Cliff Gallery Windows', 'Monte Paterno Summit Cross', 'Bosi Open-Air Museum', 'Tyrolean Farewell Feast'],
        weather: '16°C / Crisp clear skies',
        transit: 'Iron rung Via Ferrata route',
      },
    ],
  },
  australia: {
    countryId: 'australia',
    countryName: 'Australia',
    badge: '🌊 Untamed Southern Ocean',
    title: '5-Day Mimosa Rocks & Wilderness Coast',
    summary: "Discover dramatic volcanic sea stacks, turquoise lagoons, and secluded beaches where native wildlife roams free.",
    subDescription: "Paddle tidal sea caves in ocean kayaks, photograph sea spray glistening in golden hour light, and sleep in safari camps under the stars.",
    stages: [
      {
        id: 'sapphire-coast',
        city: 'Bermagui & Sapphire Coast',
        days: 'Days 1–2',
        tag: 'Ocean Base & Wild Lagoons',
        description: 'Arrive at the Sapphire Coast, sample freshly shucked rock oysters, and explore tidal rock pools.',
        images: [
          { url: mimosaRocksImg, caption: 'Bermagui Blue Pool' },
          { url: mimosaRocksImg, caption: 'Tidal Lagoon Channels' },
        ],
        highlights: ['Blue Pool Natural Ocean Baths', 'Local Rock Oyster Tasting', 'Camel Rock Sunset Stroll', 'Marine Sanctuary Briefing'],
        weather: '22°C / Warm ocean breeze',
        transit: 'Scenic coastal 4WD vehicle',
      },
      {
        id: 'mimosa-stacks',
        city: 'Mimosa Rocks Sea Stacks',
        days: 'Days 3–4',
        tag: 'Volcanic Formations & Kayaking',
        description: 'Launch sea kayaks around towering sea stacks into turquoise coves inhabited by seals and dolphins.',
        images: [
          { url: mimosaRocksImg, caption: 'Surging Ocean Sea Stacks' },
          { url: mimosaRocksImg, caption: 'Sea Kayak Coastal Passage' },
        ],
        highlights: ['Tidal Sea Cave Kayak Route', 'Fur Seal Colony Observation', 'Golden Hour Stack Photography', 'Beachside Bush Camp BBQ'],
        weather: '20°C / Sunny coastal morning',
        transit: 'Tidal kayak & beach trekking',
      },
      {
        id: 'aragunnu',
        city: 'Aragunnu & Sea Cliffs',
        days: 'Day 5',
        tag: 'Deserted Shingle Beaches',
        description: 'Walk ancient coastal boardwalks through spotted gum forests down to untouched pebble beaches.',
        images: [
          { url: mimosaRocksImg, caption: 'Aragunnu Shingle Beach' },
          { url: mimosaRocksImg, caption: 'Spotted Gum Coastal Forest' },
        ],
        highlights: ['Aboriginal Shell Midden Site', 'Spotted Gum Canopy Walk', 'Pristine Snorkeling Waters', 'Farewell Oceanfront Dinner'],
        weather: '23°C / Clear sunny day',
        transit: 'Coastal trail & return transfer',
      },
    ],
  },
};
