import { Container, Grid, Typography, Box } from '@mui/material'
import { CaravanItem } from '../../../data/caravans'
import CustomCard from '../../common/CustomCard'

interface FeaturedCaravansSectionProps {
  caravans: CaravanItem[]
  onBookNow: (id: string) => void
}

function FeaturedCaravansSection({ caravans, onBookNow }: FeaturedCaravansSectionProps) {
  return (
    <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#2b2b2b',
              mb: 1,
            }}
          >
            RV For You
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1.2rem',
              color: '#5b5b5b',
              fontWeight: 400,
            }}
          >
            Curated specially for you
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {caravans.slice(0, 4).map((caravan) => (
            <Grid key={caravan.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomCard
                title={caravan.title}
                description={caravan.sleeps} // Using sleeps count as description to match screenshot
                image={caravan.image}
                price={caravan.pricePerDay}
                btnBgColor="#fea116" // Solid black as seen in screenshot
                btnTextColor="#FFFFFF"
                onBookNow={() => onBookNow(caravan.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FeaturedCaravansSection


