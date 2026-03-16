import { Box, Container, Grid, Typography, Button, Stack, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import MotionSection from '../../common/MotionSection'

function RecommendedTripsSection() {
  const trips = [
    { title: 'Valley Run', description: 'Scenic drive through the green valleys.', days: '4 Days', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
    { title: 'Canyon Loop', description: 'Exploring deep red rock formations.', days: '6 Days', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35' },
    { title: 'Northern Lights', description: 'A winter journey to see the aurora.', days: '8 Days', image: 'https://images.unsplash.com/photo-1531366930491-81bca1dc63fd' },
    { title: 'River Cruise', description: 'Parallel journey along the river banks.', days: '3 Days', image: 'https://images.unsplash.com/photo-1437330119462-2e210583bc47' },
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <MotionSection delay={100}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 8 }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#0F172A',
                  mb: 1
                }}
              >
                Recommended Trips
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '1.2rem',
                  color: '#64748b',
                }}
              >
                Curated itineraries based on traveler reviews.
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                color: '#0F172A',
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': { bgcolor: 'transparent', color: '#3b82f6' }
              }}
            >
              View All Trips
            </Button>
          </Stack>
        </MotionSection>

        <Grid container spacing={3}>
          {trips.map((trip, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <MotionSection delay={200 + index * 100}>
                <Box
                  sx={{
                    bgcolor: '#fff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
                      transform: 'translateY(-5px)',
                      borderColor: '#3b82f6'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={trip.image}
                    alt={trip.title}
                    sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 3.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.4rem',
                        color: '#0F172A',
                        mb: 1
                      }}
                    >
                      {trip.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#64748b',
                        fontSize: '0.9rem',
                        mb: 3,
                        lineHeight: 1.5,
                        minHeight: '3em'
                      }}
                    >
                      {trip.description}
                    </Typography>
                    
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Chip 
                        label={trip.days} 
                        size="small"
                        sx={{ 
                          fontFamily: '"Plus Jakarta Sans", sans-serif', 
                          fontWeight: 600,
                          bgcolor: '#f1f5f9',
                          color: '#0F172A',
                          borderRadius: '8px'
                        }} 
                      />
                      <Button
                        sx={{
                          textTransform: 'none',
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 700,
                          color: '#0F172A',
                          minWidth: 0,
                          p: 0,
                          '&:hover': { bgcolor: 'transparent', color: '#3b82f6' }
                        }}
                      >
                        Plan Trip
                      </Button>
                    </Stack>
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

export default RecommendedTripsSection
