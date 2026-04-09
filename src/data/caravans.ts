// RV Gallery Imports
// Star light
import starLight1 from '../assets/Star light/IMG-20250812-WA0030.jpg'
import starLight2 from '../assets/Star light/IMG-20250518-WA0022.jpg'
import starLight3 from '../assets/Star light/IMG-20250812-WA0030.jpg'
import starLight4 from '../assets/Star light/file_00000000b98871f49020eef362975ff7.png'
import starLight5 from '../assets/Star light/IMG-20260108-WA0034.jpg'
import starLight6 from '../assets/Star light/IMG-20260108-WA0035.jpg'
import starLight7 from '../assets/Star light/remal_caravan_enhanced.png'
import starLight8 from '../assets/Star light/IMG-20260118-WA0087.jpg'

// Sunshine
import sunshine1 from '../assets/Sunshine/file_00000000c7e0720abaca7f32946cddbf.png'
import sunshine2 from '../assets/Sunshine/file_00000000dfb87243900043e99091c9b7.png'
import sunshine3 from '../assets/Sunshine/file_0000000097ac71f49017620744c7185b.png'
import sunshine4 from '../assets/Sunshine/file_0000000011dc720a9ba6904b0f993214.png'

// Oasis
import oasis1 from '../assets/Oasis/IMG-20260104-WA0016.jpg'
import oasis2 from '../assets/Oasis/IMG-20260104-WA0017.jpg'
import oasis3 from '../assets/Oasis/IMG-20260104-WA0018.jpg'
import oasis4 from '../assets/Oasis/IMG-20260104-WA0019.jpg'

// Falcon Rover
import falconRover1 from '../assets/Falcon Rover/IMG-20260120-WA0024.jpg'
import falconRover2 from '../assets/Falcon Rover/IMG-20260120-WA0019.jpg'
import falconRover3 from '../assets/Falcon Rover/IMG-20260120-WA0020.jpg'
import falconRover4 from '../assets/Falcon Rover/IMG-20260120-WA0021.jpg'

// Apex Blazer
import apexBlazer1 from '../assets/Apex Blazer/file_00000000fe8472468e789b5c56b9e2c0.png'
import apexBlazer2 from '../assets/Apex Blazer/file_000000005e307243b5985b4647529284.png'
import apexBlazer3 from '../assets/Apex Blazer/file_0000000063f0720abdd4d94325d6cdb9.png'
import apexBlazer4 from '../assets/Apex Blazer/file_000000008130720a9e2639d51721cbd9.png'
import apexBlazer5 from '../assets/Apex Blazer/file_000000008130720a9e2639d51721cbd9.png'

// Desert Glory
import desertGlory3 from '../assets/Desert Glory/IMG-20260121-WA0018.jpg'
import desertGlory2 from '../assets/Desert Glory/IMG-20260121-WA0022.jpg'
import desertGlory1 from '../assets/Desert Glory/IMG-20260121-WA0023.jpg'

// Rainbow
import rainbow1 from '../assets/Rainbow/file_000000000794720a95f0f43dcae5a0c7.png'
import rainbow2 from '../assets/Rainbow/IMG-20260118-WA0101.jpg'
import rainbow3 from '../assets/Rainbow/IMG-20260118-WA0102.jpg'
import rainbow4 from '../assets/Rainbow/file_000000000794720a95f0f43dcae5a0c7.png'

// Terra
import terra1 from '../assets/Terra/file_00000000b09c7243859f672d035ec067.png'
import terra2 from '../assets/Terra/file_00000000552c720a869683ddeb6f8f48.png'
import terra3 from '../assets/Terra/IMG-20260120-WA0025.jpg'
import terra4 from '../assets/Terra/IMG-20260120-WA0027.jpg'
import terra5 from '../assets/Terra/IMG-20260120-WA0029.jpg'

// Fallback Imports
import rent1_1 from '../assets/For Rent 1/1.jpg'
import rent1_2 from '../assets/For Rent 1/2.jpg'
import rent1_3 from '../assets/For Rent 1/3.jpg'
import rent1_4 from '../assets/For Rent 1/4.jpg'

import rent4_1 from '../assets/For Rent 4/1.jpg'
import rent4_2 from '../assets/For Rent 4/2.jpg'
import rent4_3 from '../assets/For Rent 4/3.jpg'
import rent4_4 from '../assets/For Rent 4/4.jpg'

// For Rent 6
import rent6_1 from '../assets/For Rent 6/1.jpeg'
import rent6_2 from '../assets/For Rent 6/2.jpeg'
import rent6_3 from '../assets/For Rent 6/3.jpeg'
import rent6_4 from '../assets/For Rent 6/4.jpeg'

// For Rent 7
import rent7_1 from '../assets/For Rent 7/1.jpeg'
import rent7_2 from '../assets/For Rent 7/2.jpeg'

// For Rent 8
import rent8_1 from '../assets/For Rent 8/1.jpeg'
import rent8_2 from '../assets/For Rent 8/2.jpeg'

// For Sale 9
import sale9_1 from '../assets/For Sale 9/1.jpg'
import sale9_2 from '../assets/For Sale 9/2.jpg'
import sale9_3 from '../assets/For Sale 9/3.jpg'
import sale9_4 from '../assets/For Sale 9/4.jpg'

// For sale 1
import sale1_1 from '../assets/For sale 1/1.jpg'
import sale1_2 from '../assets/For sale 1/2.jpg'
import sale1_3 from '../assets/For sale 1/3.jpg'
import sale1_4 from '../assets/For sale 1/4.jpg'

