import { Box, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import CustomButton from '../../common/CustomButton'

interface ContactEnquirySectionProps {
  sideImage: string
}

function ContactEnquirySection({ sideImage }: ContactEnquirySectionProps) {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Paper sx={{ p: { xs: 2.5, md: 4 }, height: '100%' }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Send Us an Enquiry
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Share your travel dates and caravan preference. Our booking team will contact you quickly with available options and pricing.
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Full Name" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Phone Number" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Email Address" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField select fullWidth label="Service Type" defaultValue="rental">
                <MenuItem value="rental">Caravan Rental</MenuItem>
                <MenuItem value="family">Family Caravan Tour</MenuItem>
                <MenuItem value="corporate">Corporate / Event</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Trip Date Range" placeholder="e.g. 12 Aug - 18 Aug" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth multiline rows={5} label="Message" placeholder="Tell us your destination, group size, and any special requirements." />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CustomButton>Submit Enquiry</CustomButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <Stack spacing={2.2}>
          <Paper sx={{ p: 3 }}>
            <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1 }}>
              <AccessTimeFilledIcon color="primary" />
              <Typography variant="h5">Working Hours</Typography>
            </Stack>
            <Typography color="text.secondary">Mon - Sat: 9:00 AM to 8:00 PM</Typography>
            <Typography color="text.secondary">Sunday: 11:00 AM to 6:00 PM</Typography>
          </Paper>

          <Box component="img" src={sideImage} alt="Caravan contact preview" sx={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 3 }} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ContactEnquirySection
