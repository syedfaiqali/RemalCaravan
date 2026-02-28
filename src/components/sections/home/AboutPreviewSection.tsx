import { Box, Container, Grid, Typography } from '@mui/material'
import CustomButton from '../../common/CustomButton'

interface AboutPreviewSectionProps {
  mainImage: string
  galleryImages: string[]
  onMoreAbout: () => void
}

function AboutPreviewSection({ mainImage, galleryImages, onMoreAbout }: AboutPreviewSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            component="span"
            sx={{
              bgcolor: 'rgba(25,118,210,0.08)',
              color: 'primary.dark',
              px: 2,
              py: 0.8,
              borderRadius: 2,
              fontWeight: 700,
              display: 'inline-block',
              mb: 2,
            }}
          >
            About Us
          </Typography>
          <Typography variant="h2" sx={{ mb: 2.2 }}>
            Let&apos;s know About Our Journey For RemalCaravan.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Fully equipped caravans are available from RemalCaravan to help make your road excursions more comfortable and manageable.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            We provide premium services for renting camping caravans with AC, kitchen comfort, and practical space for sleep, dining, and
            family travel moments.
          </Typography>
          <CustomButton onClick={onMoreAbout}>More About</CustomButton>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={1.2}>
            <Grid size={{ xs: 12 }}>
              <Box component="img" src={mainImage} alt="About caravan exterior" sx={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: 3 }} />
            </Grid>
            {galleryImages.map((image, index) => (
              <Grid key={`${image}-${index}`} size={{ xs: 12, sm: 4 }}>
                <Box
                  component="img"
                  src={image}
                  alt={`Caravan detail ${index + 1}`}
                  sx={{ width: '100%', height: 165, objectFit: 'cover', borderRadius: 3 }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutPreviewSection
