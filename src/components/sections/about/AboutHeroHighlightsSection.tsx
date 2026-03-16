import { Box, Container, Grid, Typography, Button } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface AboutHeroHighlightsSectionProps {
  image: string
}

function AboutHeroHighlightsSection({ image }: AboutHeroHighlightsSectionProps) {
  return (
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 15 }, pt: { xs: 12, md: 18 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={100}>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4.2rem' },
                  color: '#0F172A',
                  lineHeight: 1.1,
                  mb: 3,
                  letterSpacing: '-0.02em',
                }}
              >
                About Remal <br />
                <Box component="span" sx={{ color: '#3b82f6' }}>RV Caravan</Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: '#64748b',
                  mb: 5,
                  lineHeight: 1.6,
                  maxWidth: '550px'
                }}
              >
                Making road trips unforgettable with comfortable RV travel. Explore our story and our commitment to quality travel experiences in the UAE.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#1e293b',
                  color: '#fff',
                  px: 4,
                  py: 2,
                  borderRadius: '12px',
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: '#0f172a',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 20px -5px rgba(0,0,0,0.2)'
                  },
                  transition: '0.3s'
                }}
              >
                Explore Our RVs
              </Button>
            </MotionSection>
          </Grid>

          {/* Right Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={300}>
              <Box
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    border: '2px dashed #e2e8f0',
                    borderRadius: '40px',
                    zIndex: 0
                  }
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt="Remal RV Caravan"
                  sx={{
                    width: '100%',
                    height: { xs: '350px', md: '550px' },
                    objectFit: 'cover',
                    borderRadius: '40px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </Box>
            </MotionSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutHeroHighlightsSection
