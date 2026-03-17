import { Box, Container, Grid, Typography, Stack } from '@mui/material'
import MotionSection from '../../common/MotionSection'

interface AboutStorySectionProps {
  image: string
}

function AboutStorySection({ image }: AboutStorySectionProps) {
  const timelineData = [
    { year: '2018', title: 'Company Founded', text: 'Started with a passion for open-road exploration.' },
    { year: '2019', title: 'First RV Fleet Added', text: 'Expanded our collection with premium caravan models.' },
    { year: '2022', title: 'Expanded to Multiple Destinations', text: 'Now covering all Seven Emirates across the UAE.' },
    { year: '2024', title: '1000+ Happy Travelers', text: 'Celebrating a milestone of unforgettable journeys.' },
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
          {/* Left Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={100}>
              <Box
                component="img"
                src={image}
                alt="Our Story"
                sx={{
                  width: '100%',
                  height: { xs: '400px', md: '600px' },
                  objectFit: 'cover',
                  borderRadius: '40px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                }}
              />
            </MotionSection>
          </Grid>

          {/* Right Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={300}>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#2b2b2b',
                  lineHeight: 1.2,
                  mb: 4,
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '1.1rem',
                  color: '#5b5b5b',
                  lineHeight: 1.8,
                  mb: 6,
                }}
              >
                Founded on a passion for exploration, Remal RV Caravan began with a single vehicle and a vision to democratize luxury road travel. We believe that the journey is just as important as the destination, providing modern, fully-equipped homes on wheels for adventurers of all kinds.
              </Typography>

              {/* Timeline */}
              <Stack spacing={4}>
                {timelineData.map((item, index) => (
                  <Stack key={index} direction="row" spacing={3} alignItems="flex-start">
                    <Box sx={{ pt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          bgcolor: '#f39a1e',
                          flexShrink: 0
                        }}
                      />
                      {index !== timelineData.length - 1 && (
                        <Box 
                          sx={{ 
                            width: '2px', 
                            flexGrow: 1, 
                            minHeight: '40px',
                            bgcolor: '#d3deea',
                            mt: 1,
                            mb: -1 
                          }} 
                        />
                      )}
                    </Box>
                    <Box sx={{ pb: index !== timelineData.length - 1 ? 4 : 0 }}>
                      <Typography
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          color: '#2b2b2b',
                          mb: 0.5
                        }}
                      >
                        {item.year}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontWeight: 600,
                          color: '#f39a1e',
                          fontSize: '0.95rem',
                          mb: 0.5
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          color: '#5b5b5b',
                          fontSize: '0.9rem'
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
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

export default AboutStorySection


