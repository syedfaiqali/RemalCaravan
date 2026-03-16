import { Box, Container, Grid, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import VisibilityIcon from '@mui/icons-material/Visibility'
import MotionSection from '../../common/MotionSection'

function AboutMissionVisionSection() {
  const cardStyle = {
    p: { xs: 5, md: 6 },
    height: '100%',
    borderRadius: '24px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
      borderColor: '#3b82f6'
    }
  }

  const titleStyle = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#0F172A',
    mb: 2.5
  }

  const bodyStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: 1.7
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={100}>
              <Box sx={cardStyle}>
                <Box sx={{ color: '#0F172A', mb: 3 }}>
                  <RocketLaunchIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography sx={titleStyle}>Our Mission</Typography>
                <Typography sx={bodyStyle}>
                  To provide accessible, high-quality RV rentals that empower people to explore the great outdoors without compromising on comfort or safety.
                </Typography>
              </Box>
            </MotionSection>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={300}>
              <Box sx={cardStyle}>
                <Box sx={{ color: '#0F172A', mb: 3 }}>
                  <VisibilityIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography sx={titleStyle}>Our Vision</Typography>
                <Typography sx={bodyStyle}>
                  To become the world's most trusted partner for road travel, known for our exceptional fleet and commitment to sustainable tourism.
                </Typography>
              </Box>
            </MotionSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutMissionVisionSection
