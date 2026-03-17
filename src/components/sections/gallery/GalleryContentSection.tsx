import { useState } from 'react'
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import { galleryImages } from '../../../data/caravans'

function GalleryContentSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'RV Interiors',
    'RV Exteriors',
    'Road Trips',
    'Popular Rv Camping Sites',
    'Customer Moments'
  ]

  const adventures = [
    {
      title: 'Mountain Road Trip',
      description: 'Conquering the peaks with a mobile home.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Beachside Camping',
      description: 'Waking up to the sound of waves.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Family RV Journey',
      description: 'Creating memories across the map.',
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800&auto=format&fit=crop'
    }
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff9f3' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        {/* Categories Section */}
        <MotionSection delay={100}>
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: { xs: 6, md: 12 } }}
          >
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  px: 2,
                  py: 3,
                  fontSize: '0.95rem',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600,
                  bgcolor: activeCategory === cat ? '#2b2b2b' : '#fdebd2',
                  color: activeCategory === cat ? '#fff' : '#5b5b5b',
                  border: 'none',
                  '&:hover': {
                    bgcolor: activeCategory === cat ? '#2b2b2b' : '#e0e7ff',
                  },
                  transition: '0.3s'
                }}
              />
            ))}
          </Stack>
        </MotionSection>

        {/* Featured Adventures */}
        <MotionSection delay={200}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#2b2b2b',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 8
            }}
          >
            Featured Adventures
          </Typography>
          <Grid container spacing={4} sx={{ mb: { xs: 12, md: 20 } }}>
            {adventures.map((adv, index) => (
              <Grid key={adv.title} size={{ xs: 12, md: 4 }}>
                <MotionSection delay={300 + index * 100}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src={adv.image}
                      alt={adv.title}
                      sx={{
                        width: '100%',
                        height: 450,
                        objectFit: 'cover',
                        borderRadius: '32px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        mb: 3
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: '#2b2b2b',
                        mb: 1
                      }}
                    >
                      {adv.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#5b5b5b',
                        fontSize: '1rem'
                      }}
                    >
                      {adv.description}
                    </Typography>
                  </Box>
                </MotionSection>
              </Grid>
            ))}
          </Grid>
        </MotionSection>

        {/* Customer Memories */}
        <MotionSection delay={500}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#2b2b2b',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 8
            }}
          >
            Customer Memories
          </Typography>
          <Grid container spacing={2}>
            {galleryImages.concat(galleryImages).slice(0, 12).map((img, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }}>
                <MotionSection delay={600 + (index % 6) * 50}>
                  <Box
                    component="img"
                    src={img}
                    alt={`Customer Memory ${index}`}
                    sx={{
                      width: '100%',
                      aspectRatio: '1',
                      objectFit: 'cover',
                      borderRadius: '24px',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        zIndex: 1
                      }
                    }}
                  />
                </MotionSection>
              </Grid>
            ))}
          </Grid>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default GalleryContentSection


