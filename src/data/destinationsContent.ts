import image2s from '../assets/2s.jpg'
import image6s from '../assets/6s.jpg'
import image7s from '../assets/7s.jpg'
import image8s from '../assets/8s.jpg'
import jebelHafeetImg from '../assets/jebel_hafeet.png'
import liwaDesertImg from '../assets/liwa_desert.png'
import hattaMountainsImg from '../assets/hatta_mountains.png'
import alQudraLakesImg from '../assets/al_qudra_lakes.png'

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
    image: image2s,
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
    description: 'Peaceful mornings and bird watching right outside your RV door at the lake\'s edge in the heart of the desert.',
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
    id: 'sir-bani-yas',
    title: 'Sir Bani Yas Island',
    description: 'A unique wildlife sanctuary offering exotic camping spots and breathtaking natural beauty.',
    image: image8s,
    category: 'Camping Spots'
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
