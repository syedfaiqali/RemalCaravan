import { Box, Container, Grid, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import MapIcon from '@mui/icons-material/Map'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import MotionSection from '../../common/MotionSection'

function AboutWhyChooseSection() {
  const features = [
    {
      icon: <VerifiedIcon fontSize="large" />,
      title: 'Premium Quality',
      description: 'Our fleet consists of the latest models, meticulously maintained for your comfort and safety.'
    },
    {
      icon: <DirectionsBusIcon fontSize="large" />,
      title: 'Versatile Fleet',
      description: 'From compact vans for couples to large cruisers for families, we have the perfect RV for every group.'
    },
    {
      icon: <MapIcon fontSize="large" />,
      title: 'Expert Routes',
      description: 'We provide curated travel maps and expert advice to help you discover the hidden gems of the UAE.'
    },
    {
      icon: <ThumbUpAltIcon fontSize="large" />,
      title: 'Exceptional Service',
      description: 'Our team is dedicated to providing a seamless experience, from first inquiry to final return.'
    }
  ]

  return (
    <Box sx={{ py: { xs: 12, md: 15 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <MotionSection delay={100}>
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#3b82f6',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                mb: 2
              }}
            >
              Why Choose Remal RV
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                color: '#0F172A',
                lineHeight: 1.2,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Providing the Finest RV Experience in the Region
            </Typography>
          </Box>
        </MotionSection>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <MotionSection delay={200 + index * 100}>
                <Box
                  sx={{
                    p: { xs: 4, md: 5 },
                    height: '100%',
                    bgcolor: '#f8fafc',
                    borderRadius: '24px',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      bgcolor: '#fff',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
                      transform: 'translateY(-10px)',
                      borderColor: '#3b82f6'
                    }
                  }}
                >
                  <Box sx={{ color: '#3b82f6', mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#0F172A',
                      mb: 2
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '1rem',
                      color: '#64748b',
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </MotionSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutWhyChooseSection
