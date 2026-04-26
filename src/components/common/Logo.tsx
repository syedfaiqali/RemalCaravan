import { Box } from '@mui/material'
import logoImg from '../../assets/Remal Caravan logo design1.webp'

interface LogoProps {
  height?: number | string | object
  sx?: object
}

function Logo({ height = { xs: 60, md: 80 }, sx }: LogoProps) {
  return (
    <Box
      component="img"
      src={logoImg}
      alt="Remal Caravan Logo"
      sx={{
        height: height,
        width: 'auto',
        display: 'block',
        transform: { xs: 'scale(1.7)', md: 'scale(1.8)' },
        transformOrigin: 'left center',
        mixBlendMode: 'darken', // Dynamically removes the white background
        ...sx
      }}
    />
  )
}

export default Logo
