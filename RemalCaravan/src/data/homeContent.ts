import image1s from '../assets/1s.jpg'
import image2s from '../assets/2s.jpg'
import image3s from '../assets/3s.jpg'
import image4s from '../assets/4s.jpg'
import image5s from '../assets/5s.jpg'
import image6s from '../assets/6s.jpg'
import image7s from '../assets/7s.jpg'
import image8s from '../assets/8s.jpg'
import image9s from '../assets/9s.jpg'
import image1b from '../assets/1b.jpg'
import image2b from '../assets/2b.jpg'
import image3b from '../assets/3b.jpg'
import image4b from '../assets/4b.jpg'

export interface DestinationItem {
  name: string
  image: string
}

export const caravanForYouImages = [image1b, image2b]

export const recommendedDestinations: DestinationItem[] = [
  { name: 'Hunza Valley', image: image4s },
  { name: 'Skardu', image: image3s },
  { name: 'Swat Valley', image: image2s },
  { name: 'Neelum Valley', image: image1s },
  { name: 'Lahore', image: image5s },
  { name: 'Fairy Meadows', image: image6s },
]

export const popularDestinations: DestinationItem[] = [
  { name: 'Neelum Valley', image: image1s },
  { name: 'Swat Valley', image: image2s },
  { name: 'Skardu', image: image3s },
  { name: 'Hunza Valley', image: image4s },
]

export const aboutPreviewImages = {
  main: image3b,
  gallery: [image7s, image8s, image9s],
}

export const experienceBannerImage = image4b
