import { RefObject } from 'react'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { DestinationItem } from '../../../data/homeContent'

interface RecommendedCarouselSectionProps {
  items: DestinationItem[]
  scrollRef: RefObject<HTMLDivElement | null>
  onMoveLeft: () => void
  onMoveRight: () => void
}

function RecommendedCarouselSection({ items, scrollRef, onMoveLeft, onMoveRight }: RecommendedCarouselSectionProps) {
  return (
    <Box sx={{ py: 7 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" align="center" sx={{ mb: 1 }}>
          <Box component="span" sx={{ color: 'secondary.main' }}>
            Recommended
          </Box>{' '}
          For You
        </Typography>
        <Typography align="center" color="primary.main" sx={{ fontWeight: 700, mb: 3 }}>
          Curated specially for you
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <IconButton
            aria-label="Move images left"
            onClick={onMoveLeft}
            sx={{
              position: 'absolute',
              left: { xs: -8, sm: -14 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              bgcolor: 'rgba(15,41,66,0.82)',
              color: '#fff',
              width: 42,
              height: 42,
              '&:hover': { bgcolor: 'rgba(15,41,66,0.95)' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            aria-label="Move images right"
            onClick={onMoveRight}
            sx={{
              position: 'absolute',
              right: { xs: -8, sm: -14 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              bgcolor: 'rgba(15,41,66,0.82)',
              color: '#fff',
              width: 42,
              height: 42,
              '&:hover': { bgcolor: 'rgba(15,41,66,0.95)' },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          <Stack
            ref={scrollRef}
            direction="row"
            spacing={2}
            sx={{
              overflowX: 'auto',
              pb: 1.5,
              px: { xs: 2.4, sm: 2.8 },
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {items.map((item) => (
              <Box
                key={item.name}
                sx={{
                  minWidth: { xs: 220, sm: 250, md: 280 },
                  height: { xs: 280, md: 350 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  flex: '0 0 auto',
                  boxShadow: '0 14px 34px rgba(15,41,66,0.18)',
                }}
              >
                <Box component="img" src={item.image} alt={item.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(5,20,35,0.08) 35%, rgba(5,20,35,0.7) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default RecommendedCarouselSection
