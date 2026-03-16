import { useState } from 'react'
import { Box, Container, Grid, Typography, Stack, Button, Chip } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import { destinations, destinationCategories } from '../../../data/destinationsContent'

function DestinationsGridSection() {
  const [activeCategory, setActiveCategory] = useState('All Spots')

  const filteredDestinations = activeCategory === 'All Spots' 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory)

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        {/* Filter Section */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          alignItems="center"
          sx={{ mb: 8 }}
        >
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#0F172A',
              whiteSpace: 'nowrap'
            }}
          >
            Filter Destinations:
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            flexWrap="wrap"
            useFlexGap
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            {destinationCategories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  px: 1,
                  py: 2.5,
                  fontSize: '0.9rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600,
                  bgcolor: activeCategory === cat ? '#0F172A' : '#f1f5f9',
                  color: activeCategory === cat ? '#fff' : '#64748b',
                  '&:hover': {
                    bgcolor: activeCategory === cat ? '#0F172A' : '#e2e8f0',
                  },
                  transition: '0.3s'
                }}
              />
            ))}
          </Stack>
        </Stack>

        {/* Grid Section */}
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#0F172A',
            mb: 1,
            borderBottom: '4px solid #0F172A',
            display: 'inline-block',
            lineHeight: 1
          }}
        >
          Popular Destinations
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {filteredDestinations.map((dest, index) => (
            <Grid key={dest.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <MotionSection delay={100 + index * 50}>
                <Box
                  sx={{
                    bgcolor: '#fff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                      borderColor: '#3b82f6'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={dest.image}
                    alt={dest.title}
                    sx={{
                      width: '100%',
                      height: 280,
                      objectFit: 'cover',
                      bgcolor: '#cbd5e1' // Placeholder color
                    }}
                  />
                  <Box sx={{ p: 4, textAlign: 'left' }}>
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: '#0F172A',
                        mb: 1.5
                      }}
                    >
                      {dest.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#64748b',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        mb: 4,
                        minHeight: '3em'
                      }}
                    >
                      {dest.description}
                    </Typography>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderRadius: '12px',
                        py: 1.5,
                        textTransform: 'none',
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                        borderColor: '#0F172A',
                        color: '#0F172A',
                        '&:hover': {
                          borderColor: '#3b82f6',
                          bgcolor: '#eff6ff',
                          color: '#3b82f6'
                        }
                      }}
                    >
                      Explore Destination
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

export default DestinationsGridSection
