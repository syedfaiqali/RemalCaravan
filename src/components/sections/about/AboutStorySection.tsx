import { Box, Container, Grid, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import { aboutBilingualContent } from '../../../data/aboutBilingualContent'

interface AboutStorySectionProps {
  image: string
}

function AboutStorySection({ image }: AboutStorySectionProps) {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
          {/* Left Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={100}>
              <Box
                component="img"
                src={image}
                alt="Our Story"
                sx={{
                  width: '100%',
                  height: { xs: '400px', md: '600px' },
                  objectFit: 'cover',
                  borderRadius: '40px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                }}
              />
            </MotionSection>
          </Grid>

          {/* Right Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={300}>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#2b2b2b',
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                {aboutBilingualContent.story.en.title}
              </Typography>

              {/* Arabic Title */}
              <Typography
                dir="rtl"
                sx={{
                  fontFamily: '"Cairo", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  color: '#f39a1e',
                  lineHeight: 1.2,
                  mb: 4,
                  textAlign: 'left'
                }}
              >
                {aboutBilingualContent.story.ar.title}
              </Typography>

              <Box sx={{ mb: 6 }}>
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '1.1rem',
                    color: '#5b5b5b',
                    lineHeight: 1.8,
                    mb: 3,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {aboutBilingualContent.story.en.text}
                </Typography>

                <Typography
                  dir="rtl"
                  sx={{
                    fontFamily: '"Cairo", sans-serif',
                    fontSize: '1.05rem',
                    color: '#6b6b6b',
                    lineHeight: 1.9,
                    textAlign: 'justify',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {aboutBilingualContent.story.ar.text}
                </Typography>
              </Box>

            </MotionSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutStorySection


