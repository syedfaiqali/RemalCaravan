import { Container, Typography } from '@mui/material'
import BookingForm from '../components/booking/BookingForm'

function BookingPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Booking
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Complete the form below to reserve your selected caravan.
      </Typography>
      <BookingForm />
    </Container>
  )
}

export default BookingPage