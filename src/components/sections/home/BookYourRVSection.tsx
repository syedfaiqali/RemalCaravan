import { Box, Container, Typography, TextField, MenuItem, Grid, Paper } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import CustomButton from '../../common/CustomButton'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rvType: 'Luxury 4-berth',
    pickupDate: dayjs() as Dayjs | null,
    returnDate: dayjs().add(3, 'days') as Dayjs | null,
    specialRequests: ''
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email),
      phone: !formData.phone.trim()
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(error => error)) {
      return
    }

    setIsSubmitting(true)

    // Replace these placeholder IDs with your actual EmailJS ones
    const SERVICE_ID = "service_6l2k1k9";
    const TEMPLATE_ID = "template_5jyv2h6";
    const PUBLIC_KEY = "yFMFYlO4Y0j259hfO";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          rv_type: formData.rvType,
          pickup_date: formData.pickupDate?.format('DD/MM/YYYY'),
          return_date: formData.returnDate?.format('DD/MM/YYYY'),
          special_requests: formData.specialRequests || 'None',
          to_name: "Remal Caravan Admin",
        },
        PUBLIC_KEY
      );

      toast.success('Booking request submitted successfully! We will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        rvType: 'Luxury 4-berth',
        pickupDate: dayjs(),
        returnDate: dayjs().add(3, 'days'),
        specialRequests: ''
      })
    } catch (error) {
      console.error('EmailJS booking error:', error)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
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
            component="form"
            onSubmit={handleSubmit}
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
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  error={errors.name}
                  helperText={errors.name ? 'Name is required' : ''}
                  placeholder="John Doe"
                  variant="outlined"
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Email Address</Typography>
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={errors.email}
                  helperText={errors.email ? 'Valid email is required' : ''}
                  placeholder="john@example.com"
                  variant="outlined"
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Phone Number</Typography>
                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  error={errors.phone}
                  helperText={errors.phone ? 'Phone number is required' : ''}
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
                  name="rvType"
                  value={formData.rvType}
                  onChange={(e) => handleInputChange('rvType', e.target.value)}
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
                  value={formData.pickupDate}
                  onChange={(date) => handleInputChange('pickupDate', date)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
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
                  value={formData.returnDate}
                  onChange={(date) => handleInputChange('returnDate', date)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                    },
                  }}
                  minDate={formData.pickupDate || dayjs()}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography sx={inputStyles['& .MuiInputLabel-root']}>Special Requests</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  placeholder="Tell us about any specific requirements or destinations..."
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                <CustomButton
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
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
                  {isSubmitting ? 'Submitting...' : 'Submit Booking'}
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
