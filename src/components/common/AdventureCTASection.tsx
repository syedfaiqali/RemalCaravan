import { Box, Container, Typography } from '@mui/material'
import CustomButton from '../common/CustomButton'
import MotionSection from './MotionSection'

interface AdventureCTASectionProps {
  title: string
  subtitle: string
  buttonText: string
  onAction?: () => void
}

function AdventureCTASection({ title, subtitle, buttonText, onAction }: AdventureCTASectionProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <MotionSection delay={100}>
        <Box
          sx={{
            bgcolor: '#141414',
            borderRadius: '32px',
            py: { xs: 8, md: 10 },
            px: { xs: 3, md: 6 },
            textAlign: 'center',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              {subtitle}
            </Typography>
          </Box>

          <CustomButton
            bgColor="#ffffff"
            textColor="#141414"
            onClick={onAction}
            sx={{
              px: { xs: 4, md: 6 },
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: '16px',
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'transparent',
                borderColor: '#ffffff',
                color: '#ffffff',
                transform: 'translateY(-3px)'
              },
              transition: '0.3s'
            }}
          >
            {buttonText}
          </CustomButton>
        </Box>
      </MotionSection>
    </Container>
  )
}

export default AdventureCTASection
