import { ReactNode } from 'react'
import PaymentsIcon from '@mui/icons-material/Payments'
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
  large: image3b,
  sideTop: image5s,
  sideBottom: image6s,
  bottomWide: image7s,
  bottomTall: image8s,
}

export const aboutFooterImage = image4b
