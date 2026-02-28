import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { DestinationItem } from '../../../data/homeContent'

interface PopularDestinationsSectionProps {
  items: DestinationItem[]
}

function PopularDestinationsSection({ items }: PopularDestinationsSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        <Box component="span" sx={{ color: 'secondary.main' }}>
          Popular
        </Box>{' '}
        Destinations
      </Typography>
      <Grid container spacing={2.5}>
        {items.map((item) => (
          <Grid key={item.name} size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              sx={{
                overflow: 'hidden',
                borderRadius: 3,
                position: 'relative',
                height: { xs: 280, sm: 360 },
              }}
            >
              <Box component="img" src={item.image} alt={item.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(15,41,66,0.08) 35%, rgba(15,41,66,0.78) 100%)',
                  p: 2,
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>
                  {item.name}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PopularDestinationsSection
