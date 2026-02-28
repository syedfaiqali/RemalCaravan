import { Box, Container, Stack, Typography } from '@mui/material'
import CustomButton from '../../common/CustomButton'

interface HomeHeroSectionProps {
  heroImage: string
  onViewGallery: () => void
  onExploreServices: () => void
}

function HomeHeroSection({ heroImage, onViewGallery, onExploreServices }: HomeHeroSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        color: '#fff',
        backgroundImage: `linear-gradient(rgba(13,35,67,0.74), rgba(13,35,67,0.68)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ maxWidth: 760, mb: 2 }}>
          Rent Beautiful Caravans and Travel in Comfort
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 720, mb: 3, fontWeight: 400, opacity: 0.95 }}>
          Choose from a modern fleet, transparent pricing, and reliable support for every journey.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <CustomButton onClick={onViewGallery}>View Full Gallery</CustomButton>
          <CustomButton color="primary" variant="outlined" onClick={onExploreServices}>
            Explore Services
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomeHeroSection
