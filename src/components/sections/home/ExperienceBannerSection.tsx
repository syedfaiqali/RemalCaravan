import { Box, Container, Stack, Typography } from '@mui/material'
import CustomButton from '../../common/CustomButton'

interface ExperienceBannerSectionProps {
  image: string
  onBook: () => void
  onLearnMore: () => void
}

function ExperienceBannerSection({ image, onBook, onLearnMore }: ExperienceBannerSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ pb: 8 }}>
      <Box
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          minHeight: { xs: 400, md: 540 },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `linear-gradient(90deg, rgba(5,18,32,0.82) 0%, rgba(5,18,32,0.58) 38%, rgba(5,18,32,0.18) 60%), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: 690, color: '#fff' }}>
          <Typography sx={{ fontWeight: 700, opacity: 0.92, mb: 1 }}>Hassle-Free Rental Experience</Typography>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Experience the RemalCaravan Difference
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 400, color: 'rgba(255,255,255,0.92)' }}>
            Easy booking, flexible packages, and responsive support from first contact to final handover.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.3}>
            <CustomButton onClick={onBook}>Book Your Caravan</CustomButton>
            <CustomButton color="primary" variant="outlined" onClick={onLearnMore}>
              Learn More
            </CustomButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default ExperienceBannerSection
