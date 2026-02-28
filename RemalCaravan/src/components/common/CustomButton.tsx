import { Button, ButtonProps } from '@mui/material'

function CustomButton(props: ButtonProps) {
  return <Button variant="contained" color="secondary" {...props} />
}

export default CustomButton