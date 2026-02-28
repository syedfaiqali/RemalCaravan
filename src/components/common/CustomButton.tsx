import { Button, ButtonProps } from '@mui/material'

function CustomButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        fontWeight: 700,
        px: 2.2,
        py: 1,
        background: 'linear-gradient(135deg, #ff9800 0%, #ffb547 100%)',
        '&:hover': {
          background: 'linear-gradient(135deg, #e68900 0%, #ffad33 100%)',
        },
      }}
      {...props}
    />
  )
}

export default CustomButton
