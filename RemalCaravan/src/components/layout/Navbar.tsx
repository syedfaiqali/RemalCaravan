import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Booking', path: '/booking' },
]

function Navbar() {
  const location = useLocation()

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(25,118,210,0.1)',
        backdropFilter: 'blur(14px)',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.93) 0%, rgba(244,249,255,0.93) 65%, rgba(255,246,232,0.93) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, gap: 1, flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'grid',
                placeItems: 'center',
                color: '#fff',
                boxShadow: '0 8px 20px rgba(25,118,210,0.28)',
              }}
            >
              <DirectionsCarFilledIcon fontSize="small" />
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.dark',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                fontFamily: '"Sora", "Manrope", sans-serif',
              }}
            >
              RemalCaravan
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  color={isActive ? 'secondary' : 'primary'}
                  variant={isActive ? 'contained' : 'text'}
                  sx={{
                    fontWeight: 700,
                    px: 1.8,
                    bgcolor: isActive ? undefined : 'rgba(25,118,210,0.06)',
                    '&:hover': {
                      bgcolor: isActive ? undefined : 'rgba(25,118,210,0.13)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              )
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
