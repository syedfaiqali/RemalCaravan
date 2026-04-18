import { ReactNode } from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NearMeIcon from '@mui/icons-material/NearMe'
import image3b from '../assets/For Rent 2/1.webp'
import image4b from '../assets/For Rent 3/1.webp'


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
    value: '+971 XX XXX XXXX',
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: 40 }} />,
    title: 'Mail',
    value: 'info@remalcaravan.ae',
  },
  {
    icon: <NearMeIcon sx={{ fontSize: 40 }} />,
    title: 'Address',
    value: 'Business Bay, Dubai, United Arab Emirates',
  },
]
