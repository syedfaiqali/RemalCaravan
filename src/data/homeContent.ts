// import image1s from '../assets/For Rent 5/1.webp'
// import image2s from '../assets/For Rent 6/1.webp'
// import image3s from '../assets/For Rent 7/1.webp'
// import image4s from '../assets/For Rent 8/1.webp'
import image5s from '../assets/WhatsApp Image 2026-03-08 at 8.22.50 AM.webp'
import image6s from '../assets/WhatsApp Image 2026-03-08 at 8.22.51 AM.webp'
import image7s from '../assets/WhatsApp Image 2026-03-08 at 8.22.52 AM.webp'
import image8s from '../assets/WhatsApp Image 2026-03-08 at 8.22.54 AM.webp'
import image9s from '../assets/WhatsApp Image 2026-03-08 at 8.22.56 AM.webp'
import image1b from '../assets/WhatsApp Image 2026-03-08 at 8.23.10 AM.webp'
import image2b from '../assets/For Rent 1/1.webp'
import image3b from '../assets/For Rent 2/1.webp'
import image4b from '../assets/For Rent 3/1.webp'

import alAinImg from '../assets/camping/AL_AIN_CAMPING_SITES_MOTOR_HOME_2.jpeg'
import abuDhabiImg from '../assets/camping/Abu_dhabi_camping_sites__14.jpeg'
import liwaImg from '../assets/camping/Liwa_camping_site__2.jpeg'
import hattaImg from '../assets/camping/Hatta_Camping_Spots_for_Motorhomes_13.jpeg'
import sharjahImg from '../assets/camping/Sharjah_camping_site__7.jpeg'
import ajmanImg from '../assets/camping/Ajman_Camping_Sites_motor_home_5.jpeg'
import dubaiCampingImg from '../assets/camping/uae_camping_sites_1.jpeg'

export interface DestinationItem {
  name: string
  image: string
}

export const caravanForYouImages = [image1b, image2b]

export const recommendedDestinations: DestinationItem[] = [
  { name: 'Jebel Hafeet', image: alAinImg },
  { name: 'Liwa Desert', image: liwaImg },
  { name: 'Hatta Mountains', image: hattaImg },
  { name: 'Al Qudra Lakes', image: dubaiCampingImg },
  { name: 'Saadiyat Beach', image: abuDhabiImg },
  { name: 'Sharjah City', image: sharjahImg },
]

export const popularDestinations: DestinationItem[] = [
  { name: 'Abu Dhabi', image: abuDhabiImg },
  { name: 'Ajman', image: ajmanImg },
  { name: 'Al Ain', image: alAinImg },
  { name: 'Hatta', image: hattaImg },
  { name: 'Liwa', image: liwaImg },
  { name: 'Sharjah', image: sharjahImg },
  { name: 'Dubai', image: dubaiCampingImg },
]

export const aboutPreviewImages = {
  main: image3b,
  gallery: [image7s, image8s, image9s],
}

export const experienceBannerImage = image4b
