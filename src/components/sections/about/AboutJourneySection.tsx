import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'

interface AboutJourneySectionProps {
  images: {
    large: string
    sideTop: string
    sideBottom: string
    bottomWide: string
    bottomTall: string
  }
}

function AboutJourneySection({ images }: AboutJourneySectionProps) {
  const bodyStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1.05rem',
    color: '#5b5b5b',
    lineHeight: 1.8,
    mb: 3
  }

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff9f3' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={100}>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#f39a1e',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  mb: 2.5
                }}
              >
                Our Journey
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', md: '3.2rem' },
                  color: '#2b2b2b',
                  lineHeight: 1.1,
                  mb: 4
                }}
              >
                Connecting the Seven Emirates Through Adventure
              </Typography>
              
              <Typography sx={bodyStyle}>
                Welcome to Remal RV Caravan, the premier choice for luxury road travel in the UAE. Our journey began with a simple vision: to make the breathtaking landscapes of the Emirates accessible to everyone through the comfort of an RV.
              </Typography>
              <Typography sx={bodyStyle}>
                From the towering dunes of Liwa to the rugged mountains of Ras Al Khaimah, we have helped thousands of travelers create unforgettable memories. Our fleet is curated to handle the unique terrain of the region while providing all the amenities of a home.
              </Typography>
              <Typography sx={{ ...bodyStyle, mb: 0 }}>
                Whether you're a local family seeking a staycation like no other or an international traveler looking to explore the hidden gems of the UAE, we are here to ensure your journey is smooth, safe, and truly exceptional.
              </Typography>
            </MotionSection>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={300}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 7 }}>
                  <Box 
                    component="img" 
                    src={images.large} 
                    alt="UAE Journey" 
                    sx={{ 
                      width: '100%', 
                      height: { xs: 300, md: 350 }, 
                      objectFit: 'cover', 
                      borderRadius: '24px',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 5 }}>
                  <Stack spacing={2}>
                    <Box 
                      component="img" 
                      src={images.sideTop} 
                      alt="Desert Camping" 
                      sx={{ 
                        width: '100%', 
                        height: { xs: 140, md: 166 }, 
                        objectFit: 'cover', 
                        borderRadius: '24px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Box 
                      component="img" 
                      src={images.sideBottom} 
                      alt="Caravan Side" 
                      sx={{ 
                        width: '100%', 
                        height: { xs: 140, md: 166 }, 
                        objectFit: 'cover', 
                        borderRadius: '24px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 7 }}>
                  <Box 
                    component="img" 
                    src={images.bottomWide} 
                    alt="Road Trip UAE" 
                    sx={{ 
                      width: '100%', 
                      height: { xs: 200, md: 250 }, 
                      objectFit: 'cover', 
                      borderRadius: '24px',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 5 }}>
                  <Box 
                    component="img" 
                    src={images.bottomTall} 
                    alt="RV Lifestyle" 
                    sx={{ 
                      width: '100%', 
                      height: { xs: 200, md: 250 }, 
                      objectFit: 'cover', 
                      borderRadius: '24px',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }} 
                  />
                </Grid>
              </Grid>
            </MotionSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutJourneySection


