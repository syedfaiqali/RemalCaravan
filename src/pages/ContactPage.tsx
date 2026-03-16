import { Container, Box } from '@mui/material'
import ContactHeroSection from '../components/sections/contact/ContactHeroSection'
import ContactEnquirySection from '../components/sections/contact/ContactEnquirySection'
import ContactMapAndDetailsSection from '../components/sections/contact/ContactMapAndDetailsSection'
import { contactHeroImage } from '../data/contactContent'

function ContactPage() {
  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <ContactHeroSection image={contactHeroImage} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <ContactEnquirySection />
        <ContactMapAndDetailsSection />
      </Container>
    </Box>
  )
}

export default ContactPage
