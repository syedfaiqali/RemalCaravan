import { useState } from 'react'
import { Box, IconButton, Zoom, Typography, Stack, keyframes } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CallIcon from '@mui/icons-material/Call'

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`

function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    {
      name: "Sales & Bookings",
      number: "+923072882293",
      description: "Book your caravan adventure",
      color: "#25D366"
    },
    {
      name: "Customer Support",
      number: "+923370358139",
      description: "Existing bookings & help",
      color: "#25D366"
    }
  ]

  const handleWhatsAppClick = (number: string) => {
    const message = "Hi Remal Caravan! I'm interested in renting an RV."
    const url = `https://wa.me/${number.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        left: { xs: 24, md: 32 },
        bottom: { xs: 24, md: 32 },
        zIndex: 9999,
      }}
    >
      {/* Contact Selector Menu */}
      <Zoom in={isOpen}>
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 150, md: 160 }, // Increased from 80/90 to avoid overlap
            left: 0,
            width: { xs: 260, md: 300 },
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            p: 2,
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.05)',
            display: isOpen ? 'block' : 'none'
          }}
        >
          <Typography sx={{ fontWeight: 800, mb: 2, px: 1, color: '#2b2b2b', fontSize: '1rem' }}>
            How can we help?
          </Typography>
          <Stack spacing={1.5}>
            {contacts.map((contact, index) => (
              <Box
                key={index}
                onClick={() => handleWhatsAppClick(contact.number)}
                sx={{
                  p: 1.5,
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent',
                  '&:hover': {
                    bgcolor: 'rgba(37, 211, 102, 0.08)',
                    borderColor: 'rgba(37, 211, 102, 0.2)',
                    transform: 'translateX(5px)'
                  }
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{
                    p: 1,
                    bgcolor: contact.color,
                    borderRadius: '12px',
                    color: 'white',
                    display: 'flex'
                  }}>
                    <WhatsAppIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#2b2b2b' }}>
                      {contact.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>
                      {contact.description}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Zoom>

      <Stack spacing={2} alignItems="flex-start">
        <IconButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          sx={{
            width: { xs: 60, md: 70 },
            height: { xs: 60, md: 70 },
            bgcolor: isOpen ? '#128C7E' : '#25D366',
            color: '#fff',
            boxShadow: '0 12px 24px rgba(37, 211, 102, 0.35)',
            animation: !isOpen ? `${pulse} 2s infinite ease-out` : 'none',
            '&:hover': { bgcolor: '#128C7E', transform: 'scale(1.1)' }
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
        </IconButton>

        <IconButton
          component="a"
          href="tel:+923072882293"
          sx={{
            width: { xs: 60, md: 70 },
            height: { xs: 60, md: 70 },
            bgcolor: '#f39a1e',
            color: '#fff',
            boxShadow: '0 12px 24px rgba(243, 154, 30, 0.35)',
            '&:hover': { bgcolor: '#e08a0d', transform: 'scale(1.1)' }
          }}
        >
          <CallIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default WhatsAppWidget
