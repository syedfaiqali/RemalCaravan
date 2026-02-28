import { Container, Grid, Stack, Typography } from '@mui/material'
import { CaravanItem } from '../../../data/caravans'
import CustomCard from '../../common/CustomCard'
import CustomButton from '../../common/CustomButton'

interface FeaturedCaravansSectionProps {
  caravans: CaravanItem[]
  onViewDetails: (id: string) => void
  onBookNow: (id: string) => void
}

function FeaturedCaravansSection({ caravans, onViewDetails, onBookNow }: FeaturedCaravansSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Featured Caravans
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Handpicked units with excellent condition, easy handling, and thoughtful interiors.
      </Typography>

      <Grid container spacing={3}>
        {caravans.map((caravan) => (
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
                <CustomButton onClick={() => onViewDetails(caravan.id)} color="primary" variant="outlined">
                  View Details
                </CustomButton>
                <CustomButton onClick={() => onBookNow(caravan.id)}>Book Now</CustomButton>
              </Stack>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default FeaturedCaravansSection
