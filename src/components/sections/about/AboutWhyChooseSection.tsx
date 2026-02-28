import { Box, Container, Typography } from '@mui/material'

function AboutWhyChooseSection() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: '#fff', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 2, color: '#fff' }}>
          Why Choose Caravan?
        </Typography>
        <Typography align="center" sx={{ fontSize: { xs: 20, md: 34 }, fontWeight: 700, mb: 3 }}>
          Talk to us today
        </Typography>
        <Typography align="center" sx={{ maxWidth: 1000, mx: 'auto', color: 'rgba(255,255,255,0.9)' }}>
          Affordability, comfort, convenience, peace of mind, and exceptional support define our rental experience. Our fleet is regularly
          maintained, easy to book, and prepared for family trips, couples, and long-distance road adventures.
        </Typography>
      </Container>
    </Box>
  )
}

export default AboutWhyChooseSection
