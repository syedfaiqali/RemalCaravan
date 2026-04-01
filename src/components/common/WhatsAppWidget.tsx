import { useState, useEffect } from 'react'
import { Box, IconButton, Tooltip, Zoom, Typography, Stack, keyframes } from '@mui/material'
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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappNumber = "+971500000000" // Placeholder for UAE number
  const message = "Hi Remal Caravan! I'm interested in renting an RV."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  const phoneUrl = `tel:${whatsappNumber}`

  useEffect(() => {
    // Show tooltop after 3 seconds to grab attention
    const timer = setTimeout(() => setShowTooltip(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
        left: { xs: 24, md: 32 },
        bottom: { xs: 24, md: 32 },
        zIndex: 1400,
        maxWidth: { xs: 'calc(100vw - 48px)', md: 'none' },
      }}
    >
      {/* Welcome Bubble */}
      <Zoom in={showTooltip}>
        <Box
          sx={{
            position: 'absolute',
            bottom: 'calc(100% + 15px)',
            left: 0,
            bgcolor: '#ffffff',
            p: { xs: 1.5, sm: 2 },
            borderRadius: '20px 20px 20px 4px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            width: { xs: 'min(240px, calc(100vw - 48px))', sm: 'max-content' },
            maxWidth: 'calc(100vw - 48px)',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            border: '1px solid #d3deea',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.9)',
            animation: `${float} 3s infinite ease-in-out`
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                bgcolor: '#25D366',
                borderRadius: '50%',
                animation: `${pulse} 2s infinite ease-out`
              }}
            />
            <Box>
              <Typography 
                sx={{ 
                  fontFamily: '"Plus Jakarta Sans", sans-serif', 
                  fontWeight: 800, 
                  fontSize: { xs: '0.82rem', sm: '0.9rem' },
                  color: '#2b2b2b',
                  lineHeight: 1
                }}
              >
                Remal Support
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: '"Plus Jakarta Sans", sans-serif', 
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  color: '#5b5b5b',
                  mt: 0.5
                }}
              >
                Hi! How can we help you?
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Zoom>

      <Stack spacing={2}>
        <Tooltip title="Chat on WhatsApp" placement="right" arrow>
          <IconButton
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: { xs: 60, md: 70 },
              height: { xs: 60, md: 70 },
              bgcolor: '#25D366',
              color: '#fff',
              boxShadow: '0 12px 24px rgba(37, 211, 102, 0.35)',
              animation: `${pulse} 2s infinite ease-out`,
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              '&:hover': {
                bgcolor: '#128C7E',
                transform: 'scale(1.1) rotate(10deg)',
                boxShadow: '0 15px 32px rgba(37, 211, 102, 0.45)',
              },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Call Us" placement="right" arrow>
          <IconButton
            component="a"
            href={phoneUrl}
            sx={{
              width: { xs: 60, md: 70 },
              height: { xs: 60, md: 70 },
              bgcolor: '#f39a1e',
              color: '#fff',
              boxShadow: '0 12px 24px rgba(243, 154, 30, 0.35)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              '&:hover': {
                bgcolor: '#e08a0d',
                transform: 'scale(1.1) rotate(-10deg)',
                boxShadow: '0 15px 32px rgba(243, 154, 30, 0.45)',
              },
            }}
          >
            <CallIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  )
}

export default WhatsAppWidget


