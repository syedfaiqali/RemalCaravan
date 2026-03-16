import { Box, Paper } from '@mui/material'
import MotionSection from '../../common/MotionSection'

function ContactMapAndDetailsSection() {
  return (
    <Box sx={{ mt: { xs: 8, md: 15 }, mb: { xs: 8, md: 12 } }}>
      <MotionSection delay={600}>
        <Paper 
          elevation={0}
          sx={{ 
            overflow: 'hidden', 
            borderRadius: { xs: '24px', md: '40px' },
            border: '1px solid #e2e8f0',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)'
          }}
        >
          <Box
            component="iframe"
            src="https://www.google.com/maps?q=Dubai%20United%20Arab%20Emirates&output=embed"
            sx={{ 
              width: '100%', 
              height: { xs: 350, md: 550 }, 
              border: 0,
              filter: 'grayscale(0.2) contrast(1.1)',
              display: 'block'
            }}
            loading="lazy"
          />
        </Paper>
      </MotionSection>
    </Box>
  )
}

export default ContactMapAndDetailsSection
