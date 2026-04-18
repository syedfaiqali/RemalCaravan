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
    id: 'abu-dhabi',
    title: 'Abu Dhabi',
    description: 'Experience the serene beach camping and luxury island retreats in the capital.',
    image: abuDhabiImg,
    category: 'Beaches'
  },
  {
    id: 'ajman',
    title: 'Ajman',
    description: 'A peaceful retreat perfect for coastal camping and exploring pristine mangrove forests.',
    image: ajmanImg,
    category: 'Beaches'
  },
  {
    id: 'al-ain',
    title: 'Al Ain',
    description: 'Camp at the foot of the majestic mountains and enjoy the lush oasis city landscape.',
    image: alAinImg,
    category: 'Mountains'
  },
  {
    id: 'hatta',
    title: 'Hatta',
    description: 'Explore the rugged mountain peaks and turquoise dam views in the heart of the Hajar mountains.',
    image: hattaImg,
    category: 'Mountains'
  },
  {
    id: 'liwa',
    title: 'Liwa',
    description: 'Experience the ultimate desert adventure among the tallest dunes in the Empty Quarter.',
    image: liwaImg,
    category: 'Desert'
  },
  {
    id: 'sharjah',
    title: 'Sharjah',
    description: 'Discover the cultural heart of the UAE with unique desert and mangrove camping spots.',
    image: sharjahImg,
    category: 'Desert'
  },
  {
    id: 'dubai',
    title: 'Dubai',
    description: 'Enjoy lakefront camping at Al Qudra or desert escapes on the outskirts of the city.',
    image: dubaiCampingImg,
    category: 'Lakes'
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
