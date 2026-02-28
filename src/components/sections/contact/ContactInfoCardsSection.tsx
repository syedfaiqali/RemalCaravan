import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { ContactCardItem } from '../../../data/contactContent'

interface ContactInfoCardsSectionProps {
  cards: ContactCardItem[]
}

function ContactInfoCardsSection({ cards }: ContactInfoCardsSectionProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Grid container spacing={2}>
        {cards.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                borderTop: '3px solid',
                borderBottom: '3px solid',
                borderColor: 'primary.main',
                minHeight: 260,
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 1.5 }}>{item.icon}</Box>
              <Typography variant="h4" sx={{ mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ContactInfoCardsSection
