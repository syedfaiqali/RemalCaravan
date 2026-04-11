import { Box, Container, Grid, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

interface AboutExperienceSectionProps {
  image: string
}

function AboutExperienceSection({ image }: AboutExperienceSectionProps) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <MotionSection delay={100}>
          <Box
            sx={{
              bgcolor: '#2b2b2b',
              borderRadius: '48px',
              overflow: 'hidden',
              p: { xs: 6, md: 10 },
              color: '#fff',
              position: 'relative'
            }}
          >
            <Grid container spacing={8} alignItems="center">
              {/* Left Content */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2.2rem', md: '3.5rem' },
                    lineHeight: 1.1,
                    mb: 4,
                  }}
                >
                  Creating Memorable <br />
                  <Box component="span" sx={{ color: '#f39a1e' }}>Travel Experiences</Box>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.8,
                    mb: 6,
                    maxWidth: '600px'
                  }}
                >
                  We don't just rent vehicles; we enable dreams. Every road trip tells a story, and we're honored to be a part of yours. From coast-to-coast adventures to quiet weekend escapes, our focus remains on your comfort and joy.
                </Typography>

                {/* Testimonial Box */}
                <Box
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    p: 5,
                    borderRadius: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 30,
                      fontSize: '3rem',
                      color: 'rgba(255, 255, 255, 0.1)'
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      color: '#fff',
                      mb: 3,
                      lineHeight: 1.6
                    }}
                  >
                    "The best vacation our family has ever had. The RV was spotless, and the support team helped us find the best campsites along the way."
                  </Typography>
                </Box>
              </Grid>

              {/* Right Image */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  component="img"
                  src={image}
                  alt="RV Experience"
                  sx={{
                    width: '100%',
                    height: { xs: '300px', md: '500px' },
                    objectFit: 'cover',
                    borderRadius: '32px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default AboutExperienceSection


