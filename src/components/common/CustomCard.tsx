import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material'
import CustomButton from './CustomButton'

interface CustomCardProps {
  title: string
  description: string
  image?: string
  price?: string
  btnBgColor?: string
  btnTextColor?: string
  onBookNow?: () => void
}

function CustomCard({ title, description, image, price, btnBgColor, btnTextColor, onBookNow }: CustomCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        border: '1px solid #f1f5f9',
        bgcolor: '#ffffff',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: '#e2e8f0',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      <Box sx={{ p: 1.5 }}>
        <Box
          sx={{
            width: '100%',
            height: 220,
            borderRadius: '12px',
            bgcolor: '#e9eff6', // Placeholder color as seen in screenshot
            overflow: 'hidden',
          }}
        >
          {image ? (
            <CardMedia
              component="img"
              height="220"
              image={image}
              alt={title}
              sx={{ objectFit: 'cover' }}
            />
          ) : null}
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, p: '1.5rem', pt: 0.5 }}>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#0F172A',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '1rem',
            color: '#64748b',
            mb: 1,
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#0F172A',
            mb: 2,
          }}
        >
          {price}
        </Typography>

        <CustomButton
          fullWidth
          bgColor={btnBgColor || "#f1f5f9"}
          textColor={btnTextColor || "#0F172A"}
          onClick={onBookNow}
          sx={{ 
            fontWeight: 600,
            py: 1.5,
          }}
        >
          Book Now
        </CustomButton>
      </CardContent>
    </Card>
  )
}

export default CustomCard
