import { Container, Grid, Box } from '@mui/material'
import { premiumCaravans } from '../../../data/caravans'
import CustomCard from '../../common/CustomCard'

interface FleetGridSectionProps {
  onBookNow: (id: string) => void
}

function FleetGridSection({ onBookNow }: FleetGridSectionProps) {
  return (
    <Box sx={{ pb: 10, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={4}>
          {premiumCaravans.map((caravan) => (
            <Grid key={caravan.id} size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
              <CustomCard
                title={caravan.title}
                description={caravan.description}
                image={caravan.image}
                // No price as per user request
                badge={caravan.sleeps}
                specs={caravan.quickSpecs}
                btnBgColor="#2b2b2b" // Premium dark button as in screenshot
                btnTextColor="#ffffff"
                onBookNow={() => onBookNow(caravan.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FleetGridSection
