import { Box, Container, Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4.5,
        mt: 6,
        borderTop: '1px solid rgba(25,118,210,0.15)',
        background:
          'radial-gradient(circle at 12% 20%, rgba(25,118,210,0.12) 0%, rgba(25,118,210,0) 38%), linear-gradient(180deg, #f9fcff 0%, #eef5fc 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" color="primary.dark" fontWeight={800} sx={{ fontFamily: '"Sora", "Manrope", sans-serif' }}>
              RemalCaravan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Premium caravan rentals for weekend trips and long journeys.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              © {new Date().getFullYear()} RemalCaravan. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
