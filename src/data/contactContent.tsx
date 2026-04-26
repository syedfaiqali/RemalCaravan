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
    value: '+971 50 120 9512',
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: 40 }} />,
    title: 'Mail',
    value: 'info@remalcaravan.ae',
  },
  {
    icon: <NearMeIcon sx={{ fontSize: 40 }} />,
    title: 'Address',
    value: '79, Sheikh Abdullah Al-Shaiba Street - Al Bustan-1 - Liwara Ajman, United Arab Emirates',
  },
]
