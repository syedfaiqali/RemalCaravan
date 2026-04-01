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
        px: { xs: 2.25, sm: 2.75, md: 3 },
        py: { xs: 1.1, sm: 1.2 },
        minHeight: { xs: 44, sm: 48 },
        backgroundColor: bgColor || '#fea116',
        color: textColor || '#FFFFFF',
        fontFamily: '"Manrope", sans-serif',
        borderRadius: '12px',
        textTransform: 'none',
        fontSize: { xs: '0.95rem', sm: '1rem' },
        lineHeight: 1.2,
        boxShadow: 'none',
        border: isLightBg ? '1.5px solid #fea116' : '1.5px solid transparent',
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



