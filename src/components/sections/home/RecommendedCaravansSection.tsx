import { Container, Grid, Typography, Box } from '@mui/material'
import { CaravanItem } from '../../../data/caravans'
import CustomCard from '../../common/CustomCard'

interface RecommendedCaravansSectionProps {
  caravans: CaravanItem[]
  onBookNow: (id: string) => void
}

function RecommendedCaravansSection({ caravans, onBookNow }: RecommendedCaravansSectionProps) {
  // To match screenshot exactly, we could mock the labels, 
  // but we'll map the actual data with specific variants
  return (
    <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#2b2b2b',
              lineHeight: 1.1,
              mb: 1.5,
            }}
          >
            Recommended For <br /> You
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1.2rem',
              color: '#5b5b5b',
              fontWeight: 400,
            }}
          >
            Based on your previous searches and preferences
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {caravans.slice(0, 4).map((caravan, index) => {
            // Mapping mockup labels for demonstration if needed, 
            // but for now using the passed data structure
            const mockupTitles = ['RV Model E', 'RV Model F', 'RV Model G', 'RV Model H']
            const mockupDesc = ['Premium Explorer', 'Compact Travel', 'Offroad Special', 'Luxury Liner']
            
            return (
              <Grid key={caravan.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <CustomCard
                  title={mockupTitles[index] || caravan.title}
                  description={mockupDesc[index] || caravan.sleeps}
                  image={caravan.image}
                  price="â‚¹XXX" // As per screenshot
                  btnBgColor="#fea116" // Solid black as seen in screenshot
                  btnTextColor="#FFFFFF"
                  onBookNow={() => onBookNow(caravan.id)}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default RecommendedCaravansSection




