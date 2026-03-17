import { Box, Container, Typography, TextField, MenuItem, Grid, Paper } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import CustomButton from '../../common/CustomButton'

function BookYourRVSection() {
  const rvTypes = [
    'Remal Voyager',
    'Remal Explorer',
    'Remal Signature',
    'Remal Family Max',
    'Remal Lux Cruise',
    'Luxury 4-berth',
  ]

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      bgcolor: '#ffffff',
      '& fieldset': {
        borderColor: '#d3deea',
      },
      '&:hover fieldset': {
        borderColor: '#e0c8a8',
      },
    },
    '& .MuiInputLabel-root': {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      fontSize: '0.9rem',
      color: '#5b5b5b',
      textTransform: 'uppercase',
      mb: 1,
      position: 'relative',
      transform: 'none',
      letterSpacing: '0.05em',
    },
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff9f3' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '2.8rem' },
                color: '#2b2b2b',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Book Your RV
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.1rem',
                color: '#5b5b5b',
                fontWeight: 400,
              }}
            >
              Ready for your next adventure? Fill out the form below to start your booking process.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: '24px',
              border: '1px solid #f3e4d2',
              maxWidth: 1000,
              mx: 'auto',
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Full Name</Typography>
                <TextField 
                  fullWidth 
                  placeholder="John Doe" 
                  variant="outlined"
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Email Address</Typography>
                <TextField 
                  fullWidth 
                  placeholder="john@example.com" 
                  variant="outlined"
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Phone Number</Typography>
                <TextField 
                  fullWidth 
                  placeholder="+91 XXX XXX XXXX" 
                  variant="outlined"
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>RV Type</Typography>
                <TextField
                  select
                  fullWidth
                  defaultValue="Luxury 4-berth"
                  sx={inputStyles}
                >
                  {rvTypes.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Pick-up Date</Typography>
                <DatePicker
                  sx={{ width: '100%', ...inputStyles }}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                    },
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                  }}
                  minDate={dayjs()}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Return Date</Typography>
                <DatePicker
                  sx={{ width: '100%', ...inputStyles }}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                    },
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                  }}
                  minDate={dayjs()}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Special Requests</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Tell us about any specific requirements or destinations..."
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                <CustomButton
                  fullWidth
                  bgColor="#fea116"
                  textColor="#FFFFFF"
                  sx={{
                    py: 2.2,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Submit Booking
                </CustomButton>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  )
}

export default BookYourRVSection




