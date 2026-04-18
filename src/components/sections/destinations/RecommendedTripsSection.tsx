import { Box, Container, Grid, Typography, Button, Stack, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import MotionSection from '../../common/MotionSection'
import jebelHafeet from '../../../assets/jebel_hafeet.webp'
import liwaDesert from '../../../assets/liwa_desert.webp'
import hattaMountains from '../../../assets/hatta_mountains.webp'
import alQudraLakes from '../../../assets/al_qudra_lakes.webp'

function RecommendedTripsSection() {
  const trips = [
    { title: 'Jebel Hafeet', description: 'Scenic mountain drive with sunset views over Al Ain.', days: '2 Days', image: jebelHafeet },
    { title: 'Liwa Desert', description: 'Stunning dunes and starry nights in the Empty Quarter.', days: '3 Days', image: liwaDesert },
    { title: 'Hatta Lake', description: 'Adventure and calm waters in the Hajar Mountains.', days: '2 Days', image: hattaMountains },
    { title: 'Al Qudra', description: 'Desert lakes, wildlife, and perfect camping spots.', days: '1 Day', image: alQudraLakes },
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <MotionSection delay={100}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            justifyContent="space-between" 
            alignItems={{ xs: 'flex-start', sm: 'flex-end' }} 
            spacing={3}
            sx={{ mb: 8 }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#2b2b2b',
                  mb: 1
                }}
              >
                Recommended Trips
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  color: '#5b5b5b',
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
                color: '#2b2b2b',
                textTransform: 'none',
                fontSize: '1.1rem',
                p: { xs: 0, sm: 1 },
                '&:hover': { bgcolor: 'transparent', color: '#f39a1e' }
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
                    border: '1px solid #d3deea',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
                      transform: 'translateY(-5px)',
                      borderColor: '#f39a1e'
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
                        color: '#2b2b2b',
                        mb: 1
                      }}
                    >
                      {trip.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#5b5b5b',
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
                          bgcolor: '#f3e4d2',
                          color: '#2b2b2b',
                          borderRadius: '8px'
                        }} 
                      />
                      <Button
                        sx={{
                          textTransform: 'none',
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 700,
                          color: '#2b2b2b',
                          minWidth: 0,
                          p: 0,
                          '&:hover': { bgcolor: 'transparent', color: '#f39a1e' }
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


