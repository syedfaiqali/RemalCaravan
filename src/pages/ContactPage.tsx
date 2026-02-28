import { Container } from '@mui/material'
import ContactHeroSection from '../components/sections/contact/ContactHeroSection'
import ContactInfoCardsSection from '../components/sections/contact/ContactInfoCardsSection'
import ContactEnquirySection from '../components/sections/contact/ContactEnquirySection'
import ContactMapAndDetailsSection from '../components/sections/contact/ContactMapAndDetailsSection'
import { contactCards, contactHeroImage, contactSideImage } from '../data/contactContent'

function ContactPage() {
  return (
    <>
      <ContactHeroSection image={contactHeroImage} />
      <ContactInfoCardsSection cards={contactCards} />

      <Container maxWidth="xl" sx={{ pb: 6 }}>
        <ContactEnquirySection sideImage={contactSideImage} />
      </Container>

      <Container maxWidth="xl" sx={{ pb: 8 }}>
        <ContactMapAndDetailsSection />
      </Container>
    </>
  )
}

export default ContactPage
