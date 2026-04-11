import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import Logo from '../common/Logo'
import MotionSection from '../common/MotionSection'
import { heroImage } from '../../data/caravans'

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
      bgcolor: '#f39a1e',
      borderRadius: '2px'
    }
  }

  const linkStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1.05rem',
    color: '#5b5b5b',
    textDecoration: 'none',
    display: 'block',
    mb: 2,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: '#f39a1e',
      transform: 'translateX(6px)'
    },
  }

  const infoStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1.05rem',
    color: '#5b5b5b',
    lineHeight: 1.8,
  }

  return (
    <Box
      component="footer"
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        pt: { xs: 10, md: 10 },
        pb: { xs: 4 },
        background: `linear-gradient(rgba(255, 249, 243, 0.88), rgba(255, 249, 243, 0.88)), url(${heroImage})`,
        backgroundColor: '#fff9f3',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { md: 'fixed' },
        // borderTop: '1px solid #d3deea',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          // background: 'linear-gradient(90deg, #f39a1e, #ffb84d, #f39a1e)',
          opacity: 0.1,
        }
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <MotionSection delay={100}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 10 } }}>
            <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
              {/* Brand Info */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ mb: 4 }}>
                  <Logo height={120} />
                </Box>
                <Typography
                  sx={{
                    ...infoStyle,
                    fontSize: '1.1rem',
                    maxWidth: 340,
                    mb: 4,
                    color: '#5b5b5b'
                  }}
                >
                  Making memories on the road since 2023. We provide premium RV experiences for unforgettable journeys across the country. Your adventure starts here.
                </Typography>
              </Grid>

              {/* Quick Links */}
              <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                <Typography sx={headingStyle}>Quick Links</Typography>
                <Stack spacing={1}>
                  <Link href="/" sx={linkStyle}>Home</Link>
                  <Link href="/about" sx={linkStyle}>About Us</Link>
                  <Link href="/gallery" sx={linkStyle}>Gallery</Link>
                  <Link href="/fleet" sx={linkStyle}>Our Fleet</Link>
                  <Link href="/contact" sx={linkStyle}>Contact Us</Link>
                  <Link href="/destinations" sx={linkStyle}>Campsites</Link>
                  <Link href="/partner" sx={linkStyle}>Become Our Partner</Link>
                </Stack>
              </Grid>

              {/* Contact Info */}
              <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                <Typography sx={headingStyle}>Contact Info</Typography>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{
                      bgcolor: '#fdebd2',
                      p: 1.2,
                      borderRadius: '12px',
                      display: 'flex'
                    }}>
                      <LocalPhoneIcon sx={{ color: '#f39a1e', fontSize: '1.4rem' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ ...infoStyle, fontWeight: 600, color: '#1e293b' }}>
                        +971 XX XXX XXXX
                      </Typography>
                      <Typography sx={{ ...infoStyle, fontWeight: 600, color: '#1e293b' }}>
                        +971 XX XXX XXXX
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{
                      bgcolor: '#fdebd2',
                      p: 1.2,
                      borderRadius: '12px',
                      display: 'flex'
                    }}>
                      <EmailIcon sx={{ color: '#f39a1e', fontSize: '1.4rem' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ ...infoStyle, fontWeight: 600, color: '#1e293b' }}>
                        info@remalcaravan.ae
                      </Typography>
                      <Typography sx={{ ...infoStyle, fontWeight: 600, color: '#1e293b' }}>
                        booking@remalcaravan.ae
                      </Typography>
                    </Box>
                  </Stack>
                  {/* <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{
                      bgcolor: '#fdebd2',
                      p: 1.2,
                      borderRadius: '12px',
                      display: 'flex'
                    }}>
                      <EmailIcon sx={{ color: '#f39a1e', fontSize: '1.4rem' }} />
                    </Box>
                    <Typography sx={{ ...infoStyle, fontWeight: 600, color: '#1e293b' }}>
                      booking@remalcaravan.ae
                    </Typography>
                  </Stack> */}
                </Stack>
              </Grid>

              {/* Office Address */}
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography sx={headingStyle}>Office Address</Typography>
                <Typography sx={{ ...infoStyle, fontSize: '1.1rem', color: '#5b5b5b' }}>
                  Business Bay, <br />
                  Dubai, United Arab Emirates <br />
                  P.O. Box - 00000
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </MotionSection>
      </Box>

      {/* Copyright Bar */}
      <MotionSection delay={200}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 10 } }}>
          <Box
            sx={{
              mt: { xs: 8, md: 0 },
              borderTop: '1px solid #d3deea',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1rem',
                color: '#ffb84d',
                paddingTop: '20px',
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
