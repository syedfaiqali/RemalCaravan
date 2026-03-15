import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import RvHookupIcon from '@mui/icons-material/RvHookup'
import MotionSection from '../common/MotionSection'

function Footer() {
  const currentYear = new Date().getFullYear()

  const headingStyle = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 700,
    fontSize: '0.9rem',
    color: '#334155',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    mb: 3,
  }

  const linkStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '0.95rem',
    color: '#64748b',
    textDecoration: 'none',
    display: 'block',
    mb: 1.5,
    '&:hover': {
      color: '#0F172A',
    },
  }

  const infoStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.6,
  }

  return (
    <Box
      component="footer"
      sx={{
        pt: 10,
        pb: 4,
        bgcolor: '#f8fafc',
        borderTop: '1px solid #f1f5f9',
      }}
    >
      <MotionSection delay={100}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
          <Grid container spacing={6}>
            {/* Brand Info */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                <Box
                  sx={{
                    bgcolor: '#e2e8f0',
                    p: 0.8,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <RvHookupIcon sx={{ color: '#475569', fontSize: '1.8rem' }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    lineHeight: 1.1,
                    color: '#0F172A'
                  }}
                >
                  Remal RV <br /> Caravan
                </Typography>
              </Stack>
              <Typography
                sx={{
                  ...infoStyle,
                  maxWidth: 260,
                }}
              >
                Making memories on the road since 2010. Quality vehicles, unforgettable journeys.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Typography sx={headingStyle}>Quick Links</Typography>
              <Link href="/" sx={linkStyle}>Home</Link>
              <Link href="/about" sx={linkStyle}>About Us</Link>
              <Link href="/gallery" sx={linkStyle}>Gallery</Link>
              <Link href="/destinations" sx={linkStyle}>Our Destinations</Link>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
              <Typography sx={headingStyle}>Contact Info</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LocalPhoneIcon sx={{ color: '#64748b', fontSize: '1.2rem' }} />
                  <Typography sx={infoStyle}>+91 XXX XXX XXXX</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailIcon sx={{ color: '#64748b', fontSize: '1.2rem' }} />
                  <Typography sx={infoStyle}>info@remalcaravans.in</Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Office Address */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={headingStyle}>Office Address</Typography>
              <Typography sx={infoStyle}>
                123 Road Trip Avenue, <br />
                Adventure District, City Center, <br />
                State - 000000
              </Typography>
            </Grid>
          </Grid>

          {/* Copyright Bar */}
          <Box
            sx={{
              mt: 8,
              pt: 4,
              borderTop: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '0.9rem',
                color: '#94a3b8',
              }}
            >
              © {currentYear} Remal RV Caravan. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </MotionSection>
    </Box>
  )
}

export default Footer
