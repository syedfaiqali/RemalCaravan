import { Box, Container, Grid, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'

function FeaturedRoadTripsSection() {
  const trips = [
    { title: 'Mountain Escape', duration: '7 Days through the peaks', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
    { title: 'Coastal Drive', duration: '10 Days ocean view journey', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { title: 'Desert Journey', duration: '5 Days golden sands trek', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35' },
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <MotionSection delay={100}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#0F172A',
                mb: 2
              }}
            >
              Featured Road Trips
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.2rem',
                color: '#64748b',
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              Hand-picked routes designed for the ultimate RV experience across the continent.
            </Typography>
          </Box>
        </MotionSection>

        <Grid container spacing={4}>
          {trips.map((trip, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <MotionSection delay={200 + index * 100}>
                <Box
                  sx={{
                    height: 600,
                    borderRadius: '32px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: `url(${trip.image}) center center/cover`,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    transition: '0.5s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      '& .overlay': { bgcolor: 'rgba(15, 23, 42, 0.7)' }
                    }
                  }}
                >
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(15, 23, 42, 0.4)',
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.9) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 6,
                      transition: '0.3s'
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                        fontSize: '2rem',
                        color: '#fff',
                        mb: 1
                      }}
                    >
                      {trip.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '1.1rem',
                        color: 'rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {trip.duration}
                    </Typography>
                  </Box>
                </Box>
              </MotionSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FeaturedRoadTripsSection
