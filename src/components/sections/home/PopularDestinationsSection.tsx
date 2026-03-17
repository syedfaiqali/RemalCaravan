import { Box, Container, Grid, Typography, Link } from '@mui/material'
import { DestinationItem } from '../../../data/homeContent'

interface PopularDestinationsSectionProps {
  items: DestinationItem[]
}

function PopularDestinationsSection({ items }: PopularDestinationsSectionProps) {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              color: '#2b2b2b',
              lineHeight: 1.1,
              mb: 1.5,
            }}
          >
            Popular Destinations
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1.1rem',
              color: '#5b5b5b',
              fontWeight: 400,
            }}
          >
            Explore the most loved locations by our travelers
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {items.slice(0, 4).map((item) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 420,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover img': {
                    transform: 'scale(1.08)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />

                {/* Visual Gradient Placeholder as seen in mockup */}
                {!item.image && (
                  <Box sx={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #e0c8a8 0%, #ffb84d 100%)'
                  }} />
                )}

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(15,23,42,0) 40%, rgba(15,23,42,0.85) 100%)',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Link
                    href="/destinations"
                    sx={{
                      color: '#ffffff',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-block',
                      width: 'fit-content',
                      opacity: 0.9,
                      borderBottom: '2px solid #ffffff',
                      pb: 0.5,
                      '&:hover': {
                        opacity: 1,
                        color: '#f39a1e',
                        borderBottom: '2px solid #f39a1e',
                      }
                    }}
                  >
                    Explore Now
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default PopularDestinationsSection


