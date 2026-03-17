import { Box, Container, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'

interface ContactHeroSectionProps {
  image: string
}

function ContactHeroSection({ image }: ContactHeroSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 20 },
        textAlign: 'center',
        background: `linear-gradient(rgba(248, 250, 252, 0.85), rgba(248, 250, 252, 0.85)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        borderBottom: '1px solid #d3deea',
      }}
    >
      <Container maxWidth="md">
        <MotionSection delay={100}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4rem' },
              color: '#2b2b2b',
              lineHeight: 1.1,
              mb: 3,
              letterSpacing: '-0.02em'
            }}
          >
            Get in <Box component="span" sx={{ color: '#f39a1e' }}>Touch</Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: '#5b5b5b',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            We are here to help you plan your perfect road trip. Reach out for any inquiries or support.
          </Typography>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default ContactHeroSection


