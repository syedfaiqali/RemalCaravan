import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  Chip,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CustomButton from '../components/common/CustomButton'
import { getCaravanById } from '../data/caravans'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'

function CaravanDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const caravan = useMemo(() => (id ? getCaravanById(id) : undefined), [id])
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [activeIndex, setActiveIndex] = useState(0)

  if (!caravan) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Caravan not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          The requested caravan does not exist or has been removed.
        </Typography>
        <CustomButton onClick={() => navigate('/gallery')}>Back to Gallery</CustomButton>
      </Container>
    )
  }

  const gallery = caravan.gallery.length > 0 ? caravan.gallery : [caravan.image]

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const bookCaravan = () => {
    dispatch(selectCaravan(caravan.id))
    navigate('/booking')
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ position: 'relative', borderRadius: 3, overflow: 'hidden' }}>
            <Box
              component="img"
              src={gallery[activeIndex]}
              alt={`${caravan.title} photo ${activeIndex + 1}`}
              sx={{ width: '100%', height: { xs: 280, md: 430 }, objectFit: 'cover', display: 'block' }}
            />
            {gallery.length > 1 ? (
              <>
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.85)',
                  }}
                  aria-label="Previous image"
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.85)',
                  }}
                  aria-label="Next image"
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </>
            ) : null}
          </Box>

          <Stack direction="row" spacing={1} sx={{ mt: 1.5, overflowX: 'auto', pb: 1 }}>
            {gallery.map((img, index) => (
              <Box
                key={`${img}-${index}`}
                component="img"
                src={img}
                alt={`${caravan.title} thumbnail ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                sx={{
                  width: 88,
                  height: 66,
                  borderRadius: 1.5,
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: index === activeIndex ? '2px solid #1976d2' : '2px solid transparent',
                  opacity: index === activeIndex ? 1 : 0.84,
                }}
              />
            ))}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h4" gutterBottom>
            {caravan.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {caravan.description}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip label={caravan.pricePerDay} color="primary" />
            <Chip label={caravan.sleeps} color="secondary" variant="outlined" />
          </Stack>

          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mb: 3 }}>
            {caravan.quickSpecs.map((spec) => (
              <Chip key={spec} label={spec} variant="outlined" size="small" />
            ))}
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.3}>
            <CustomButton onClick={bookCaravan}>Book This Caravan</CustomButton>
            <CustomButton color="primary" variant="outlined" onClick={() => navigate('/gallery')}>
              Back to Gallery
            </CustomButton>
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        Full Specifications
      </Typography>
      <Grid container spacing={2}>
        {caravan.specs.map((spec) => (
          <Grid key={spec.label} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper sx={{ p: 2.2, height: '100%' }}>
              <Typography variant="caption" color="text.secondary">
                {spec.label}
              </Typography>
              <Typography variant="h6">{spec.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CaravanDetailsPage