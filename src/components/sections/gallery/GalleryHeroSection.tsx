import { Box, Container, Typography, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MotionSection from '../../common/MotionSection'

function GalleryHeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#94a3b8',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        pt: { xs: 15, md: 20 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        color: '#fff'
      }}
    >
      <Container maxWidth="lg">
        <MotionSection delay={100}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
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
          <Button
            variant="contained"
            startIcon={<KeyboardArrowDownIcon />}
            sx={{
              bgcolor: '#fff',
              color: '#0F172A',
              px: 4,
              py: 2,
              borderRadius: '16px',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: '#f1f5f9',
                transform: 'translateY(-3px)'
              },
              transition: '0.3s'
            }}
          >
            View Collections
          </Button>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default GalleryHeroSection
