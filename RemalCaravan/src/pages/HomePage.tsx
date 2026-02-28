import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'
import CustomCard from '../components/common/CustomCard'
import CustomButton from '../components/common/CustomButton'
import { featuredCaravans, heroImage } from '../data/caravans'

function HomePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSelect = (id: string) => {
    dispatch(selectCaravan(id))
    navigate('/booking')
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
    </>
  )
}

export default HomePage