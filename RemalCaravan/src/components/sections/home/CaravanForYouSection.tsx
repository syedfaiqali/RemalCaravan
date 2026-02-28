import { Box, Container, Grid, Typography } from '@mui/material'

interface CaravanForYouSectionProps {
  images: string[]
}

function CaravanForYouSection({ images }: CaravanForYouSectionProps) {
  return (
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
        {images.map((image, index) => (
          <Grid key={`${image}-${index}`} size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={image}
              alt={`Curated caravan ${index + 1}`}
              sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '50%',
                border: index === 0 ? '8px solid rgba(25,118,210,0.22)' : '8px solid rgba(255,152,0,0.2)',
                boxShadow: '0 24px 42px rgba(15,41,66,0.22)',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CaravanForYouSection
