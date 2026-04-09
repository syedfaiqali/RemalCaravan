import { Box } from '@mui/material'
import logoImg from '../../assets/Remal Caravan logo design.png'

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
        ...sx
      }}
    />
  )
}

export default Logo
