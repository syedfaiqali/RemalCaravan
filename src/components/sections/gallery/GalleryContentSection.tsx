import { Box, Container, Grid, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import { galleryImages } from '../../../data/caravans'

function GalleryContentSection() {

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff9f3' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>

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
            {galleryImages.concat(galleryImages).slice(0, 13).map((img, index) => (
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


