// RV Gallery Imports
// Star light
import starLight1 from '../assets/Star light/IMG-20250812-WA0030.webp'
import starLight2 from '../assets/Star light/IMG-20250518-WA0022.webp'
import starLight3 from '../assets/Star light/IMG-20250812-WA0030.webp'
import starLight4 from '../assets/Star light/file_00000000b98871f49020eef362975ff7.webp'
import starLight5 from '../assets/Star light/IMG-20260108-WA0034.webp'
import starLight6 from '../assets/Star light/IMG-20260108-WA0035.webp'
import starLight7 from '../assets/Star light/remal_caravan_enhanced.webp'
import starLight8 from '../assets/Star light/IMG-20260118-WA0087.webp'

// Sunshine
import sunshine1 from '../assets/Sunshine/file_00000000c7e0720abaca7f32946cddbf.webp'
import sunshine2 from '../assets/Sunshine/file_00000000dfb87243900043e99091c9b7.webp'
import sunshine3 from '../assets/Sunshine/file_0000000097ac71f49017620744c7185b.webp'
import sunshine4 from '../assets/Sunshine/file_0000000011dc720a9ba6904b0f993214.webp'

// Oasis
import oasis1 from '../assets/Oasis/IMG-20260104-WA0016.webp'
import oasis2 from '../assets/Oasis/IMG-20260104-WA0017.webp'
import oasis3 from '../assets/Oasis/IMG-20260104-WA0018.webp'
import oasis4 from '../assets/Oasis/IMG-20260104-WA0019.webp'

// Falcon Rover
import falconRover1 from '../assets/Falcon Rover/IMG-20260120-WA0024.webp'
import falconRover2 from '../assets/Falcon Rover/IMG-20260120-WA0019.webp'
import falconRover3 from '../assets/Falcon Rover/IMG-20260120-WA0020.webp'
import falconRover4 from '../assets/Falcon Rover/IMG-20260120-WA0021.webp'

// Apex Blazer
import apexBlazer1 from '../assets/Apex Blazer/file_00000000fe8472468e789b5c56b9e2c0.webp'
import apexBlazer2 from '../assets/Apex Blazer/file_000000005e307243b5985b4647529284.webp'
import apexBlazer3 from '../assets/Apex Blazer/file_0000000063f0720abdd4d94325d6cdb9.webp'
import apexBlazer4 from '../assets/Apex Blazer/file_000000008130720a9e2639d51721cbd9.webp'
import apexBlazer5 from '../assets/Apex Blazer/file_000000008130720a9e2639d51721cbd9.webp'

// Desert Glory
import desertGlory3 from '../assets/Desert Glory/IMG-20260121-WA0018.webp'
import desertGlory2 from '../assets/Desert Glory/IMG-20260121-WA0022.webp'
import desertGlory1 from '../assets/Desert Glory/IMG-20260121-WA0023.webp'

// Rainbow
import rainbow1 from '../assets/Rainbow/file_000000000794720a95f0f43dcae5a0c7.webp'
import rainbow2 from '../assets/Rainbow/IMG-20260118-WA0101.webp'
import rainbow3 from '../assets/Rainbow/IMG-20260118-WA0102.webp'
import rainbow4 from '../assets/Rainbow/file_000000000794720a95f0f43dcae5a0c7.webp'

// Terra
import terra1 from '../assets/Terra/file_00000000b09c7243859f672d035ec067.webp'
import terra2 from '../assets/Terra/file_00000000552c720a869683ddeb6f8f48.webp'
import terra3 from '../assets/Terra/IMG-20260120-WA0025.webp'
import terra4 from '../assets/Terra/IMG-20260120-WA0027.webp'
import terra5 from '../assets/Terra/IMG-20260120-WA0029.webp'

// For Sale 9
import sale9_1 from '../assets/For Sale 9/1.webp'

// For Sale 18
import sale18_1 from '../assets/For Sale 18/1.webp'


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

const defaultSpecificationSummary = {
  fuel: 'Diesel',
  kids: '2 Kids',
  adults: '2 Adults',
  vehicleType: 'Light Passenger Vehicle',
}

const defaultInclusions = [
  'One Queen Size Bed with Linens, Quilt & Partition & Door Lock',
  'One 3 Seater Motorised Sofa cum Bed with Linens & Quilt',
  '1(One) Queen Size over head bed with Linens & Quilt & Curtain',
  'Two 2 Seater Sofa set',
  'One Smart TV',
  'Sound System',
  'Mobile Charging Points',
  'Intercom System to communicate with Driver',
  'Electrical Marine Toilet with Washbasin & Shower',
  'Shampoo & Shower Gel',
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
  'Night Parking',
]

