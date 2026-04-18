import { Box, Container, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import heroImage from '../../../assets/busimage2.webp'

function GalleryHeroSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        px: { xs: 2, md: 3 },
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(180deg, rgba(14, 14, 14, 0.68) 0%, rgba(14, 14, 14, 0.58) 45%, rgba(14, 14, 14, 0.7) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <MotionSection delay={100}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              color: '#f39a1e',
              fontSize: { xs: '3rem', md: '5rem' },
              lineHeight: 1.1,
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            Travel Moments <br />
            Gallery
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Explore our RV adventures and unforgettable road trips across the country.
          </Typography>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default GalleryHeroSection


