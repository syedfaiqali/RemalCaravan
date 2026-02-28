import { Container, Grid, Typography, Box, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'
import CustomCard from '../components/common/CustomCard'
import CustomButton from '../components/common/CustomButton'
import { premiumCaravans, galleryImages } from '../data/caravans'

function GalleryPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleBook = (id: string) => {
    dispatch(selectCaravan(id))
    navigate('/booking')
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Caravan Gallery
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Real visuals from our fleet so you can choose with confidence.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {premiumCaravans.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard
              title={item.title}
              description={item.description}
              image={item.image}
              badge={item.pricePerDay}
              subBadge={item.sleeps}
              specs={item.quickSpecs}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                <CustomButton onClick={() => navigate(`/caravan/${item.id}`)} color="primary" variant="outlined">
                  View Details
                </CustomButton>
                <CustomButton onClick={() => handleBook(item.id)}>Book Now</CustomButton>
              </Stack>
            </CustomCard>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom>
        More Photos
      </Typography>
      <Grid container spacing={2}>
        {galleryImages.map((img, index) => (
          <Grid key={`${img}-${index}`} size={{ xs: 6, sm: 4, md: 3 }}>
            <Box
              component="img"
              src={img}
              alt={`Remal caravan photo ${index + 1}`}
              sx={{
                width: '100%',
                height: { xs: 140, sm: 170, md: 190 },
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: '0 8px 20px rgba(0,0,0,0.14)',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default GalleryPage