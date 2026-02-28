import { useState } from 'react'
import { Box, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addBooking } from '../../store/slices/bookingSlice'
import { getCaravanById } from '../../data/caravans'
import CustomButton from '../common/CustomButton'

function BookingForm() {
  const dispatch = useAppDispatch()
  const selectedCaravan = useAppSelector((state) => state.booking.selectedCaravan)
  const selectedCaravanName = selectedCaravan ? getCaravanById(selectedCaravan)?.title ?? selectedCaravan : 'None'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().add(1, 'day'))
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(3, 'day'))
  const [travelers, setTravelers] = useState(2)

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!selectedCaravan || !startDate || !endDate) {
      return
    }

    dispatch(
      addBooking({
        id: crypto.randomUUID(),
        name,
        email,
        caravanId: selectedCaravan,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        travelers,
      }),
    )

    setName('')
    setEmail('')
    setTravelers(2)
    alert('Booking submitted successfully.')
  }

  return (
    <Paper sx={{ p: { xs: 2.5, md: 4 } }} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Reserve Your Caravan
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Selected Caravan: {selectedCaravanName}
      </Typography>

      <Box component="form" onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={setStartDate}
              disablePast
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={setEndDate}
              disablePast
              minDate={startDate ?? dayjs()}
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Travelers"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <MenuItem key={count} value={count}>
                  {count}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <CustomButton type="submit">Submit Booking</CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default BookingForm