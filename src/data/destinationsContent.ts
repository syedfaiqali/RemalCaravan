import image6s from '../assets/WhatsApp Image 2026-03-08 at 8.22.51 AM.webp'
import image7s from '../assets/WhatsApp Image 2026-03-08 at 8.22.52 AM.webp'
import image8s from '../assets/WhatsApp Image 2026-03-08 at 8.22.54 AM.webp'

import jebelHafeetImg from '../assets/jebel_hafeet.webp'
import liwaDesertImg from '../assets/liwa_desert.webp'
import hattaMountainsImg from '../assets/hatta_mountains.webp'
import alQudraLakesImg from '../assets/al_qudra_lakes.webp'

import saadiyatBeachImg from '../assets/saadiyat_beach.webp'

export interface Destination {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export const destinations: Destination[] = [
  {
    id: 'jebel-hafeet',
    title: 'Jebel Hafeet',
    description: 'Experience the crisp mountain air and panoramic views of the high altitude retreats in Al Ain.',
    image: jebelHafeetImg,
    category: 'Mountains'
  },
  {
    id: 'saadiyat-beach',
    title: 'Saadiyat Beach',
    description: 'Park your RV by the shore and wake up to the sound of crashing waves and golden sands in Abu Dhabi.',
    image: saadiyatBeachImg,
    category: 'Beaches'
  },
  {
    id: 'liwa-desert',
    title: 'Liwa Desert',
    description: 'Discover the stark beauty of the dunes and camp under a canopy of endless stars in the Empty Quarter.',
    image: liwaDesertImg,
    category: 'Desert'
  },
  {
    id: 'hatta-mountains',
    title: 'Hatta Mountains',
    description: 'For the bold explorers seeking steep climbs and high-altitude base camps with stunning turquoise pools.',
    image: hattaMountainsImg,
    category: 'Mountains'
  },
  {
    id: 'al-qudra-lakes',
    title: 'Al Qudra Lakes',
    description: 'Peaceful mornings and bird watching right outside your RV door at the lake\'s edge in Dubai.',
    image: alQudraLakesImg,
    category: 'Lakes'
  },
  {
    id: 'kalba-forest',
    title: 'Kalba Mangroves',
    description: 'Get lost in the serene mangrove forests and reconnect with nature in this biodiverse sanctuary.',
    image: image6s,
    category: 'Forests'
  },
  {
    id: 'dubai-marina',
    title: 'Dubai Marina',
    description: 'Experience the glitz and glamour of the city skyline from the comfort of your luxury mobile home.',
    image: image7s,
    category: 'Cities'
  },
  {
    id: 'jebel-jais',
    title: 'Jebel Jais',
    description: 'The highest peak in the UAE, offering thrilling drives and spectacular mountain camping experiences.',
    image: image8s,
    category: 'Mountains'
  }
]

export const destinationCategories = [
  'All Spots',
  'Mountains',
  'Beaches',
  'Forests',
  'Lakes',
  'Cities',
  'Desert',
  'Camping Spots'
]
