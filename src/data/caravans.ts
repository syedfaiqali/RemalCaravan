import image1b from '../assets/WhatsApp Image 2026-03-08 at 8.23.10 AM.jpeg'
import image2b from '../assets/For Rent 1/1.jpg'
import image3b from '../assets/For Rent 2/1.jpg'
import image4b from '../assets/For Rent 3/1.jpg'
import image5b from '../assets/For Rent 4/1.jpg'
import image1s from '../assets/For Rent 1/2.jpg'
import image2s from '../assets/For Rent 1/3.jpg'
import image3s from '../assets/For Rent 1/4.jpg'
import image4s from '../assets/For Rent 2/2.jpg'
import image5s from '../assets/For Rent 2/3.jpg'
import image6s from '../assets/For Rent 2/4.jpg'
import image7s from '../assets/For Rent 3/2.jpg'
import image8s from '../assets/For Rent 3/3.jpg'
import image9s from '../assets/For Rent 3/4.jpg'
import image10s from '../assets/For Rent 4/2.jpg'


export interface CaravanSpec {
  label: string
  value: string
}

export interface CaravanItem {
  id: string
  title: string
  description: string
  image: string
  gallery: string[]
  pricePerDay: string
  sleeps: string
  quickSpecs: string[]
  specs: CaravanSpec[]
}

export const featuredCaravans: CaravanItem[] = [
  {
    id: 'remal-voyager',
    title: 'Remal Voyager',
    description: 'Stylish interior with lounge seating and practical kitchen setup.',
    image: image1b,
    gallery: [image1b, image1s, image2s, image3s],
    pricePerDay: 'AED 1,200/day',
    sleeps: 'Sleeps 4',
    quickSpecs: ['Automatic', 'Kitchenette', 'AC'],
    specs: [
      { label: 'Length', value: '20 ft' },
      { label: 'Berths', value: '4 persons' },
      { label: 'Toilet', value: 'Portable' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'AC', value: 'Yes' },
      { label: 'Transmission', value: 'Automatic' },
    ],
  },
  {
    id: 'remal-explorer',
    title: 'Remal Explorer',
    description: 'Balanced comfort and mobility for long roads and short escapes.',
    image: image2b,
    gallery: [image2b, image4s, image5s, image6s],
    pricePerDay: 'AED 1,500/day',
    sleeps: 'Sleeps 5',
    quickSpecs: ['Family Friendly', 'Rear Camera', 'AC'],
    specs: [
      { label: 'Length', value: '22 ft' },
      { label: 'Berths', value: '5 persons' },
      { label: 'Toilet', value: 'Built-in' },
      { label: 'Kitchen', value: '2 burner + sink' },
      { label: 'Solar', value: '120W' },
      { label: 'Transmission', value: 'Automatic' },
    ],
  },
  {
    id: 'remal-signature',
    title: 'Remal Signature',
    description: 'Premium fit-out with expanded storage and upgraded amenities.',
    image: image3b,
    gallery: [image3b, image7s, image8s, image9s],
    pricePerDay: 'AED 1,800/day',
    sleeps: 'Sleeps 6',
    quickSpecs: ['Premium Interior', 'Large Storage', 'AC'],
    specs: [
      { label: 'Length', value: '24 ft' },
      { label: 'Berths', value: '6 persons' },
      { label: 'Shower', value: 'Indoor' },
      { label: 'Fridge', value: '90L' },
      { label: 'Awning', value: 'Manual' },
      { label: 'Transmission', value: 'Automatic' },
    ],
  },
  {
    id: 'remal-signature',
    title: 'Remal Signature',
    description: 'Premium fit-out with expanded storage and upgraded amenities.',
    image: image3b,
    gallery: [image3b, image7s, image8s, image9s],
    pricePerDay: 'AED 1,800/day',
    sleeps: 'Sleeps 6',
    quickSpecs: ['Premium Interior', 'Large Storage', 'AC'],
    specs: [
      { label: 'Length', value: '24 ft' },
      { label: 'Berths', value: '6 persons' },
      { label: 'Shower', value: 'Indoor' },
      { label: 'Fridge', value: '90L' },
      { label: 'Awning', value: 'Manual' },
      { label: 'Transmission', value: 'Automatic' },
    ],
  },
]

export const premiumCaravans: CaravanItem[] = [
  ...featuredCaravans,
  {
    id: 'remal-family-max',
    title: 'Remal Family Max',
    description: 'Ideal for bigger groups with improved sleeping and dining space.',
    image: image4b,
    gallery: [image4b, image10s, image4s, image2s],
    pricePerDay: 'AED 2,200/day',
    sleeps: 'Sleeps 6',
    quickSpecs: ['6 Berths', 'Dining Booth', 'USB Ports'],
    specs: [
      { label: 'Length', value: '25 ft' },
      { label: 'Berths', value: '6 persons' },
      { label: 'Kitchen', value: '3 burner + microwave' },
      { label: 'Power', value: '220V shore power' },
      { label: 'Fridge', value: '110L' },
      { label: 'Storage', value: 'Extra rear storage' },
    ],
  },
  {
    id: 'remal-lux-cruise',
    title: 'Remal Lux Cruise',
    description: 'Flagship experience with refined design and premium finishes.',
    image: image5b,
    gallery: [image5b, image1s, image6s, image10s],
    pricePerDay: 'AED 2,800/day',
    sleeps: 'Sleeps 7',
    quickSpecs: ['Luxury Line', 'Smart TV', 'Shower Cabin'],
    specs: [
      { label: 'Length', value: '27 ft' },
      { label: 'Berths', value: '7 persons' },
      { label: 'Bathroom', value: 'Full wet bath' },
      { label: 'Water Tank', value: '110L fresh' },
      { label: 'Entertainment', value: 'Smart TV + Audio' },
      { label: 'Solar', value: '200W' },
    ],
  },
]

export const galleryImages = [image1s, image2s, image3s, image4s, image5s, image6s, image7s, image8s, image9s, image10s]

export const heroImage = image10s

export const getCaravanById = (id: string) => premiumCaravans.find((caravan) => caravan.id === id)
