import { Box, Container, Grid, Typography, Stack } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import MotionSection from '../../common/MotionSection'

function TravelFreelySection() {
  const features = [
    'Fully equipped kitchen and bathroom',
    '24/7 Roadside assistance anywhere',
    'Unlimited mileage options available'
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
          {/* Left Large Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={100}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '300px', sm: '450px', md: '650px' },
                  bgcolor: '#f1f5f9',
                  borderRadius: { xs: '24px', md: '40px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7"
                  alt="Travel Freely"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </MotionSection>
          </Grid>

          {/* Right Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={300}>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                  color: '#0F172A',
                  lineHeight: 1.1,
                  mb: { xs: 3, md: 4 }
                }}
              >
                Travel Freely <br />
                With Our RV
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '1.2rem',
                  color: '#64748b',
                  lineHeight: 1.8,
                  mb: 6,
                  maxWidth: '550px'
                }}
              >
                Experience the ultimate freedom of the open road. Our RVs are more than just vehicles; they are your mobile homes equipped with all the essentials. No more hotel bookings or rigid schedules — just you and the horizon.
              </Typography>

              <Stack spacing={3}>
                {features.map((feature) => (
                  <Stack key={feature} direction="row" spacing={2} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: '#0F172A', fontSize: 24 }} />
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: '#0F172A'
                      }}
                    >
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </MotionSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TravelFreelySection
