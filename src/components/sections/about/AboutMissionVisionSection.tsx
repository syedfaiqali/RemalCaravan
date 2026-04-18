import { Box, Container, Grid, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import VisibilityIcon from '@mui/icons-material/Visibility'
import MotionSection from '../../common/MotionSection'
import { aboutBilingualContent } from '../../../data/aboutBilingualContent'

function AboutMissionVisionSection() {
  const cardStyle = {
    p: { xs: 5, md: 6 },
    height: '100%',
    borderRadius: '24px',
    background: '#fff9f3',
    border: '1px solid #d3deea',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
      borderColor: '#f39a1e'
    }
  }

  const titleStyle = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#2b2b2b',
    mb: 1
  }

  const arabicTitleStyle = {
    fontFamily: '"Cairo", sans-serif',
    fontWeight: 700,
    fontSize: '1.3rem',
    color: '#f39a1e',
    mb: 2.5,
    textAlign: 'left',
    dir: 'rtl'
  }

  const bodyStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1rem',
    color: '#5b5b5b',
    lineHeight: 1.7,
    mb: 2
  }

  const arabicBodyStyle = {
    fontFamily: '"Cairo", sans-serif',
    fontSize: '0.95rem',
    color: '#7a7a7a',
    lineHeight: 1.8,
    textAlign: 'left',
    dir: 'rtl'
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={100}>
              <Box sx={cardStyle}>
                <Box sx={{ color: '#2b2b2b', mb: 3 }}>
                  <RocketLaunchIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography sx={titleStyle}>{aboutBilingualContent.mission.en.title}</Typography>
                <Typography sx={arabicTitleStyle}>{aboutBilingualContent.mission.ar.title}</Typography>
                <Typography sx={bodyStyle}>{aboutBilingualContent.mission.en.text}</Typography>
                <Typography sx={arabicBodyStyle}>{aboutBilingualContent.mission.ar.text}</Typography>
              </Box>
            </MotionSection>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionSection delay={300}>
              <Box sx={cardStyle}>
                <Box sx={{ color: '#2b2b2b', mb: 3 }}>
                  <VisibilityIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography sx={titleStyle}>{aboutBilingualContent.vision.en.title}</Typography>
                <Typography sx={arabicTitleStyle}>{aboutBilingualContent.vision.ar.title}</Typography>
                <Typography sx={bodyStyle}>{aboutBilingualContent.vision.en.text}</Typography>
                <Typography sx={arabicBodyStyle}>{aboutBilingualContent.vision.ar.text}</Typography>
              </Box>
            </MotionSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutMissionVisionSection


