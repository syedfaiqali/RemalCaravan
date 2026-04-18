import { useState } from 'react'
import { Box, IconButton, Zoom, Typography, Stack, keyframes, Paper, ClickAwayListener } from '@mui/material'
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
  const [openMenu, setOpenMenu] = useState<'none' | 'whatsapp' | 'call'>('none')

  const contacts = [
    {
      name: "Sales & Bookings",
      number: "+971501209512",
      display: "+971 50 120 9512",
      description: "Book your caravan adventure",
      color: "#25D366",
      callColor: "#f39a1e"
    },
    {
      name: "Customer Support",
      number: "+971509071249",
      display: "+971 50 907 1249",
      description: "Existing bookings & help",
      color: "#25D366",
      callColor: "#f39a1e"
    }
  ]

  const handleAction = (number: string, type: 'whatsapp' | 'call') => {
    if (type === 'whatsapp') {
      const message = "Hi Remal Caravan! I'm interested in renting an RV."
      const url = `https://wa.me/${number.replace('+', '')}?text=${encodeURIComponent(message)}`
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = `tel:${number}`
    }
    setOpenMenu('none')
  }

  const toggleMenu = (type: 'whatsapp' | 'call') => {
    setOpenMenu(prev => prev === type ? 'none' : type)
  }

  return (
    <ClickAwayListener onClickAway={() => setOpenMenu('none')}>
      <Box
        sx={{
          position: 'fixed',
          left: { xs: 24, md: 32 },
          bottom: { xs: 24, md: 32 },
          zIndex: 9999,
        }}
      >
        {/* Menu */}
        <Zoom in={openMenu !== 'none'}>
          <Paper
            elevation={20}
            sx={{
              position: 'absolute',
              bottom: { xs: 150, md: 160 },
              left: 0,
              width: { xs: 260, md: 300 },
              bgcolor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              p: 2,
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <Typography sx={{ fontWeight: 800, mb: 2, px: 1, color: '#2b2b2b', fontSize: '1rem' }}>
              {openMenu === 'whatsapp' ? 'Chat via WhatsApp' : 'Call our Team'}
            </Typography>
            <Stack spacing={1.5}>
              {contacts.map((contact, index) => (
                <Box
                  key={index}
                  onClick={() => handleAction(contact.number, openMenu as 'whatsapp' | 'call')}
                  sx={{
                    p: 1.5,
                    borderRadius: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid transparent',
                    '&:hover': {
                      bgcolor: openMenu === 'whatsapp' ? 'rgba(37, 211, 102, 0.08)' : 'rgba(243, 154, 30, 0.08)',
                      borderColor: openMenu === 'whatsapp' ? 'rgba(37, 211, 102, 0.2)' : 'rgba(243, 154, 30, 0.2)',
                      transform: 'translateX(6px)'
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{
                      p: 1,
                      bgcolor: openMenu === 'whatsapp' ? contact.color : contact.callColor,
                      borderRadius: '12px',
                      color: 'white',
                      display: 'flex'
                    }}>
                      {openMenu === 'whatsapp' ? <WhatsAppIcon fontSize="small" /> : <CallIcon fontSize="small" />}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#2b2b2b', mb: 0.2 }}>
                        {contact.name}
                      </Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#666', fontWeight: 500 }}>
                        {contact.display}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Zoom>

        <Stack spacing={2} alignItems="flex-start">
          <IconButton
            onClick={() => toggleMenu('whatsapp')}
            sx={{
              width: { xs: 60, md: 70 },
              height: { xs: 60, md: 70 },
              bgcolor: openMenu === 'whatsapp' ? '#128C7E' : '#25D366',
              color: '#fff',
              boxShadow: '0 12px 24px rgba(37, 211, 102, 0.35)',
              animation: openMenu === 'none' ? `${pulse} 2s infinite ease-out` : 'none',
              '&:hover': { bgcolor: '#128C7E', transform: 'scale(1.1)' },
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            <WhatsAppIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
          </IconButton>

          <IconButton
            onClick={() => toggleMenu('call')}
            sx={{
              width: { xs: 60, md: 70 },
              height: { xs: 60, md: 70 },
              bgcolor: openMenu === 'call' ? '#e08a0d' : '#f39a1e',
              color: '#fff',
              boxShadow: '0 12px 24px rgba(243, 154, 30, 0.35)',
              '&:hover': { bgcolor: '#e08a0d', transform: 'scale(1.1)' },
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            <CallIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
          </IconButton>
        </Stack>
      </Box>
    </ClickAwayListener>
  )
}

export default WhatsAppWidget
