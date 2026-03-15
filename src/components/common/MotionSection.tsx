import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'

interface MotionSectionProps {
  children: React.ReactNode
  delay?: number
}

const MotionSection: React.FC<MotionSectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1
    })

    const current = domRef.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <Box
      ref={domRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.96)',
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transition: `all 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </Box>
  )
}

export default MotionSection
