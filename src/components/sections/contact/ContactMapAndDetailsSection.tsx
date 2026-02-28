import { Box, Grid, Paper, Stack, Typography } from '@mui/material'

function ContactMapAndDetailsSection() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ overflow: 'hidden', borderRadius: 3 }}>
          <Box
            component="iframe"
            src="https://www.google.com/maps?q=Shahrah-e-Faisal%20Karachi&output=embed"
            sx={{ width: '100%', height: { xs: 280, md: 520 }, border: 0 }}
            loading="lazy"
          />
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: { xs: 2.5, md: 4 }, height: '100%' }}>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Booking Your Best Tour With Caravan
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            From weekend escapes to long-distance adventures, we help you plan the right caravan experience with confidence. Our specialists
            guide you through route planning, caravan selection, and on-road support.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Visit our office or connect by call/WhatsApp for immediate assistance. We are committed to making your road trip smooth, safe, and
            memorable.
          </Typography>
          <Stack spacing={1.2}>
            <Typography color="text.secondary">Office: Suite 402, Shahrah-e-Faisal, PECHS, Karachi</Typography>
            <Typography color="text.secondary">Email: info@remalcaravan.com</Typography>
            <Typography color="text.secondary">Support Line: +92 300 8527737</Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ContactMapAndDetailsSection
