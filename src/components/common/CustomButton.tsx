import { Button, ButtonProps } from '@mui/material'

interface CustomButtonProps extends ButtonProps {
  bgColor?: string
  textColor?: string
}

function CustomButton({ bgColor, textColor, sx, ...props }: CustomButtonProps) {
  const isLightBg = bgColor === '#FFFFFF' || bgColor === '#f1f5f9' || bgColor === 'white'

  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: 700,
        px: 3,
        py: 1.2,
        backgroundColor: bgColor || '#141414',
        color: textColor || '#FFFFFF',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        borderRadius: '12px', // Explicit 12px for consistent moderate rounding
        textTransform: 'none',
        fontSize: '1rem',
        boxShadow: 'none',
        border: isLightBg ? '1.5px solid #141414' : '1.5px solid transparent', // Prevent jumping on hover
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          backgroundColor: isLightBg ? '#141414' : 'transparent',
          color: isLightBg ? '#FFFFFF' : '#141414',
          borderColor: '#141414',
          boxShadow: 'none',
          opacity: 1,
        },
        ...sx,
      }}
      {...props}
    />
  )
}

export default CustomButton
