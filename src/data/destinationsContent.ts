import alAinImg from '../assets/camping/AL_AIN_CAMPING_SITES_MOTOR_HOME_2.jpeg'
import abuDhabiImg from '../assets/camping/Abu_dhabi_camping_sites__14.jpeg'
import liwaImg from '../assets/camping/Liwa_camping_site__2.jpeg'
import hattaImg from '../assets/camping/Hatta_Camping_Spots_for_Motorhomes_13.jpeg'
import sharjahImg from '../assets/camping/Sharjah_camping_site__7.jpeg'
import ajmanImg from '../assets/camping/Ajman_Camping_Sites_motor_home_5.jpeg'
import dubaiCampingImg from '../assets/camping/uae_camping_sites_1.jpeg'

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
    image: alAinImg,
    category: 'Mountains'
  },
  {
    id: 'saadiyat-beach',
    title: 'Saadiyat Beach',
    description: 'Park your RV by the shore and wake up to the sound of crashing waves and golden sands in Abu Dhabi.',
    image: abuDhabiImg,
    category: 'Beaches'
  },
  {
    id: 'liwa-desert',
    title: 'Liwa Desert',
    description: 'Discover the stark beauty of the dunes and camp under a canopy of endless stars in the Empty Quarter.',
    image: liwaImg,
    category: 'Desert'
  },
  {
    id: 'hatta-mountains',
    title: 'Hatta Mountains',
    description: 'For the bold explorers seeking steep climbs and high-altitude base camps with stunning turquoise pools.',
    image: hattaImg,
    category: 'Mountains'
  },
  {
    id: 'kalba-forest',
    title: 'Kalba Mangroves',
    description: 'Get lost in the serene mangrove forests and reconnect with nature in this biodiverse sanctuary.',
    image: sharjahImg,
    category: 'Forests'
  },
  {
    id: 'ajman-beach',
    title: 'Ajman Beach',
    description: 'Relax on the pristine white sands of Ajman, a peaceful retreat perfect for beachside camping.',
    image: ajmanImg,
    category: 'Beaches'
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
