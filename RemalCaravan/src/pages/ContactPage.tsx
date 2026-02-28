import { Container, Grid, Paper, TextField, Typography, Stack } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import CustomButton from '../components/common/CustomButton'

function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Send us your preferred travel dates and caravan type. We will get back quickly.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: { xs: 2.5, md: 4 } }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Name" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Email" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="Message" multiline rows={4} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomButton>Send Message</CustomButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Reach Us Directly
            </Typography>
            <Stack spacing={1.6}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <PlaceIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Dubai, United Arab Emirates
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <LocalPhoneIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  +971 50 000 0000
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <MailIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  bookings@remalcaravan.com
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactPage