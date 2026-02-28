import { Container, Grid, Paper, Typography, Box } from '@mui/material'
import { heroImage } from '../data/caravans'

function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        About RemalCaravan
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        We provide high-quality caravans for travelers who value comfort, reliability, and clean design.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component="img"
            src={heroImage}
            alt="RemalCaravan overview"
            sx={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 3 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Why Travelers Choose Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Clean and maintained fleet with transparent package details.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Friendly booking support and clear handover process.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Multiple caravan options for couples, families, and large groups.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutPage