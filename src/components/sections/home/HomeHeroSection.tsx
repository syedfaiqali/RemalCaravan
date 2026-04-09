import { useState, useEffect, useMemo } from 'react'
import { Box, Container, Typography, keyframes } from '@mui/material'
import heroVideo from '../../../assets/s.mp4'

const marqueeAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

interface HomeHeroSectionProps {
  onViewGallery: () => void
}

function HomeHeroSection({ onViewGallery }: HomeHeroSectionProps) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const marqueeText = "• For Bookings related enquiries please Call @ +91 9038389666 or mail us at info@remalcaravan.com "
  const fullMarquee = marqueeText.repeat(10)

  const messages = useMemo(() => [
    "Explore an unforgettable ride in Motor Home (RV)",
    "Welcome to the Land of Adventure",
    "Explore the unexplored beauty of UAE",
    "Experience Luxury on the Road"
  ], [])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const handleType = () => {
      const i = loopNum % messages.length
      const fullText = messages[i]

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 40 : 80)

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      } else {
        timer = setTimeout(handleType, typingSpeed)
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, messages])

  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        px: { xs: 2, md: 3 },
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#000'
      }}
    >
      {/* Top Marquee Bar */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bgcolor: '#f39a1e',
          py: 1,
          zIndex: 10,
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}
      >
        <Typography
          sx={{
            display: 'inline-block',
            animation: `${marqueeAnimation} 40s linear infinite`,
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '0.8rem', md: '0.95rem' },
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            letterSpacing: '0.05em'
          }}
        >
          {fullMarquee}
        </Typography>
      </Box>

      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(14, 14, 14, 0.45) 0%, rgba(14, 14, 14, 0.35) 45%, rgba(14, 14, 14, 0.5) 100%)',
          zIndex: 1
        }}
      />
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            maxWidth: 1100,
            mx: 'auto',
            mb: 4,
            color: '#fff',
            fontWeight: 800,
            fontSize: { xs: '2.2rem', md: '4.8rem' },
            fontFamily: '"Poppins", sans-serif',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            minHeight: { xs: '6rem', md: '12rem' },
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {text}
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: { xs: '3px', md: '6px' },
              height: { xs: '2.2rem', md: '4.2rem' },
              bgcolor: '#f39a1e',
              ml: 1.5,
              animation: 'blink 1s step-end infinite',
              verticalAlign: 'middle',
              '@keyframes blink': {
                'from, to': { opacity: 1 },
                '50%': { opacity: 0 },
              },
            }}
          />
        </Typography>

        {/* <Stack direction="row" justifyContent="center">
          <CustomButton
            onClick={onViewGallery}
            sx={{
              px: { xs: 4, md: 8 },
              py: { xs: 1.5, md: 2.5 },
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 700,
              bgcolor: '#f39a1e',
              '&:hover': {
                bgcolor: '#e0891a'
              }
            }}
          >
            BOOK YOUR RV NOW
          </CustomButton>
        </Stack> */}
      </Container>
    </Box>
  )
}

export default HomeHeroSection
