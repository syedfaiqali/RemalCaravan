import { Box, Container, Grid, Typography, Stack } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CustomButton from '../../common/CustomButton'

interface CaravanForYouSectionProps {
  image: string
  onLearnMore: () => void
}

function CaravanForYouSection({ image, onLearnMore }: CaravanForYouSectionProps) {
  const features = [
    'Modern fleet with latest amenities',
    'GPS and emergency assistance included',
    'Unlimited mileage on select rentals',
  ]

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff9f3f' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '1.1 / 1',
                bgcolor: '#f3e4d2',
                borderRadius: '24px',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={image}
                alt="Our Journey"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
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