// For sale 2
import sale2_1 from '../assets/For sale 2/1.jpg'
import sale2_2 from '../assets/For sale 2/2.jpg'
import sale2_3 from '../assets/For sale 2/3.jpg'
import sale2_4 from '../assets/For sale 2/4.jpg'

// For sale 4
import sale4_1 from '../assets/For sale 4/1.jpg'
import sale4_2 from '../assets/For sale 4/2.jpg'
import sale4_3 from '../assets/For sale 4/3.jpg'
import sale4_4 from '../assets/For sale 4/4.jpg'

// For Sale 18
import sale18_1 from '../assets/For Sale 18/1.jpg'
import sale18_2 from '../assets/For Sale 18/2.jpg'
import sale18_3 from '../assets/For Sale 18/3.jpg'
import sale18_4 from '../assets/For Sale 18/4.jpg'


export interface CaravanSpec {
  label: string
  value: string
}

export interface CaravanItem {
  id: string
  title: string
  description: string
  fullDescription?: string
  image: string
  gallery: string[]
  pricePerDay: string
  sleeps: string
  quickSpecs: string[]
  specs: CaravanSpec[]
  specificationSummary?: {
    fuel: string
    kids: string
    adults: string
    vehicleType: string
  }
  inclusions?: string[]
  exclusions?: string[]
  services?: string[]
}

export const featuredCaravans: CaravanItem[] = [
  {//1
    id: 'star-light',
    title: 'Star Light',
    description: 'Robust and ready for the dunes, perfect for UAE’s vast desert landscapes.',
    fullDescription: 'Experience unparalleled comfort evokes the sensation of a level of ease and relaxation that transcends ordinary comfort, offering a truly exceptional and memorable experience. This phrase suggests a state of being where every aspect of comfort is optimized to its fullest potential, creating an environment or sensation that feels uniquely tailored to the individual, surpassing all expectations.',
    image: starLight1,
    gallery: [starLight1, starLight2, starLight3, starLight4, starLight5, starLight6, starLight7, starLight8],
    pricePerDay: 'Starting from AED 950/day',
    sleeps: '',
    quickSpecs: ['Desert Ready', 'Heavy Duty AC', 'Solar'],
    specificationSummary: {
      fuel: 'Diesel',
      kids: '2 Kids',
      adults: '4 Adults',
      vehicleType: 'Light Passenger Vehicle'
    },
    inclusions: [
      'Driver',
      'One Queen Size Bed with Linens, Quilt & Partition & Door Lock',
      'One 3 Seater Motorised Sofa cum Bed with Linens & Quilt',
      'Two 2 Seater Sofa set',
      '1(One) Queen Size over head bed with Linens & Quilt & Curtain',
      'Air Conditioners (Hot & Cold)',
      'One Smart TV',
      'Sony Surround Sound System',
      'Mobile Charging Points',
      'Intercom System to communicate with Driver',
      'Electrical Marine Toilet with Washbasin & Shower',
      'Shampoo & Shower Gel',
      'Safety Vault',
      'Water Geyser',
      'Kitchenette with Hot Plate',
      'Electric Kettle',
      'Pull out Fridge & Sink',
      'Outdoor Pullout Kitchen with Gas Burner & Sink',
      'Camping Chairs & Table with Awning & Camping Lights',
      'Cooking Utensils',
      '5Kg LPG Cylinder',
      'Mood Lighting & Emergency Light',
      'Fire Extinguishers',
      '3 KVA Honda Silent Genset',
      'Umbrella',
      'Fuel up to 250 kms (Free Run/per Day)',
      'Night Parking at our Authorised Campsites'
    ],
    exclusions: [
      'Fuel Cost post 250 kms of free run @ Rs. 100 per km',
      'Breakfast, Lunch & Dinner',
      'Special Permits & Local Passes',
      'Miscellaneous Personal Expenses',
      'Day Halting Charges (Engine is ON) @ Rs. 1500/- per hour'
    ],
    services: [
      '5Kg extra LPG Cylinder',
      'Archery Set',
      'Badminton Set',
      'Barbeque',
      'Bicycle',
      'Bonfire',
      'Fishing Rod',
      'Hammock'
    ],
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
    image: sunshine1,
    gallery: [sunshine1, sunshine2, sunshine3, sunshine4],
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
    image: oasis1,
    gallery: [oasis1, oasis2, oasis3, oasis4],
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
    image: falconRover1,
    gallery: [falconRover1, falconRover2, falconRover3, falconRover4],
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
    image: apexBlazer1,
    gallery: [apexBlazer1, apexBlazer2, apexBlazer3, apexBlazer4, apexBlazer5],
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
    image: desertGlory1,
    gallery: [desertGlory1, desertGlory2, desertGlory3],
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
    image: rainbow1,
    gallery: [rainbow1, rainbow2, rainbow3, rainbow4],
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
    image: terra1,
    gallery: [terra1, terra2, terra3, terra4, terra5],
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
    image: rent4_1,
    gallery: [rent4_1, rent4_2, rent4_3, rent4_4],
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
    image: rent1_1,
    gallery: [rent1_1, rent1_2, rent1_3, rent1_4],
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
    gallery: [rent8_1, rent8_2],
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
    gallery: [sale1_1, sale1_2, sale1_3, sale1_4],
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
    gallery: [sale2_1, sale2_2, sale2_3, sale2_4],
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
    gallery: [sale4_1, sale4_2, sale4_3, sale4_4],
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
    gallery: [sale18_1, sale18_2, sale18_3, sale18_4],
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

export const galleryImages = [starLight1, sunshine1, oasis1, falconRover1, apexBlazer1, desertGlory1, rainbow1, terra1, sale9_1, sale18_1]

export const heroImage = starLight1

export const getCaravanById = (id: string) => premiumCaravans.find((caravan) => caravan.id === id)
