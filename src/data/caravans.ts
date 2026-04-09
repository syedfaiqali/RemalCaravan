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

// New Imports
import rent5_1 from '../assets/For Rent 5/1.jpg'
import rent5_2 from '../assets/For Rent 5/2.jpg'
import rent5_3 from '../assets/For Rent 5/3.jpg'
import rent5_4 from '../assets/For Rent 5/4.jpg'

import rent6_1 from '../assets/For Rent 6/1.jpeg'
import rent6_2 from '../assets/For Rent 6/2.jpeg'
import rent6_3 from '../assets/For Rent 6/3.jpeg'
import rent6_4 from '../assets/For Rent 6/4.jpeg'

import sale9_1 from '../assets/For Sale 9/1.jpg'
import sale9_2 from '../assets/For Sale 9/2.jpg'
import sale9_3 from '../assets/For Sale 9/3.jpg'
import sale9_4 from '../assets/For Sale 9/4.jpg'

import rent7_1 from '../assets/For Rent 7/1.jpeg'
import rent7_2 from '../assets/For Rent 7/2.jpeg'
import rent8_1 from '../assets/For Rent 8/1.jpeg'
import sale1_1 from '../assets/For sale 1/1.jpg'
import sale2_1 from '../assets/For sale 2/1.jpg'
import sale4_1 from '../assets/For sale 4/1.jpg'
import sale18_1 from '../assets/For Sale 18/1.jpg'


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
  {//1
    id: 'star-light',
    title: 'Star Light',
    description: 'Robust and ready for the dunes, perfect for UAE’s vast desert landscapes.',
    image: rent5_1,
    gallery: [rent5_1, rent5_2, rent5_3, rent5_4],
    pricePerDay: 'Staring from AED 950/day',
    sleeps: 'Sleeps 5',
    quickSpecs: ['Desert Ready', 'Heavy Duty AC', 'Solar'],
    specs: [
      { label: 'Length', value: '22 ft' },
      { label: 'Berths', value: '5 persons' },
      { label: 'Water', value: '150L' },
      { label: 'Tires', value: 'All-Terrain' },
      { label: 'Battery', value: '2x 100Ah' },
      { label: 'Transmission', value: 'Manual/Auto' },
    ],
  },
  {//2
    id: 'sunshine',
    title: 'Sunshine',
    description: 'Robust and ready for the dunes, perfect for UAE’s vast desert landscapes.',
    image: rent5_1,
    gallery: [rent5_1, rent5_2, rent5_3, rent5_4],
    pricePerDay: 'Staring from AED 750/day',
    sleeps: 'Sleeps 5',
    quickSpecs: ['Desert Ready', 'Heavy Duty AC', 'Solar'],
    specs: [
      { label: 'Length', value: '22 ft' },
      { label: 'Berths', value: '5 persons' },
      { label: 'Water', value: '150L' },
      { label: 'Tires', value: 'All-Terrain' },
      { label: 'Battery', value: '2x 100Ah' },
      { label: 'Transmission', value: 'Manual/Auto' },
    ],
  },
  {//3
    id: 'oasis',
    title: 'Oasis',
    description: 'Robust and ready for the dunes, perfect for UAE’s vast desert landscapes.',
    image: rent5_1,
    gallery: [rent5_1, rent5_2, rent5_3, rent5_4],
    pricePerDay: 'Staring from AED 750/day',
    sleeps: 'Sleeps 5',
    quickSpecs: ['Desert Ready', 'Heavy Duty AC', 'Solar'],
    specs: [
      { label: 'Length', value: '22 ft' },
      { label: 'Berths', value: '5 persons' },
      { label: 'Water', value: '150L' },
      { label: 'Tires', value: 'All-Terrain' },
      { label: 'Battery', value: '2x 100Ah' },
      { label: 'Transmission', value: 'Manual/Auto' },
    ],
  },
  {//4
    id: 'falcon-rover',
    title: 'Falcon Rover',
    description: 'Premium fit-out with expanded storage and upgraded amenities.',
    image: image3b,
    gallery: [image3b, image7s, image8s, image9s],
    pricePerDay: 'Staring from AED 750/day',
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
    id: 'apex-blazer',
    title: 'Apex Blazer',
    description: 'Stylish interior with lounge seating and practical kitchen setup.',
    image: image1b,
    gallery: [image1b, image1s, image2s, image3s],
    pricePerDay: 'Staring from AED 750/day',
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
    id: 'desert-glory',
    title: 'Desert Glory',
    description: 'Balanced comfort and mobility for long roads and short escapes.',
    image: image2b,
    gallery: [image2b, image4s, image5s, image6s],
    pricePerDay: 'Staring from AED 750/day',
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
    id: 'rainbow',
    title: 'Rainbow',
    description: 'Robust and ready for the dunes, perfect for UAE’s vast desert landscapes.',
    image: rent5_1,
    gallery: [rent5_1, rent5_2, rent5_3, rent5_4],
    pricePerDay: 'Staring from AED 750/day',
    sleeps: 'Sleeps 5',
    quickSpecs: ['Desert Ready', 'Heavy Duty AC', 'Solar'],
    specs: [
      { label: 'Length', value: '22 ft' },
      { label: 'Berths', value: '5 persons' },
      { label: 'Water', value: '150L' },
      { label: 'Tires', value: 'All-Terrain' },
      { label: 'Battery', value: '2x 100Ah' },
      { label: 'Transmission', value: 'Manual/Auto' },
    ],
  },
  {
    id: 'terra',
    title: 'Terra',
    description: 'Robust and ready for the dunes, perfect for UAE’s vast desert landscapes.',
    image: rent5_1,
    gallery: [rent5_1, rent5_2, rent5_3, rent5_4],
    pricePerDay: 'Staring from AED 750/day',
    sleeps: 'Sleeps 5',
    quickSpecs: ['Desert Ready', 'Heavy Duty AC', 'Solar'],
    specs: [
      { label: 'Length', value: '22 ft' },
      { label: 'Berths', value: '5 persons' },
      { label: 'Water', value: '150L' },
      { label: 'Tires', value: 'All-Terrain' },
      { label: 'Battery', value: '2x 100Ah' },
      { label: 'Transmission', value: 'Manual/Auto' },
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
  {
    id: 'remal-coastal-cruiser',
    title: 'Remal Coastal Cruiser',
    description: 'Sleek and comfortable for beach-side retreats and coastal adventures.',
    image: rent6_1,
    gallery: [rent6_1, rent6_2, rent6_3, rent6_4],
    pricePerDay: 'AED 2,000/day',
    sleeps: 'Sleeps 4',
    quickSpecs: ['Eco-Friendly', 'Shore Power', 'Large Windows'],
    specs: [
      { label: 'Length', value: '21 ft' },
      { label: 'Berths', value: '4 persons' },
      { label: 'Solar', value: '150W' },
      { label: 'Heating', value: 'Diesel Heater' },
      { label: 'Inverter', value: '2000W' },
      { label: 'Camera', value: '360 View' },
    ],
  },
  {
    id: 'remal-trail-blazer',
    title: 'Remal Trail Blazer',
    description: 'Master any terrain with this rugged and dependable exploration machine.',
    image: sale9_1,
    gallery: [sale9_1, sale9_2, sale9_3, sale9_4],
    pricePerDay: 'AED 2,500/day',
    sleeps: 'Sleeps 5',
    quickSpecs: ['Off-road Mastery', 'Rugged Build', 'Full Amenities'],
    specs: [
      { label: 'Length', value: '23 ft' },
      { label: 'Berths', value: '5 persons' },
      { label: 'Suspension', value: 'Independent' },
      { label: 'Cooktop', value: '3 burner gas' },
      { label: 'Fridge', value: '130L' },
      { label: 'Winway', value: 'Included' },
    ],
  },
  {
    id: 'remal-adventure-pro',
    title: 'Remal Adventure Pro',
    description: 'Equipped with advanced navigation and off-road capabilities.',
    image: rent7_1,
    gallery: [rent7_1, rent7_2],
    pricePerDay: 'AED 2,200/day',
    sleeps: 'Sleeps 6',
    quickSpecs: ['Off-road Pro', 'Advanced Nav', 'Extra Fuel'],
    specs: [
      { label: 'Length', value: '24 ft' },
      { label: 'Berths', value: '6 persons' },
      { label: 'Fuel Tank', value: '180L' },
      { label: 'Nav System', value: 'Garmin RV 890' },
      { label: 'Solar', value: '300W' },
    ],
  },
  {
    id: 'remal-urban-escaper',
    title: 'Remal Urban Escaper',
    description: 'Compact and versatile for quick weekend getaways and urban discoveries.',
    image: rent8_1,
    gallery: [rent8_1],
    pricePerDay: 'AED 1,300/day',
    sleeps: 'Sleeps 3',
    quickSpecs: ['City Friendly', 'Compact', 'Easy Parking'],
    specs: [
      { label: 'Length', value: '18 ft' },
      { label: 'Berths', value: '3 persons' },
      { label: 'Engine', value: 'Turbo Diesel' },
      { label: 'AC', value: 'Roof Mounted' },
    ],
  },
  {
    id: 'remal-majestic-rover',
    title: 'Remal Majestic Rover',
    description: 'A premium sanctuary on wheels with expanded space and high-end finishes.',
    image: sale1_1,
    gallery: [sale1_1],
    pricePerDay: 'AED 3,500/day',
    sleeps: 'Sleeps 8',
    quickSpecs: ['Full Luxury', '8 Berths', 'Gourmet Kitchen'],
    specs: [
      { label: 'Length', value: '30 ft' },
      { label: 'Berths', value: '8 persons' },
      { label: 'Kitchen', value: 'Oven + Dishwasher' },
      { label: 'Bedding', value: 'King Size Master' },
    ],
  },
  {
    id: 'remal-grand-nomad',
    title: 'Remal Grand Nomad',
    description: 'Designed for long-haul journeys with ultimate comfort and storage efficiency.',
    image: sale2_1,
    gallery: [sale2_1],
    pricePerDay: 'AED 2,800/day',
    sleeps: 'Sleeps 6',
    quickSpecs: ['Long Haul', 'Max Storage', 'Comfort+'],
    specs: [
      { label: 'Length', value: '26 ft' },
      { label: 'Berths', value: '6 persons' },
      { label: 'Storage', value: '1500L' },
      { label: 'Fuel', value: 'Diesel' },
    ],
  },
  {
    id: 'remal-sunset-voyager',
    title: 'Remal Sunset Voyager',
    description: 'Breathtaking views and elegant interiors for unforgettable experiences.',
    image: sale4_1,
    gallery: [sale4_1],
    pricePerDay: 'AED 3,000/day',
    sleeps: 'Sleeps 4',
    quickSpecs: ['Panoramic View', 'Elegant', 'AC'],
    specs: [
      { label: 'Length', value: '25 ft' },
      { label: 'Berths', value: '4 persons' },
      { label: 'Windows', value: 'Panoramic' },
    ],
  },
  {
    id: 'remal-royal-suite',
    title: 'Remal Royal Suite',
    description: 'The pinnacle of luxury RV living with every possible amenity.',
    image: sale18_1,
    gallery: [sale18_1],
    pricePerDay: 'AED 4,500/day',
    sleeps: 'Sleeps 4',
    quickSpecs: ['Ultra Luxury', '4 Berths', 'Full Tech'],
    specs: [
      { label: 'Length', value: '32 ft' },
      { label: 'Berths', value: '4 persons' },
      { label: 'Bathroom', value: 'Marble Finish' },
    ],
  },
]

export const galleryImages = [image1s, image2s, image3s, image4s, image5s, image6s, image7s, image8s, image9s, image10s]

export const heroImage = image10s

export const getCaravanById = (id: string) => premiumCaravans.find((caravan) => caravan.id === id)
