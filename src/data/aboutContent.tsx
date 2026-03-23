import { ReactNode } from 'react'
import PaymentsIcon from '@mui/icons-material/Payments'
import GppGoodIcon from '@mui/icons-material/GppGood'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import WalletIcon from '@mui/icons-material/Wallet'
import imageHero from '../assets/WhatsApp Image 2026-03-08 at 8.23.10 AM.jpeg'
import liwaDesert from '../assets/liwa_desert.png'
import alQudraLakes from '../assets/al_qudra_lakes.png'
import hattaMountains from '../assets/hatta_mountains.png'
import jebelHafeet from '../assets/jebel_hafeet.png'
import busImage from '../assets/busimage2.jpeg'
import whatsAppImageFooter from '../assets/WhatsApp Image 2026-03-08 at 8.23.33 AM.jpeg'


export interface AboutHighlight {
  icon: ReactNode
  title: string
  text: string
}

export const aboutHeroImage = imageHero

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
    title: 'Value for Money',
    text: 'Premium RV experiences at competitive rates, ensuring your UAE adventure is both luxury and practical.',
  },
  {
    icon: <GppGoodIcon sx={{ fontSize: 40 }} />,
    title: 'Fully Insured',
    text: 'Discover the Emirates with complete peace of mind, backed by a fully insured and maintained fleet.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    text: 'Our dedicated team is available around the clock to support your journey across all seven Emirates.',
  },
  {
    icon: <WalletIcon sx={{ fontSize: 40 }} />,
    title: 'Seamless Booking',
    text: 'Experience a hassle-free reservation process with transparent terms and flexible pickup options.',
  },
]

export const aboutJourneyImages = {
  large: liwaDesert,
  sideTop: alQudraLakes,
  sideBottom: hattaMountains,
  bottomWide: jebelHafeet,
  bottomTall: busImage,
}

export const aboutFooterImage = whatsAppImageFooter
