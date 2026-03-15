import { Box, Container, Typography } from '@mui/material'
import CustomButton from '../../common/CustomButton'

interface HassleFreeRentalSectionProps {
  onLearnMore?: () => void
}

function HassleFreeRentalSection({ onLearnMore }: HassleFreeRentalSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box
        sx={{
          bgcolor: '#141414',
          borderRadius: '24px',
          py: { xs: 8, md: 10 },
          px: { xs: 3, md: 6 },
          textAlign: 'center',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Hassle-Free Rental <br /> Experience
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 400,
            }}
          >
            Experience the Remal Caravans Difference
          </Typography>
        </Box>

        <CustomButton
          bgColor="#ffffff"
          textColor="#141414"
          onClick={onLearnMore}
          sx={{
            px: 6,
            py: 1.8,
            fontSize: '1rem',
            fontWeight: 700,
            '&:hover': {
              bgcolor: 'transparent',
              borderColor: '#ffffff',
              color: '#ffffff'
            }
          }}
        >
          LEARN MORE
        </CustomButton>
      </Box>
    </Container>
  )
}

export default HassleFreeRentalSection
