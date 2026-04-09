import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material'
import CustomButton from './CustomButton'

interface CustomCardProps {
  title: string
  description?: string
  image?: string
  price?: string
  btnBgColor?: string
  btnTextColor?: string
  onBookNow?: () => void
  badge?: string
  subBadge?: string
  specs?: string[]
  children?: React.ReactNode
}

function CustomCard({ title, description, image, price, btnBgColor, btnTextColor, onBookNow, badge, subBadge, specs, children }: CustomCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        border: '1px solid #f3e4d2',
        bgcolor: '#ffffff',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: '#d3deea',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      <Box sx={{ p: 1.5, position: 'relative' }}>
        <Box
          sx={{
            width: '100%',
            height: 220,
            borderRadius: '12px',
            bgcolor: '#f3e4d2', // Placeholder color as seen in screenshot
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
        {badge && (
          <Chip
            label={badge}
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              color: '#2b2b2b',
              fontWeight: 600,
            }}
          />
        )}
        {subBadge && (
          <Chip
            label={subBadge}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              color: '#2b2b2b',
              fontWeight: 600,
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: '1.5rem', pt: 0.5 }}>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#2b2b2b',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '1rem',
            color: '#5b5b5b',
            mb: 1,
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>

        {specs && specs.length > 0 && (
          <Box sx={{ mb: 2 }}>
            {specs.map((spec, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '0.875rem',
                  color: '#5b5b5b',
                  mb: 0.5,
                }}
              >
                - {spec}
              </Typography>
            ))}
          </Box>
        )}

        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#2b2b2b',
            mb: 2,
          }}
        >
          {price}
        </Typography>

        {children ? (
          children
        ) : (
          <CustomButton
            fullWidth
            bgColor={btnBgColor || "#f3e4d2"}
            textColor={btnTextColor || "#2b2b2b"}
            onClick={onBookNow}
            sx={{
              fontWeight: 600,
              py: 1.5,
            }}
          >
            Book Now
          </CustomButton>
        )}
      </CardContent>
    </Card>
  )
}

export default CustomCard


