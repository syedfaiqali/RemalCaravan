import {
  Box,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NearMeIcon from '@mui/icons-material/NearMe'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import CustomButton from '../components/common/CustomButton'
import image3b from '../assets/3b.jpg'
import image4b from '../assets/4b.jpg'

const contactCards = [
  {
    icon: <PhoneInTalkIcon sx={{ fontSize: 40 }} />,
    title: 'Phone No',
    value: '+92 300 8527737',
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: 40 }} />,
    title: 'Mail',
    value: 'info@remalcaravan.com',
  },
  {
    icon: <NearMeIcon sx={{ fontSize: 40 }} />,
    title: 'Address',
    value: 'Suite 402, Shahrah-e-Faisal, PECHS, Karachi',
  },
]

function ContactPage() {
  return (
    <>
      <Box
        sx={{
          minHeight: { xs: 280, md: 360 },
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `linear-gradient(90deg, rgba(9,22,35,0.72) 0%, rgba(9,22,35,0.3) 65%), url(${image3b})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Paper
            sx={{
              display: 'inline-flex',
              px: 2.2,
              py: 0.9,
              mb: 1.5,
              bgcolor: 'rgba(255,255,255,0.2)',
              color: '#fff',
              fontWeight: 800,
              backdropFilter: 'blur(8px)',
            }}
          >
            Enquiry RemalCaravan
          </Paper>
          <Typography variant="h1" sx={{ color: '#fff' }}>
            Contact Us
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={2}>
          {contactCards.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  borderTop: '3px solid',
                  borderBottom: '3px solid',
                  borderColor: 'primary.main',
                  minHeight: 260,
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 1.5 }}>{item.icon}</Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {item.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ pb: 6 }}>
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

              <Box
                component="img"
                src={image4b}
                alt="Caravan contact preview"
                sx={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 3 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ pb: 8 }}>
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
                Visit our office or connect by call/WhatsApp for immediate assistance. We are committed to making your road trip smooth, safe,
                and memorable.
              </Typography>
              <Stack spacing={1.2}>
                <Typography color="text.secondary">Office: Suite 402, Shahrah-e-Faisal, PECHS, Karachi</Typography>
                <Typography color="text.secondary">Email: info@remalcaravan.com</Typography>
                <Typography color="text.secondary">Support Line: +92 300 8527737</Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ContactPage
