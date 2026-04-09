import image1s from '../assets/For Rent 5/1.jpg'
import image2s from '../assets/For Rent 6/1.jpeg'
import image3s from '../assets/For Rent 7/1.jpeg'
import image4s from '../assets/For Rent 8/1.jpeg'
import image5s from '../assets/WhatsApp Image 2026-03-08 at 8.22.50 AM.jpeg'
import image6s from '../assets/WhatsApp Image 2026-03-08 at 8.22.51 AM.jpeg'
import image7s from '../assets/WhatsApp Image 2026-03-08 at 8.22.52 AM.jpeg'
import image8s from '../assets/WhatsApp Image 2026-03-08 at 8.22.54 AM.jpeg'
import image9s from '../assets/WhatsApp Image 2026-03-08 at 8.22.56 AM.jpeg'
import image1b from '../assets/WhatsApp Image 2026-03-08 at 8.23.10 AM.jpeg'
import image2b from '../assets/For Rent 1/1.jpg'
import image3b from '../assets/For Rent 2/1.jpg'
import image4b from '../assets/For Rent 3/1.jpg'

import jebelHafeet from '../assets/jebel_hafeet.png'
import liwaDesert from '../assets/liwa_desert.png'
import hattaMountains from '../assets/hatta_mountains.png'
import alQudraLakes from '../assets/al_qudra_lakes.png'

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
  { name: 'Jebel Hafeet', image: jebelHafeet },
  { name: 'Hatta Mountains', image: hattaMountains },
  { name: 'Liwa Desert', image: liwaDesert },
  { name: 'Al Qudra Lakes', image: alQudraLakes },
]

export const aboutPreviewImages = {
  main: image3b,
  gallery: [image7s, image8s, image9s],
}

export const experienceBannerImage = image4b
