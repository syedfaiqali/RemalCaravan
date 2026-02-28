import { useRef } from 'react'
import { Box, Container, Grid, Paper, Stack, Typography, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'
import CustomCard from '../components/common/CustomCard'
import CustomButton from '../components/common/CustomButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { featuredCaravans, heroImage } from '../data/caravans'
import image1s from '../assets/1s.jpg'
import image2s from '../assets/2s.jpg'
import image3s from '../assets/3s.jpg'
import image4s from '../assets/4s.jpg'
import image5s from '../assets/5s.jpg'
import image6s from '../assets/6s.jpg'
import image7s from '../assets/7s.jpg'
import image8s from '../assets/8s.jpg'
import image9s from '../assets/9s.jpg'
import image1b from '../assets/1b.jpg'
import image2b from '../assets/2b.jpg'
import image3b from '../assets/3b.jpg'
import image4b from '../assets/4b.jpg'

const recommendedDestinations = [
  { name: 'Hunza Valley', image: image4s },
  { name: 'Skardu', image: image3s },
  { name: 'Swat Valley', image: image2s },
  { name: 'Neelum Valley', image: image1s },
  { name: 'Lahore', image: image5s },
  { name: 'Fairy Meadows', image: image6s },
]

const popularDestinations = [
  { name: 'Neelum Valley', image: image1s },
  { name: 'Swat Valley', image: image2s },
  { name: 'Skardu', image: image3s },
  { name: 'Hunza Valley', image: image4s },
]

function HomePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const recommendedScrollRef = useRef<HTMLDivElement | null>(null)

  const handleSelect = (id: string) => {
    dispatch(selectCaravan(id))
    navigate('/booking')
  }

  const scrollRecommended = (direction: 'left' | 'right') => {
    if (!recommendedScrollRef.current) return
    const amount = Math.round(recommendedScrollRef.current.clientWidth * 0.8)
    recommendedScrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Box
        sx={{
          py: { xs: 7, md: 10 },
          color: '#fff',
          backgroundImage: `linear-gradient(rgba(13,35,67,0.74), rgba(13,35,67,0.68)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ maxWidth: 760, mb: 2 }}>
            Rent Beautiful Caravans and Travel in Comfort
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 720, mb: 3, fontWeight: 400, opacity: 0.95 }}>
            Choose from a modern fleet, transparent pricing, and reliable support for every journey.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <CustomButton onClick={() => navigate('/gallery')}>View Full Gallery</CustomButton>
            <CustomButton color="primary" variant="outlined" onClick={() => navigate('/services')}>
              Explore Services
            </CustomButton>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Featured Caravans
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Handpicked units with excellent condition, easy handling, and thoughtful interiors.
        </Typography>

        <Grid container spacing={3}>
          {featuredCaravans.map((caravan) => (
            <Grid key={caravan.id} size={{ xs: 12, md: 4 }}>
              <CustomCard
                title={caravan.title}
                description={caravan.description}
                image={caravan.image}
                badge={caravan.pricePerDay}
                subBadge={caravan.sleeps}
                specs={caravan.quickSpecs}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                  <CustomButton onClick={() => navigate(`/caravan/${caravan.id}`)} color="primary" variant="outlined">
                    View Details
                  </CustomButton>
                  <CustomButton onClick={() => handleSelect(caravan.id)}>Book Now</CustomButton>
                </Stack>
              </CustomCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Typography variant="h3" align="center" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'secondary.main' }}>
            Caravan
          </Box>{' '}
          For You
        </Typography>
        <Typography align="center" color="primary.main" sx={{ fontWeight: 700, mb: 4 }}>
          Curated specially for you
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={image1b}
              alt="Curated caravan 1"
              sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '8px solid rgba(25,118,210,0.22)',
                boxShadow: '0 24px 42px rgba(15,41,66,0.22)',
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={image2b}
              alt="Curated caravan 2"
              sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '8px solid rgba(255,152,0,0.2)',
                boxShadow: '0 24px 42px rgba(15,41,66,0.22)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ py: 7 }}>
        <Container maxWidth="xl">
          <Typography variant="h3" align="center" sx={{ mb: 1 }}>
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Recommended
            </Box>{' '}
            For You
          </Typography>
          <Typography align="center" color="primary.main" sx={{ fontWeight: 700, mb: 3 }}>
            Curated specially for you
          </Typography>

          <Box sx={{ position: 'relative' }}>
            <IconButton
              aria-label="Move images left"
              onClick={() => scrollRecommended('left')}
              sx={{
                position: 'absolute',
                left: { xs: -8, sm: -14 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                bgcolor: 'rgba(15,41,66,0.82)',
                color: '#fff',
                width: 42,
                height: 42,
                '&:hover': { bgcolor: 'rgba(15,41,66,0.95)' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              aria-label="Move images right"
              onClick={() => scrollRecommended('right')}
              sx={{
                position: 'absolute',
                right: { xs: -8, sm: -14 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                bgcolor: 'rgba(15,41,66,0.82)',
                color: '#fff',
                width: 42,
                height: 42,
                '&:hover': { bgcolor: 'rgba(15,41,66,0.95)' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            <Stack
              ref={recommendedScrollRef}
              direction="row"
              spacing={2}
              sx={{
                overflowX: 'auto',
                pb: 1.5,
                px: { xs: 2.4, sm: 2.8 },
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {recommendedDestinations.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    minWidth: { xs: 220, sm: 250, md: 280 },
                    height: { xs: 280, md: 350 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    flex: '0 0 auto',
                    boxShadow: '0 14px 34px rgba(15,41,66,0.18)',
                  }}
                >
                  <Box component="img" src={item.image} alt={item.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(5,20,35,0.08) 35%, rgba(5,20,35,0.7) 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          <Box component="span" sx={{ color: 'secondary.main' }}>
            Popular
          </Box>{' '}
          Destinations
        </Typography>
        <Grid container spacing={2.5}>
          {popularDestinations.map((item) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                sx={{
                  overflow: 'hidden',
                  borderRadius: 3,
                  position: 'relative',
                  height: { xs: 280, sm: 360 },
                }}
              >
                <Box component="img" src={item.image} alt={item.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(15,41,66,0.08) 35%, rgba(15,41,66,0.78) 100%)',
                    p: 2,
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>
                    {item.name}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ py: 7 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component="span"
              sx={{
                bgcolor: 'rgba(25,118,210,0.08)',
                color: 'primary.dark',
                px: 2,
                py: 0.8,
                borderRadius: 2,
                fontWeight: 700,
                display: 'inline-block',
                mb: 2,
              }}
            >
              About Us
            </Typography>
            <Typography variant="h2" sx={{ mb: 2.2 }}>
              Let&apos;s know About Our Journey For RemalCaravan.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Fully equipped caravans are available from RemalCaravan to help make your road excursions more comfortable and manageable.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              We provide premium services for renting camping caravans with AC, kitchen comfort, and practical space for sleep, dining, and
              family travel moments.
            </Typography>
            <CustomButton onClick={() => navigate('/about')}>More About</CustomButton>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={1.2}>
              <Grid size={{ xs: 12 }}>
                <Box component="img" src={image3b} alt="About caravan exterior" sx={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: 3 }} />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box component="img" src={image7s} alt="Caravan detail 1" sx={{ width: '100%', height: 165, objectFit: 'cover', borderRadius: 3 }} />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box component="img" src={image8s} alt="Caravan detail 2" sx={{ width: '100%', height: 165, objectFit: 'cover', borderRadius: 3 }} />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box component="img" src={image9s} alt="Caravan detail 3" sx={{ width: '100%', height: 165, objectFit: 'cover', borderRadius: 3 }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ pb: 8 }}>
        <Box
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            minHeight: { xs: 400, md: 540 },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: `linear-gradient(90deg, rgba(5,18,32,0.82) 0%, rgba(5,18,32,0.58) 38%, rgba(5,18,32,0.18) 60%), url(${image4b})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: 690, color: '#fff' }}>
            <Typography sx={{ fontWeight: 700, opacity: 0.92, mb: 1 }}>Hassle-Free Rental Experience</Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Experience the RemalCaravan Difference
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 400, color: 'rgba(255,255,255,0.92)' }}>
              Easy booking, flexible packages, and responsive support from first contact to final handover.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.3}>
              <CustomButton onClick={() => navigate('/booking')}>Book Your Caravan</CustomButton>
              <CustomButton color="primary" variant="outlined" onClick={() => navigate('/contact')}>
                Learn More
              </CustomButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HomePage
