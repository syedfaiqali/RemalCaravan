import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, Stack, Fade } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CustomButton from '../../common/CustomButton'
import { featuredCaravans } from '../../../data/caravans'

interface CaravanForYouSectionProps {
  onLearnMore: () => void
}

function CaravanForYouSection({ onLearnMore }: CaravanForYouSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Get 8 images from caravans data (using fallback if images repeat in mock data)
  const sliderImages = [
    featuredCaravans[0].image, // Star Light
    featuredCaravans[1].image, // Sunshine (Uses same mock img but logically separate)
    featuredCaravans[2].image, // Oasis
    featuredCaravans[3].image, // Falcon Rover
    featuredCaravans[4].image, // Apex Blazer
    featuredCaravans[5].image, // Desert Glory
    featuredCaravans[6].image, // Rainbow
    featuredCaravans[7].image, // Terra
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [sliderImages.length])

  const features = [
    'Modern fleet with latest amenities',
    'GPS and emergency assistance included',
    'Unlimited mileage on select rentals',
  ]

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff9f3' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '1.2 / 1',
                bgcolor: '#f3e4d2',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              {sliderImages.map((img, idx) => (
                <Fade key={idx} in={currentIndex === idx} timeout={1000}>
                  <Box
                    component="img"
                    src={img}
                    alt={`Caravan Journey ${idx + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: idx === 0 ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: currentIndex === idx ? 1 : 0
                    }}
                  />
                </Fade>
              ))}
              {/* Navigation Dots */}
              <Stack
                direction="row"
                spacing={1.2}
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(4px)',
                  px: 2,
                  py: 1,
                  borderRadius: '20px'
                }}
              >
                {sliderImages.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    sx={{
                      width: currentIndex === idx ? 12 : 8,
                      height: 8,
                      borderRadius: '4px',
                      bgcolor: currentIndex === idx ? '#ffb84d' : 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#ffb84d',
                        transform: 'scale(1.2)'
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ffb84d',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 1.5,
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '2.7rem' },
                color: '#2b2b2b',
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Let's know About Our Journey
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.1rem',
                color: '#5b5b5b',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Remal RV Caravan started with a simple vision: to provide travelers with the freedom of the open road without sacrificing the comforts of home. Our fleet features modern, fully-equipped caravans perfect for families and solo explorers alike.
            </Typography>

            <Stack spacing={2} sx={{ mb: 5 }}>
              {features.map((feature) => (
                <Stack key={feature} direction="row" spacing={2} alignItems="center">
                  <CheckCircleOutlineIcon sx={{ color: '#ffb84d', fontSize: '1.5rem' }} />
                  <Typography
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#5b5b5b',
                    }}
                  >
                    {feature}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <CustomButton
              onClick={onLearnMore}
              bgColor="#fea116"
              textColor="#FFFFFF"
              sx={{ px: 4, py: 1.8, fontWeight: 700 }}
            >
              MORE ABOUT US
            </CustomButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CaravanForYouSection




