import { ReactNode } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import GppGoodIcon from '@mui/icons-material/GppGood'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import WalletIcon from '@mui/icons-material/Wallet'
import image2b from '../assets/2b.jpg'
import image3b from '../assets/3b.jpg'
import image4b from '../assets/4b.jpg'
import image5s from '../assets/5s.jpg'
import image6s from '../assets/6s.jpg'
import image7s from '../assets/7s.jpg'
import image8s from '../assets/8s.jpg'

export interface AboutHighlight {
  icon: ReactNode
  title: string
  text: string
}

export const aboutHeroImage = image2b

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: <CurrencyRupeeIcon sx={{ fontSize: 40 }} />,
    title: 'Affordable Pricing',
    text: 'Budget-friendly plans with premium quality so your journey stays practical and memorable.',
  },
  {
    icon: <GppGoodIcon sx={{ fontSize: 40 }} />,
    title: 'Fully Insured',
    text: 'Travel confidently with insured fleet options and reliable safety-first preparation.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    text: 'Our team is ready around the clock to assist during booking, pickup, and the trip itself.',
  },
  {
    icon: <WalletIcon sx={{ fontSize: 40 }} />,
    title: 'Easy Booking',
    text: 'Fast inquiry flow, clear terms, and simple reservation steps from start to finish.',
  },
]

export const aboutJourneyImages = {
  large: image3b,
  sideTop: image5s,
  sideBottom: image6s,
  bottomWide: image7s,
  bottomTall: image8s,
}

export const aboutFooterImage = image4b
