import { Box, Container, Stack, Typography } from '@mui/material'
import heroImage from '../../../assets/busimage2.jpeg'
import CustomButton from '../../common/CustomButton'

interface HomeHeroSectionProps {
  onViewGallery: () => void
}

function HomeHeroSection({ onViewGallery }: HomeHeroSectionProps) {
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
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            maxWidth: 1000,
            mx: 'auto',
            mb: 6,
            color: '#f39a1e',
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '4.7rem' },
            fontFamily: '"Poppins", sans-serif',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textShadow: '0 10px 30px rgba(0, 0, 0, 0.28)',
          }}
        >
          Explore an unforgettable ride in Motor Home (RV)
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.6rem' },
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.92)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              mb: 1.5,
              textShadow: '0 6px 18px rgba(0, 0, 0, 0.24)',
            }}
          >
            Make Tour & Explore Incredible Destinations With RV/Caravan
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.6rem' },
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.92)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              textShadow: '0 6px 18px rgba(0, 0, 0, 0.24)',
            }}
          >
            Fully equipped vehicles for comfortable road trips.
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="center">
          <CustomButton
            onClick={onViewGallery}
            sx={{
              px: { xs: 4.5, sm: 5.5, md: 8 },
              py: { xs: 1.5, sm: 1.8, md: 2.5 },
              minHeight: { xs: 52, sm: 56, md: 64 },
              fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' },
              lineHeight: 1.15,
              bgcolor: '#fea116',
            }}
          >
            BOOK YOUR RV NOW
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomeHeroSection
