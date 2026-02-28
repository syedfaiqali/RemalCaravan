import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import GppGoodIcon from '@mui/icons-material/GppGood'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import WalletIcon from '@mui/icons-material/Wallet'
import image2b from '../assets/2b.jpg'
import image3b from '../assets/3b.jpg'
import image4b from '../assets/4b.jpg'
import image5s from '../assets/5s.jpg'
import image6s from '../assets/6s.jpg'
import image7s from '../assets/7s.jpg'
import image8s from '../assets/8s.jpg'

const highlights = [
  {
    icon: <CurrencyRupeeIcon sx={{ fontSize: 40 }} />,
    title: 'Affordable Pricing',
    text: 'Budget-friendly plans with premium quality so your journey stays practical and memorable.',
  },
  {
    icon: <GppGoodIcon sx={{ fontSize: 40 }} />,
    title: 'Fully Insured',
    text: 'Travel confidently with insured fleet options and reliable safety-first preparation.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    text: 'Our team is ready around the clock to assist during booking, pickup, and the trip itself.',
  },
  {
    icon: <WalletIcon sx={{ fontSize: 40 }} />,
    title: 'Easy Booking',
    text: 'Fast inquiry flow, clear terms, and simple reservation steps from start to finish.',
  },
]

function AboutPage() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 520, md: 620 },
          display: 'flex',
          alignItems: 'flex-end',
          py: 5,
          backgroundImage: `linear-gradient(180deg, rgba(8,23,40,0.68) 0%, rgba(8,23,40,0.76) 100%), url(${image2b})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Paper
            sx={{
              mb: 3,
              px: 2.2,
              py: 1.2,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography fontWeight={800} color="primary.dark">
              About RemalCaravan
            </Typography>
          </Paper>

          <Grid
            container
            spacing={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.25)',
              bgcolor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {highlights.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    p: 3,
                    color: '#fff',
                    minHeight: 250,
                    borderRight: { md: '1px solid rgba(255,255,255,0.18)' },
                    borderBottom: { xs: '1px solid rgba(255,255,255,0.18)', md: 'none' },
                  }}
                >
                  {item.icon}
                  <Typography variant="h5" sx={{ mt: 1, mb: 1.2, color: '#fff' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.92)' }}>{item.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 7 }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                display: 'inline-block',
                px: 2.3,
                py: 0.9,
                borderRadius: 2,
                bgcolor: 'rgba(25,118,210,0.08)',
                color: 'primary.dark',
                fontWeight: 800,
                mb: 2,
              }}
            >
              About Us
            </Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Let&apos;s know About Our Journey For RemalCaravan
            </Typography>
            <Typography variant="h5" color="primary.dark" sx={{ mb: 2.5 }}>
              Caravan on Hire in Karachi
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Welcome to RemalCaravan, where adventure meets convenience. As passionate travelers ourselves, we understand the joy of
              exploring the outdoors without sacrificing comfort. That is why we offer top-quality caravans at competitive rates.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Our easy booking process ensures your adventure begins with just a few clicks. With insured options and responsive assistance,
              you can travel with peace of mind on every route.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Customer satisfaction is at the heart of everything we do. Whether you are planning a weekend getaway or a cross-country road
              trip, our team is dedicated to helping you choose the perfect caravan.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Join us on the open road and create memories that last a lifetime with comfort, style, and dependable support.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 7 }}>
                <Box
                  component="img"
                  src={image3b}
                  alt="Road journey"
                  sx={{ width: '100%', height: 290, objectFit: 'cover', borderRadius: 3 }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }}>
                <Stack spacing={2}>
                  <Box
                    component="img"
                    src={image5s}
                    alt="Travel night stay"
                    sx={{ width: '100%', height: 138, objectFit: 'cover', borderRadius: 3 }}
                  />
                  <Box
                    component="img"
                    src={image6s}
                    alt="Open sky evening"
                    sx={{ width: '100%', height: 138, objectFit: 'cover', borderRadius: 3 }}
                  />
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 7 }}>
                <Box
                  component="img"
                  src={image7s}
                  alt="Desert caravan road"
                  sx={{ width: '100%', height: 210, objectFit: 'cover', borderRadius: 3 }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }}>
                <Box
                  component="img"
                  src={image8s}
                  alt="Travel couple"
                  sx={{ width: '100%', height: 210, objectFit: 'cover', borderRadius: 3 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.dark', color: '#fff', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ mb: 2, color: '#fff' }}>
            Why Choose Caravan?
          </Typography>
          <Typography align="center" sx={{ fontSize: { xs: 20, md: 34 }, fontWeight: 700, mb: 3 }}>
            Talk to us today
          </Typography>
          <Typography align="center" sx={{ maxWidth: 1000, mx: 'auto', color: 'rgba(255,255,255,0.9)' }}>
            Affordability, comfort, convenience, peace of mind, and exceptional support define our rental experience. Our fleet is regularly
            maintained, easy to book, and prepared for family trips, couples, and long-distance road adventures.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: { xs: 2.5, md: 4 }, height: '100%' }}>
              <Typography variant="h3" color="primary.dark" sx={{ mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our mission is to provide travelers with the freedom to explore in comfort and style. We are dedicated to offering quality
                caravans at practical pricing, backed by responsive support and transparent service at every step.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: { xs: 2.5, md: 4 }, height: '100%' }}>
              <Typography variant="h3" color="primary.dark" sx={{ mb: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our vision is to inspire a world where every traveler can embrace open-road freedom without compromise. We aim to be the
                trusted destination for reliable, affordable, and memorable caravan travel experiences.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box
          component="img"
          src={image4b}
          alt="RemalCaravan fleet"
          sx={{ width: '100%', mt: 4, borderRadius: 3, height: { xs: 220, md: 320 }, objectFit: 'cover' }}
        />
      </Container>
    </>
  )
}

export default AboutPage
