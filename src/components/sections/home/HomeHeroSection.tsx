import { Box, Container, Stack, Typography } from '@mui/material'
import CustomButton from '../../common/CustomButton'

interface HomeHeroSectionProps {
  onViewGallery: () => void
}

function HomeHeroSection({ onViewGallery }: HomeHeroSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        bgcolor: '#f2f7fb',
        backgroundImage: 'none',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Typography
          variant="h1"
          sx={{
            maxWidth: 1000,
            mx: 'auto',
            mb: 6,
            color: '#0F172A',
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '4.7rem' },
            fontFamily: '"Poppins", sans-serif',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Explore an unforgettable ride in Motor Home (RV)
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.6rem' },
              fontWeight: 400,
              color: '#475569',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              mb: 1.5
            }}
          >
            Make Tour & Explore Incredible Destinations With RV/Caravan
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.6rem' },
              fontWeight: 400,
              color: '#64748b',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Fully equipped vehicles for comfortable road trips.
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="center">
          <CustomButton
            onClick={onViewGallery}
            sx={{
              px: 8,
              py: 2.5,
              fontSize: '1.25rem',
              bgcolor: '#141414',
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
