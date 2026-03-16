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
    fontSize: '1.1rem',
    color: '#1e293b',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    mb: 5,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -12,
      left: 0,
      width: '30px',
      height: '3px',
      bgcolor: '#3b82f6',
      borderRadius: '2px'
    }
  }

  const linkStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1.05rem',
    color: '#64748b',
    textDecoration: 'none',
    display: 'block',
    mb: 2,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: '#3b82f6',
      transform: 'translateX(6px)'
    },
  }

  const infoStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1.05rem',
    color: '#64748b',
    lineHeight: 1.8,
  }

  return (
    <Box
      component="footer"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt: { xs: 10, md: 10 },
        pb: { xs: 8 },
        background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 40%), #f8fafc',
        borderTop: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)',
          opacity: 0.1,
        }
      }}
    >
      <MotionSection delay={100}>
        <Container maxWidth="xl" sx={{ px: { xs: 4, md: 10 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
            {/* Brand Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mb: 4 }}>
                <Box
                  sx={{
                    bgcolor: '#3b82f6',
                    p: 1.5,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2)'
                  }}
                >
                  <RvHookupIcon sx={{ color: '#fff', fontSize: '2.5rem' }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '1.8rem', md: '2.4rem' },
                    lineHeight: 1,
                    color: '#0F172A',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Remal RV <br /> Caravan
                </Typography>
              </Stack>
              <Typography
                sx={{
                  ...infoStyle,
                  fontSize: '1.1rem',
                  maxWidth: 340,
                  mb: 4,
                  color: '#475569'
                }}
              >
                Making memories on the road since 2010. We provide premium RV experiences for unforgettable journeys across the country. Your adventure starts here.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Typography sx={headingStyle}>Quick Links</Typography>
              <Stack spacing={1}>
                <Link href="/" sx={linkStyle}>Home</Link>
                <Link href="/about" sx={linkStyle}>About Us</Link>
                <Link href="/gallery" sx={linkStyle}>Gallery</Link>
                <Link href="/destinations" sx={linkStyle}>Our Destinations</Link>
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Typography sx={headingStyle}>Contact Info</Typography>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{
                    bgcolor: '#eff6ff',
                    p: 1.2,
                    borderRadius: '12px',
                    display: 'flex'
                  }}>
                    <LocalPhoneIcon sx={{ color: '#3b82f6', fontSize: '1.4rem' }} />
                  </Box>
                  <Typography sx={{ ...infoStyle, fontWeight: 600, color: '#1e293b' }}>
                    +971 XX XXX XXXX
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{
                    bgcolor: '#eff6ff',
                    p: 1.2,
                    borderRadius: '12px',
                    display: 'flex'
                  }}>
                    <EmailIcon sx={{ color: '#3b82f6', fontSize: '1.4rem' }} />
                  </Box>
                  <Typography sx={{ ...infoStyle, fontWeight: 600, color: '#1e293b' }}>
                    info@remalcaravan.ae
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Office Address */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={headingStyle}>Office Address</Typography>
              <Typography sx={{ ...infoStyle, fontSize: '1.1rem', color: '#475569' }}>
                Business Bay, <br />
                Dubai, United Arab Emirates <br />
                P.O. Box - 00000
              </Typography>
            </Grid>
          </Grid>

          {/* Copyright Bar */}
          <Box
            sx={{
              mt: { xs: 12, md: 10 },
              borderTop: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1rem',
                color: '#94a3b8',
                letterSpacing: '0.05em'
              }}
            >
              © {currentYear} Remal RV Caravan. All rights reserved. <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, ml: 1 }}>Crafted with passion for modern travelers.</Box>
            </Typography>
          </Box>
        </Container>
      </MotionSection>
    </Box>
  )
}

export default Footer
