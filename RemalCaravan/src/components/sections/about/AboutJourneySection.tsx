import { Box, Container, Grid, Stack, Typography } from '@mui/material'

interface AboutJourneySectionProps {
  images: {
    large: string
    sideTop: string
    sideBottom: string
    bottomWide: string
    bottomTall: string
  }
}

function AboutJourneySection({ images }: AboutJourneySectionProps) {
  return (
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
            Welcome to RemalCaravan, where adventure meets convenience. As passionate travelers ourselves, we understand the joy of exploring
            the outdoors without sacrificing comfort. That is why we offer top-quality caravans at competitive rates.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Our easy booking process ensures your adventure begins with just a few clicks. With insured options and responsive assistance, you
            can travel with peace of mind on every route.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Customer satisfaction is at the heart of everything we do. Whether you are planning a weekend getaway or a cross-country road trip,
            our team is dedicated to helping you choose the perfect caravan.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Join us on the open road and create memories that last a lifetime with comfort, style, and dependable support.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 7 }}>
              <Box component="img" src={images.large} alt="Road journey" sx={{ width: '100%', height: 290, objectFit: 'cover', borderRadius: 3 }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 5 }}>
              <Stack spacing={2}>
                <Box component="img" src={images.sideTop} alt="Travel night stay" sx={{ width: '100%', height: 138, objectFit: 'cover', borderRadius: 3 }} />
                <Box component="img" src={images.sideBottom} alt="Open sky evening" sx={{ width: '100%', height: 138, objectFit: 'cover', borderRadius: 3 }} />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 7 }}>
              <Box component="img" src={images.bottomWide} alt="Desert caravan road" sx={{ width: '100%', height: 210, objectFit: 'cover', borderRadius: 3 }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 5 }}>
              <Box component="img" src={images.bottomTall} alt="Travel couple" sx={{ width: '100%', height: 210, objectFit: 'cover', borderRadius: 3 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutJourneySection
