import { Container, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import SecurityIcon from '@mui/icons-material/Security'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import CustomCard from '../components/common/CustomCard'
import CustomButton from '../components/common/CustomButton'
import { premiumCaravans } from '../data/caravans'

const serviceItems = [
  {
    title: 'Flexible Booking',
    description: 'Daily and weekly plans with clear pricing and easy date adjustments.',
    icon: <AccessTimeFilledIcon color="primary" />,
  },
  {
    title: 'Roadside Support',
    description: 'Prompt technical support and guidance throughout your trip.',
    icon: <SupportAgentIcon color="primary" />,
  },
  {
    title: 'Safety Checked Fleet',
    description: 'Every caravan is inspected before handover for a safe journey.',
    icon: <SecurityIcon color="primary" />,
  },
  {
    title: 'Clean and Ready',
    description: 'Professional cleaning and quality checks before every booking.',
    icon: <CleaningServicesIcon color="primary" />,
  },
]

function ServicesPage() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Services Designed for Smooth Travel
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        We focus on reliability, convenience, and comfort from booking to return.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {serviceItems.map((service) => (
          <Grid key={service.title} size={{ xs: 12, sm: 6 }}>
            <CustomCard title={service.title} description={service.description}>
              <Stack direction="row" alignItems="center" spacing={1}>
                {service.icon}
                <Typography variant="caption" color="text.secondary">
                  Included with every rental
                </Typography>
              </Stack>
            </CustomCard>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom>
        Premium Fleet Options
      </Typography>
      <Grid container spacing={3}>
        {premiumCaravans.map((caravan) => (
          <Grid key={caravan.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomCard
              title={caravan.title}
              description={caravan.description}
              image={caravan.image}
              badge={caravan.pricePerDay}
              subBadge={caravan.sleeps}
              specs={caravan.quickSpecs}
            >
              <CustomButton onClick={() => navigate(`/caravan/${caravan.id}`)} color="primary" variant="outlined">
                View Details
              </CustomButton>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ServicesPage