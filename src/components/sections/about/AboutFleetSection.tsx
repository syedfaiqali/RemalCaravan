import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MotionSection from '../../common/MotionSection'
import KitchenIcon from '@mui/icons-material/Kitchen'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WifiIcon from '@mui/icons-material/Wifi'
import TvIcon from '@mui/icons-material/Tv'
import HotelIcon from '@mui/icons-material/Hotel'
import { premiumCaravans } from '../../../data/caravans'

function AboutFleetSection() {
  const navigate = useNavigate()
  const fleet = premiumCaravans.map(c => ({
    id: c.id,
    name: c.title,
    image: c.image,
    amenities: [...c.quickSpecs, c.sleeps]
  }))

  const getIcon = (amenity: string) => {
    if (amenity.includes('Fridge')) return <KitchenIcon sx={{ fontSize: 18 }} />
    if (amenity.includes('AC')) return <AcUnitIcon sx={{ fontSize: 18 }} />
    if (amenity.includes('WiFi')) return <WifiIcon sx={{ fontSize: 18 }} />
    if (amenity.includes('TV')) return <TvIcon sx={{ fontSize: 18 }} />
    if (amenity.includes('Sleeps')) return <HotelIcon sx={{ fontSize: 18 }} />
    return null
  }

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff9f3' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <MotionSection delay={100}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
            spacing={2}
            sx={{ mb: 8 }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#2b2b2b',
                  mb: 1
                }}
              >
                Our RV Fleet
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  color: '#5b5b5b',
                }}
              >
                Choose the perfect companion for your next trip.
              </Typography>
            </Box>
            <Button
              onClick={() => navigate('/fleet')}
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                color: '#fea116',
                textTransform: 'none',
                borderBottom: '2px solid #fea116',
                borderRadius: 0,
                pb: 0.5,
                '&:hover': { bgcolor: 'transparent', color: '#f29407', borderColor: '#f29407' }
              }}
            >
              View All RVs
            </Button>
          </Stack>
        </MotionSection>

        <Grid container spacing={4}>
          {fleet.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <MotionSection delay={200 + index * 100}>
                <Box
                  sx={{
                    bgcolor: '#fff9f3',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    border: '1px solid #d3deea',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                      borderColor: '#f39a1e'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: '100%', height: 280, objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 4 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: '#2b2b2b',
                        mb: 3
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                      {item.amenities.map(a => (
                        <Grid key={a} size={{ xs: 6 }}>
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <Box sx={{ color: '#ffb84d' }}>{getIcon(a)}</Box>
                            <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.9rem', color: '#5b5b5b' }}>
                              {a}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => navigate(`/caravan/${item.id}`)}
                      sx={{
                        borderRadius: '12px',
                        py: 1.5,
                        textTransform: 'none',
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 600,
                        borderColor: '#fea116',
                        color: '#fea116',
                        '&:hover': {
                          borderColor: '#f39a1e',
                          bgcolor: '#fdebd2',
                          color: '#f39a1e'
                        }
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
              </MotionSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutFleetSection
