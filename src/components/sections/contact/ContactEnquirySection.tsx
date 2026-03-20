import { Box, Grid, Paper, Stack, TextField, Typography, IconButton } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CustomButton from '../../common/CustomButton'
import MotionSection from '../../common/MotionSection'
import { useAppSelector } from '../../../store/hooks'
import { premiumCaravans } from '../../../data/caravans'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

interface ContactEnquirySectionProps { }

function ContactEnquirySection({ }: ContactEnquirySectionProps) {
  const selectedCaravanId = useAppSelector((state) => state.booking.selectedCaravan)
  const selectedCaravan = premiumCaravans.find(c => c.id === selectedCaravanId)

  const detailItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 2.5,
    mb: 4,
  }

  const iconBoxStyle = {
    bgcolor: '#fdebd2',
    p: 1.5,
    borderRadius: '16px',
    display: 'flex',
    color: '#f39a1e',
  }

  const labelStyle = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 700,
    fontSize: '1.1rem',
    color: '#2b2b2b',
    mb: 0.2,
  }

  const valueStyle = {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1rem',
    color: '#5b5b5b',
  }
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: selectedCaravan ? `Booking Inquiry: ${selectedCaravan.title}` : '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email),
      message: !formData.message.trim()
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(error => error)) {
      return
    }

    setIsSubmitting(true)

    // Updated with your real EmailJS IDs
    const SERVICE_ID = "service_6l2k1k9";
    const TEMPLATE_ID = "template_5jyv2h6"; // Reminder: Make sure this is your Contact Template ID!
    const PUBLIC_KEY = "yFMFYlO4Y0j259hfO";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Remal Caravan Admin",
        },
        PUBLIC_KEY
      );
      
      toast.success('Message sent successfully! We will get back to you soon.')
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error('Something went wrong. Please try again later or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mt: { xs: 8, md: 12 } }}>
      {/* Contact Details Side */}
      <Grid size={{ xs: 12, md: 5 }}>
        <MotionSection delay={200}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: '2.2rem',
              color: '#2b2b2b',
              mb: 6
            }}
          >
            Contact Details
          </Typography>

          <Box sx={detailItemStyle}>
            <Box sx={iconBoxStyle}>
              <LocalPhoneIcon />
            </Box>
            <Box>
              <Typography sx={labelStyle}>Phone No</Typography>
              <Typography sx={valueStyle}>+971 XX XXX XXXX</Typography>
            </Box>
          </Box>

          <Box sx={detailItemStyle}>
            <Box sx={iconBoxStyle}>
              <EmailIcon />
            </Box>
            <Box>
              <Typography sx={labelStyle}>Email Address</Typography>
              <Typography sx={valueStyle}>info@remalcaravan.ae</Typography>
            </Box>
          </Box>

          <Box sx={detailItemStyle}>
            <Box sx={iconBoxStyle}>
              <LocationOnIcon />
            </Box>
            <Box>
              <Typography sx={labelStyle}>Office Address</Typography>
              <Typography sx={valueStyle}>
                Business Bay, <br />
                Dubai, United Arab Emirates
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#2b2b2b',
                mb: 3
              }}
            >
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2}>
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    bgcolor: '#f3e4d2',
                    color: '#5b5b5b',
                    p: 1.5,
                    transition: '0.3s',
                    '&:hover': {
                      bgcolor: '#f39a1e',
                      color: '#fff',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </MotionSection>
      </Grid>

      {/* Contact Form Side */}
      <Grid size={{ xs: 12, md: 7 }}>
        <MotionSection delay={400}>
          <Paper
            elevation={0}
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: '24px',
              border: '1px solid #d3deea',
              background: '#fff',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
            }}
          >
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ ...labelStyle, fontSize: '0.9rem', mb: 1.5 }}>Name</Typography>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  helperText={errors.name ? 'Name is required' : ''}
                  placeholder="Your name"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ ...labelStyle, fontSize: '0.9rem', mb: 1.5 }}>Email</Typography>
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  helperText={errors.email ? 'Valid email is required' : ''}
                  placeholder="Your email"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ ...labelStyle, fontSize: '0.9rem', mb: 1.5 }}>Subject</Typography>
                <TextField
                  fullWidth
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Message subject"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ ...labelStyle, fontSize: '0.9rem', mb: 1.5 }}>Message</Typography>
                <TextField
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  helperText={errors.message ? 'Message is required' : ''}
                  multiline
                  rows={5}
                  placeholder="How can we help?"
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                <CustomButton
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    py: 2,
                    fontSize: '1.1rem',
                    borderRadius: '14px',
                    textTransform: 'none',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </CustomButton>
              </Grid>
            </Grid>
          </Paper>
        </MotionSection>
      </Grid>
    </Grid>
  )
}

export default ContactEnquirySection