const defaultExclusions = [
  'Fuel Cost post 250 kms of free run',
  'Breakfast, Lunch & Dinner',
  'Special Permits & Local Passes',
  'Miscellaneous Personal Expenses',
  'Day Halting Charges (Engine is ON)',
  'Driver',
]

const defaultServices = [
  '5Kg extra LPG Cylinder',
  'Archery Set',
  'Badminton Set',
  'Barbeque',
  'Bicycle',
  'Bonfire',
  'Fishing Rod',
  'Hammock',
]

export const featuredCaravans: CaravanItem[] = [
  {//1
    id: 'star-light',
    title: 'Star Light',
    description: 'Robust and ready for the dunes, perfect for UAE’s vast Seaside and Seashores.',
    fullDescription: 'Experience unparalleled comfort evokes the sensation of a level of ease and relaxation that transcends ordinary comfort, offering a truly exceptional and memorable experience. This phrase suggests a state of being where every aspect of comfort is optimized to its fullest potential, creating an environment or sensation that feels uniquely tailored to the individual, surpassing all expectations.',
    image: starLight1,
    gallery: [starLight1, starLight2, starLight3, starLight4, starLight5, starLight6, starLight7, starLight8],
    pricePerDay: 'Starting from AED 950/day',
    sleeps: '',
    quickSpecs: ['Desert Ready', 'Dual AC', 'Solar'],
    specificationSummary: {
      fuel: 'Diesel',
      kids: '2 Kids',
      adults: '2 Adults',
      vehicleType: 'Light Passenger Vehicle'
    },
    inclusions: [
      'Two Queen Size Bed with Linens, Quilt & Partition & Door Lock',
      // 'One 3 Seater Motorised Sofa cum Bed with Linens & Quilt',
      'Two 2 Seater Sofa set',
      '1(One) Queen Size over head bed with Linens & Quilt & Curtain',
      'Air Conditioners (Hot & Cold)',
      'One Smart TV',
      'Surround Sound System',
      'Mobile Charging Points',
      // 'Intercom System to communicate with Driver',
      'Toilet with Washbasin & Shower',
      'Shampoo & Shower Gel',
      'Safety Vault',
      'Water Geyser',
      'Outdoor Kitchenette with Microwave',
      'Electric Kettle',
      'Fridge & Sink',
      'Outdoor Kitchen with Microwave',
      'Camping Chairs & Table with Awning & Camping Lights',
      'Cooking Utensils',
      '5Kg LPG Cylinder',
      'Mood Lighting & Emergency Light',
      'Fire Extinguishers',
      '3 KVA Honda Silent Genset',
      'Umbrella',
      'Fuel up to 250 kms (Free Run/per Day)',
      // 'Night Parking at our Authorised Campsites'
    ],
    exclusions: [
      'Driver',
      'Fuel Cost post 250 kms of free run @ 100 per km',
      'Breakfast, Lunch & Dinner',
      'Special Permits & Local Passes',
      'Miscellaneous Personal Expenses',
      'Night Parking at our Authorised Campsites',
      'Fuel for generator excluded'
    ],
    services: [
      '5Kg LPG Cylinder',
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
    specificationSummary: defaultSpecificationSummary,
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
    services: defaultServices,
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
    specificationSummary: defaultSpecificationSummary,
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
    services: defaultServices,
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
    specificationSummary: defaultSpecificationSummary,
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
    services: defaultServices,
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
    specificationSummary: defaultSpecificationSummary,
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
    services: defaultServices,
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
    specificationSummary: defaultSpecificationSummary,
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
    services: defaultServices,
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
    specificationSummary: defaultSpecificationSummary,
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
    services: defaultServices,
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
    specificationSummary: defaultSpecificationSummary,
    inclusions: defaultInclusions,
    exclusions: defaultExclusions,
    services: defaultServices,
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
]

export const galleryImages = [starLight1, sunshine1, oasis1, falconRover1, apexBlazer1, desertGlory1, rainbow1, terra1, sale9_1, sale18_1]

export const heroImage = starLight1

export const getCaravanById = (id: string) => premiumCaravans.find((caravan) => caravan.id === id)
