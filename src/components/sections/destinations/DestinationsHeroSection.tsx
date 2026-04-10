import { useState, useEffect, useMemo } from 'react'
import { Box, Container, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import heroImage from '../../../assets/busimage2.jpeg'

function DestinationsHeroSection() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const messages = useMemo(() => [
    "Explore Our Destinations",
    "Discover the Unseen UAE",
    "Mountain Peaks & Golden Sands",
    "Your Journey, Your Rules"
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
        backgroundImage: `linear-gradient(180deg, rgba(14, 14, 14, 0.68) 0%, rgba(14, 14, 14, 0.58) 45%, rgba(14, 14, 14, 0.7) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        minHeight: { xs: '60vh', md: '70vh' },
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 800,
            color: '#f39a1e',
            fontSize: { xs: '2.5rem', md: '5rem' },
            lineHeight: 1.1,
            mb: 3,
            letterSpacing: '-0.02em',
            minHeight: { xs: '6rem', md: '12rem' }
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

        <MotionSection delay={300}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              mb: 3,
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            Discover incredible places to visit with our RV adventures.
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Embark on a journey of a lifetime with our premium RV rentals tailored for your comfort. From mountain peaks to serene lakesides, the road is yours.
          </Typography>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default DestinationsHeroSection


