import { Box } from '@mui/material'
import logoImg from '../../assets/Remal Caravan logo design.webp'

interface LogoProps {
  height?: number | string | object
  sx?: object
}

function Logo({ height = { xs: 55, md: 75 }, sx }: LogoProps) {
  return (
    <Box
      component="img"
      src={logoImg}
      alt="Remal Caravan Logo"
      sx={{
        height: height,
        width: 'auto',
        display: 'block',
        transform: { xs: 'scale(2.0)', md: 'scale(2.1)' },
        transformOrigin: 'left center',
        ...sx
      }}
    />
  )
}

export default Logo
