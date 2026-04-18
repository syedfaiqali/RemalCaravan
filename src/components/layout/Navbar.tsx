import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CustomButton from '../common/CustomButton'
import Logo from '../common/Logo'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Our RV fleet', path: '/fleet' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Partner with Us', path: '/partner' },
  { label: 'Campsites', path: '/destinations' },
  { label: 'Contact', path: '/contact' },
  { label: 'About Us', path: '/about' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ p: { xs: 2.5, sm: 3 }, height: '100%', bgcolor: '#fff9f3' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 3,
          pb: 2,
          borderBottom: '1px solid #f3e4d2',
        }}
      >
        <Box component={RouterLink} to="/" onClick={handleDrawerToggle} sx={{ textDecoration: 'none' }}>
          <Logo />
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
                fontSize: { xs: '1rem', sm: '1.08rem' },
                lineHeight: 1.3,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Stack spacing={2} sx={{ mt: 4 }}>
        <CustomButton fullWidth onClick={() => navigate('/contact')}>
          Book Now
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
        borderRadius: { xs: 0, md: '0' },
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        backdropFilter: 'blur(14px)',
        background: '#fff9f3',
        backgroundImage: 'none',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 0, md: 8 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            py: { xs: 1.5, md: 2 },
            px: { xs: 2.5, md: 0 },
            justifyContent: 'space-between',
            borderRadius: { xs: 0, md: '0' },
          }}
        >
          <Box component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
            <Logo />
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: 3,
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

          {/* Desktop CTA / Mobile Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
              <Box sx={{ textAlign: 'right' }}>
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: '#f39a1e',
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  +971 50 120 9512
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: '#f39a1e',
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  +971 50 907 1249
                </Typography>
              </Box>
              <CustomButton
                onClick={() => navigate('/contact')}
              >
                Book Now
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
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: 350,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 24,
            backgroundImage: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Navbar


