import { Box, Container, Typography, TextField, MenuItem, Grid, Paper } from '@mui/material'
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
        borderColor: '#e2e8f0',
      },
      '&:hover fieldset': {
        borderColor: '#cbd5e1',
      },
    },
    '& .MuiInputLabel-root': {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      fontSize: '0.9rem',
      color: '#475569',
      textTransform: 'uppercase',
      mb: 1,
      position: 'relative',
      transform: 'none',
      letterSpacing: '0.05em',
    },
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              color: '#0F172A',
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
              color: '#64748b',
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
            border: '1px solid #f1f5f9',
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
              <TextField 
                fullWidth 
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={inputStyles}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={inputStyles['& .MuiInputLabel-root']}>Return Date</Typography>
              <TextField 
                fullWidth 
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={inputStyles}
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
                bgColor="#141414"
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
  )
}

export default BookYourRVSection
