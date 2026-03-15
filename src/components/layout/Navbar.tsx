import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import { Link as RouterLink } from 'react-router-dom'
import CustomButton from '../common/CustomButton'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Our RV fleet', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Our Destinations', path: '/destinations' },
  { label: 'Contact', path: '/contact' },
  { label: 'About Us', path: '/about' },
]

function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        backdropFilter: 'blur(14px)',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.93) 0%, rgba(244,249,255,0.93) 65%, rgba(255,246,232,0.93) 100%)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Toolbar disableGutters sx={{ py: 2, gap: 4, justifyContent: 'space-between' }}>
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <Typography
                sx={{
                  color: '#0F172A',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  lineHeight: 1,
                }}
              >
                Remal
              </Typography>
              <Typography
                sx={{
                  color: '#0F172A',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  lineHeight: 1,
                }}
              >
                Caravan
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'nowrap', md: 'wrap' },
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              px: 4,
              overflowX: { xs: 'auto', md: 'visible' },
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {navItems.map((item) => {
              return (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    fontWeight: 600,
                    px: 1,
                    fontSize: '0.95rem',
                    color: '#0F172A',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      color: '#64748b',
                      bgcolor: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              )
            })}
          </Box>

          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
            <CustomButton
              bgColor="#f1f5f9"
              textColor="#0F172A"
              sx={{ px: 3, fontWeight: 600 }}
            >
              RV on Rent in City
            </CustomButton>
            <CustomButton
              sx={{ px: 3, fontWeight: 600 }}
            >
              +91 XXX XXX XXXX
            </CustomButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
