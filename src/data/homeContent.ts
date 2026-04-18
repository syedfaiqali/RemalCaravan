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

import abuDhabiImg from '../assets/abu_dhabi_skyline.webp'
import dubaiImg from '../assets/dubai_skyline.webp'
import sharjahImg from '../assets/sharjah_view.webp'
import jebelHafeet from '../assets/jebel_hafeet.webp'
import liwaDesert from '../assets/liwa_desert.webp'
import hattaMountains from '../assets/hatta_mountains.webp'
import alQudraLakes from '../assets/al_qudra_lakes.webp'

export interface DestinationItem {
  name: string
  image: string
}

export const caravanForYouImages = [image1b, image2b]

export const recommendedDestinations: DestinationItem[] = [
  { name: 'Jebel Hafeet', image: jebelHafeet },
  { name: 'Liwa Desert', image: liwaDesert },
  { name: 'Hatta Mountains', image: hattaMountains },
  { name: 'Al Qudra Lakes', image: alQudraLakes },
  { name: 'Saadiyat Beach', image: image5s },
  { name: 'Dubai Marina', image: image6s },
]

export const popularDestinations: DestinationItem[] = [
  { name: 'Abu Dhabi', image: abuDhabiImg },
  { name: 'Ajman', image: hattaMountains },
  { name: 'Al Ain', image: jebelHafeet },
  { name: 'Hatta', image: hattaMountains },
  { name: 'Liwa', image: liwaDesert },
  { name: 'Sharjah', image: sharjahImg },
  { name: 'Dubai', image: dubaiImg },
]

export const aboutPreviewImages = {
  main: image3b,
  gallery: [image7s, image8s, image9s],
}

export const experienceBannerImage = image4b
