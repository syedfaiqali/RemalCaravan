import { Box, Container, Grid, Paper, Typography } from '@mui/material'

interface AboutMissionVisionSectionProps {
  image: string
}

function AboutMissionVisionSection({ image }: AboutMissionVisionSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: { xs: 2.5, md: 4 }, height: '100%' }}>
            <Typography variant="h3" color="primary.dark" sx={{ mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our mission is to provide travelers with the freedom to explore in comfort and style. We are dedicated to offering quality
              caravans at practical pricing, backed by responsive support and transparent service at every step.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: { xs: 2.5, md: 4 }, height: '100%' }}>
            <Typography variant="h3" color="primary.dark" sx={{ mb: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our vision is to inspire a world where every traveler can embrace open-road freedom without compromise. We aim to be the trusted
              destination for reliable, affordable, and memorable caravan travel experiences.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box component="img" src={image} alt="RemalCaravan fleet" sx={{ width: '100%', mt: 4, borderRadius: 3, height: { xs: 220, md: 320 }, objectFit: 'cover' }} />
    </Container>
  )
}

export default AboutMissionVisionSection
