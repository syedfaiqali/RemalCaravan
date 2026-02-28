import { Box, Container, Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 4,
        borderTop: '1px solid rgba(25,118,210,0.15)',
        background: 'linear-gradient(180deg, #ffffff 0%, #eef5fc 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" color="primary.main" fontWeight={800}>
              RemalCaravan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Premium caravan rentals for weekend trips and long journeys.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" align="right" color="text.secondary">
              © {new Date().getFullYear()} RemalCaravan. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer