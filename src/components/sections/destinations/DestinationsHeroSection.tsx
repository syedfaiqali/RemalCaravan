import { Box, Container, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import heroImage from '../../../assets/busimage2.jpeg'

function DestinationsHeroSection() {
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
            Explore Our <br /> Destinations
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              mb: 3,
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            Discover incredible places to visit with our RV adventures.
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Embark on a journey of a lifetime with our premium RV rentals tailored for your comfort. From mountain peaks to serene lakesides, the road is yours.
          </Typography>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default DestinationsHeroSection


