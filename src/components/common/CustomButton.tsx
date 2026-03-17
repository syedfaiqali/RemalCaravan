import { Button, ButtonProps } from '@mui/material'

interface CustomButtonProps extends ButtonProps {
  bgColor?: string
  textColor?: string
  hovercolor?: string
  hoverTextcolor?: string
}

function CustomButton({ bgColor, textColor, hovercolor, hoverTextcolor, sx, ...props }: CustomButtonProps) {
  const isLightBg = bgColor === '#FFFFFF' || bgColor === '#f3e4d2' || bgColor === 'white'

  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: 700,
        px: 3,
        py: 1.2,
        backgroundColor: bgColor || '#fea116',
        color: textColor || '#FFFFFF',
        fontFamily: '"Manrope", sans-serif',
        borderRadius: '12px', // Explicit 12px for consistent moderate rounding
        textTransform: 'none',
        fontSize: '1rem',
        boxShadow: 'none',
        border: isLightBg ? '1.5px solid #fea116' : '1.5px solid transparent', // Prevent jumping on hover
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          backgroundColor: hovercolor || '#f29407',
          color: hoverTextcolor || '#FFFFFF',
          borderColor: '#f29407',
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



