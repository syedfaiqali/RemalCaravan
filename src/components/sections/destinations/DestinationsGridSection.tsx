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
          alignItems={{ xs: 'flex-start', md: 'center' }}
          sx={{ mb: 8 }}
        >
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
              color: '#2b2b2b',
              whiteSpace: 'normal'
            }}
          >
            Filter Destinations:
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1.5 }}
            flexWrap="wrap"
            useFlexGap
            justifyContent={{ xs: 'flex-start', md: 'flex-start' }}
          >
            {destinationCategories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  px: { xs: 0.75, sm: 1 },
                  py: { xs: 2, sm: 2.25, md: 2.5 },
                  minHeight: { xs: 40, sm: 44 },
                  fontSize: { xs: '0.82rem', sm: '0.88rem', md: '0.9rem' },
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600,
                  maxWidth: '100%',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#fea116' : '#f3e4d2',
                  '& .MuiChip-label': {
                    px: { xs: 1.25, sm: 1.5 },
                    whiteSpace: 'normal',
                    textAlign: 'center',
                  },
                  bgcolor: activeCategory === cat ? '#fea116' : '#fff4e5',
                  color: activeCategory === cat ? '#ffffff' : '#5b5b5b',
                  '&:hover': {
                    bgcolor: activeCategory === cat ? '#f29407' : '#fdebd2',
                    borderColor: activeCategory === cat ? '#f29407' : '#fdebd2',
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
            color: '#2b2b2b',
            mb: 1,
            borderBottom: '4px solid #2b2b2b',
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
                    position: 'relative',
                    bgcolor: '#fff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #d3deea',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                      borderColor: '#f39a1e'
                    },
                    '&:hover .detailOverlay': {
                      opacity: 1,
                      transform: 'translateY(0)'
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
                      bgcolor: '#e0c8a8' // Placeholder color
                    }}
                  />
                  <Box sx={{ p: 4, textAlign: 'left' }}>
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: '#2b2b2b',
                        mb: 1.5
                      }}
                    >
                      {dest.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#f39a1e',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        mb: 3
                      }}
                    >
                      {dest.category}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#5b5b5b',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        minHeight: '3em'
                      }}
                    >
                      Hover for more details
                    </Typography>
                  </Box>
                  <Box
                    className="detailOverlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 4,
                      bgcolor: 'rgba(0, 0, 0, 0.85)',
                      borderRadius: '24px',
                      color: '#fff',
                      opacity: 0,
                      transform: 'translateY(10px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                      pointerEvents: 'none'
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        mb: 0,
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                        color: '#ffffff'
                      }}
                    >
                      {dest.description}
                    </Typography>
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


