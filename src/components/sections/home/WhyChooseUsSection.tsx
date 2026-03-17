import { Box, Container, Grid, Typography, Stack } from '@mui/material'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'

function WhyChooseUsSection() {
  const features = [
    {
      title: 'Personalized Service',
      description: 'Tailored rental plans to suit your specific trip needs.',
      icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: '2rem', color: '#2b2b2b' }} />,
    },
    {
      title: 'Destination Knowledge',
      description: 'Expert advice on the best routes and hidden spots.',
      icon: <MapOutlinedIcon sx={{ fontSize: '2rem', color: '#2b2b2b' }} />,
    },
    {
      title: 'Hassle-Free Planning',
      description: 'Easy booking system and seamless paperwork.',
      icon: <CalendarTodayOutlinedIcon sx={{ fontSize: '2rem', color: '#2b2b2b' }} />,
    },
    {
      title: '24/7 Support',
      description: 'We are always a call away for any roadside assistance.',
      icon: <HeadsetMicOutlinedIcon sx={{ fontSize: '2rem', color: '#2b2b2b' }} />,
    },
  ]

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              color: '#2b2b2b',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              mb: 2.5,
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#5b5b5b',
              fontWeight: 400,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            We provide more than just a vehicle; we provide freedom and bonding experiences that last a lifetime across the UAE.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack alignItems="center" textAlign="center" spacing={3}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: '#f3e4d2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#2b2b2b',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '1.1rem',
                    color: '#5b5b5b',
                    lineHeight: 1.6,
                    px: { md: 2 },
                  }}
                >
                  {feature.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default WhyChooseUsSection


