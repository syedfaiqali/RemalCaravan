import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { AboutHighlight } from '../../../data/aboutContent'

interface AboutHeroHighlightsSectionProps {
  image: string
  highlights: AboutHighlight[]
}

function AboutHeroHighlightsSection({ image, highlights }: AboutHeroHighlightsSectionProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 520, md: 620 },
        display: 'flex',
        alignItems: 'flex-end',
        py: 5,
        backgroundImage: `linear-gradient(180deg, rgba(8,23,40,0.68) 0%, rgba(8,23,40,0.76) 100%), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Paper
          sx={{
            mb: 3,
            px: 2.2,
            py: 1.2,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography fontWeight={800} color="primary.dark">
            About RemalCaravan
          </Typography>
        </Paper>

        <Grid
          container
          spacing={0}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.25)',
            bgcolor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {highlights.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  p: 3,
                  color: '#fff',
                  minHeight: 250,
                  borderRight: { md: '1px solid rgba(255,255,255,0.18)' },
                  borderBottom: { xs: '1px solid rgba(255,255,255,0.18)', md: 'none' },
                }}
              >
                {item.icon}
                <Typography variant="h5" sx={{ mt: 1, mb: 1.2, color: '#fff' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.92)' }}>{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutHeroHighlightsSection
