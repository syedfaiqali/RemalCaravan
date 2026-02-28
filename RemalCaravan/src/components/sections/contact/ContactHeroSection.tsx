import { Box, Container, Paper, Typography } from '@mui/material'

interface ContactHeroSectionProps {
  image: string
}

function ContactHeroSection({ image }: ContactHeroSectionProps) {
  return (
    <Box
      sx={{
        minHeight: { xs: 280, md: 360 },
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(90deg, rgba(9,22,35,0.72) 0%, rgba(9,22,35,0.3) 65%), url(${image})`,
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
  )
}

export default ContactHeroSection
