import { ReactNode } from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NearMeIcon from '@mui/icons-material/NearMe'
import image3b from '../assets/3b.jpg'
import image4b from '../assets/4b.jpg'

export interface ContactCardItem {
  icon: ReactNode
  title: string
  value: string
}

export const contactHeroImage = image3b
export const contactSideImage = image4b

export const contactCards: ContactCardItem[] = [
  {
    icon: <PhoneInTalkIcon sx={{ fontSize: 40 }} />,
    title: 'Phone No',
    value: '+92 300 8527737',
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: 40 }} />,
    title: 'Mail',
    value: 'info@remalcaravan.com',
  },
  {
    icon: <NearMeIcon sx={{ fontSize: 40 }} />,
    title: 'Address',
    value: 'Suite 402, Shahrah-e-Faisal, PECHS, Karachi',
  },
]
