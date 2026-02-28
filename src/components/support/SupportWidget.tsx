import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

function SupportWidget() {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = () => {
    const text = message.trim() || 'Hi, I need help with caravan booking.'
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box sx={{ position: 'fixed', right: { xs: 14, md: 24 }, bottom: { xs: 14, md: 24 }, zIndex: 1400 }}>
      {open ? (
        <Paper
          elevation={8}
          sx={{
            width: { xs: 'calc(100vw - 24px)', sm: 360 },
            maxWidth: 380,
            borderRadius: 2,
            overflow: 'hidden',
            maxHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ bgcolor: '#25d366', color: '#fff', p: { xs: 2.2, sm: 3 }, position: 'relative' }}>
            <IconButton
              onClick={() => setOpen(false)}
              aria-label="Close support"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                bgcolor: '#18b757',
                color: '#fff',
                '&:hover': { bgcolor: '#13a64f' },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Stack alignItems="center" spacing={1.5}>
              <Avatar sx={{ width: 72, height: 72, bgcolor: '#ffeb99' }}>
                <SupportAgentIcon sx={{ color: '#7a4f1e', fontSize: 38 }} />
              </Avatar>
              <Typography variant="h5" align="center" sx={{ fontWeight: 600, lineHeight: 1.35, fontSize: { xs: 30, sm: 34 } }}>
                Our customer support team is here to answer your questions. Ask us anything!
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ p: 2.2, bgcolor: '#f4f4f4', overflowY: 'auto' }}>
            <Divider sx={{ mb: 2.2 }} />
            <Stack spacing={2}>
              <TextField
                fullWidth
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter your WhatsApp Number"
                size="medium"
              />
              <TextField
                fullWidth
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Reply to RemalCaravan..."
                multiline
                minRows={4}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                  onClick={handleSend}
                  aria-label="Send message"
                  sx={{
                    bgcolor: '#25d366',
                    color: '#fff',
                    '&:hover': { bgcolor: '#1fb75a' },
                  }}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </Stack>
          </Box>
        </Paper>
      ) : null}

      <Box sx={{ mt: 1.2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          startIcon={<WhatsAppIcon />}
          sx={{
            borderRadius: 999,
            px: { xs: 1.6, sm: 2.2 },
            py: 1.1,
            color: '#fff',
            bgcolor: '#25d366',
            fontSize: { xs: 16, sm: 20 },
            maxWidth: '100%',
            textTransform: 'none',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            boxShadow: '0 12px 30px rgba(37,211,102,0.35)',
            '&:hover': { bgcolor: '#1fb75a' },
          }}
        >
          Hi, how can I help?
        </Button>
      </Box>
    </Box>
  )
}

export default SupportWidget
