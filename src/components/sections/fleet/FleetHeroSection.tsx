import { Box, Container, Typography } from '@mui/material'

function FleetHeroSection() {
  return (
    <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 800,
            fontSize: { xs: '2.5rem', md: '4rem' },
            color: '#f39a1e',
            mb: 2,
            lineHeight: 1.1,
          }}
        >
          Explore Our Fleet
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            color: '#5b5b5b',
            maxWidth: '800px',
            lineHeight: 1.6,
          }}
        >
          Discover the perfect RV for your next adventure. From compact campervans for solo travelers
          to luxury integrated motorhomes for large families.
        </Typography>
      </Container>
    </Box>
  )
}

export default FleetHeroSection
