import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText, Stack } from '@mui/material'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import CustomButton from '../common/CustomButton'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Our RV fleet', path: '/fleet' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Our Destinations', path: '/destinations' },
  { label: 'Contact', path: '/contact' },
  { label: 'About Us', path: '/about' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ p: 3, height: '100%', bgcolor: '#fff9f3' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: 'primary.main', display: 'grid', placeItems: 'center', color: '#fff' }}>
            <DirectionsCarFilledIcon fontSize="small" />
          </Box>
          <Typography sx={{ color: '#2b2b2b', fontWeight: 800, fontSize: '1.1rem', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Remal Caravan
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <List sx={{ pt: 0 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              px: 0,
              py: 2,
              color: location.pathname === item.path ? 'primary.main' : '#2b2b2b',
              borderBottom: '1px solid #f3e4d2'
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 700,
                fontSize: '1.2rem'
              }}
            />
          </ListItem>
        ))}
      </List>
      <Stack spacing={2} sx={{ mt: 4 }}>
        <CustomButton fullWidth>
          RV on Rent in City
        </CustomButton>
      </Stack>
    </Box>
  )

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        backdropFilter: 'blur(14px)',
        background: '#fff9f3',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 8 } }}>
        <Toolbar disableGutters sx={{ py: { xs: 1.5, md: 2 }, justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
            <Box
              sx={{
                width: { xs: 32, md: 36 },
                height: { xs: 32, md: 36 },
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'grid',
                placeItems: 'center',
                color: '#fff9f3',
                boxShadow: '0 8px 20px rgba(25,118,210,0.28)',
              }}
            >
              <DirectionsCarFilledIcon fontSize="small" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <Typography
                sx={{
                  color: '#2b2b2b',
                  fontWeight: 800,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  lineHeight: 1,
                }}
              >
                Remal
              </Typography>
              <Typography
                sx={{
                  color: '#2b2b2b',
                  fontWeight: 800,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  lineHeight: 1,
                }}
              >
                Caravan
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center',
              px: 4,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  fontWeight: 700,
                  px: 0.5,
                  fontSize: '0.95rem',
                  color: location.pathname === item.path ? 'primary.main' : '#2b2b2b',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Destkop CTA / Mobile Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: { xs: 'none', xl: 'flex' }, alignItems: 'center', gap: 2 }}>
              <CustomButton sx={{ px: 3, fontWeight: 600 }}>
                RV on Rent in City
              </CustomButton>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, color: '#2b2b2b' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', maxWidth: 350 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Navbar


