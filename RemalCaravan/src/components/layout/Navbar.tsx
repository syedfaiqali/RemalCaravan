import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
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
        borderBottom: '1px solid rgba(25,118,210,0.15)',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.9)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, gap: 1, flexWrap: 'wrap' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 800 }}>
            RemalCaravan
          </Typography>

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
                  sx={{ fontWeight: 600 }}
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