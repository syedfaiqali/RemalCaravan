import { useState } from 'react'
import { Box, Container, Grid, Typography, Dialog, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MotionSection from '../../common/MotionSection'
import { galleryImages } from '../../../data/caravans'

function GalleryContentSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (img: string) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

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
                    onClick={() => handleOpen(img)}
                    sx={{
                      width: '100%',
                      aspectRatio: '1',
                      objectFit: 'cover',
                      borderRadius: '24px',
                      transition: '0.3s',
                      cursor: 'pointer',
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

        {/* Image Dialog/Lightbox */}
        <Dialog
          open={!!selectedImage}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
              m: { xs: 1, sm: 2, md: 4 }
            }
          }}
        >
          {selectedImage && (
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-flex', maxWidth: '100%', maxHeight: '90vh' }}>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    top: { xs: 8, sm: 12, md: 16 },
                    right: { xs: 8, sm: 12, md: 16 },
                    color: 'white',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                    zIndex: 10,
                    p: { xs: 0.5, sm: 1 }
                  }}
                >
                  <CloseIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
                </IconButton>
                <img
                  src={selectedImage}
                  alt="Enlarged Memory"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  )
}

export default GalleryContentSection


