import { Box, Container, Grid, Typography, Avatar } from '@mui/material'
import MotionSection from '../../common/MotionSection'

function AboutTeamSection() {
  const teamMembers = [
    { name: 'Alex Rivera', role: 'CEO & Founder', bio: 'Passionate adventurer with 15+ years of road trip experience.' },
    { name: 'Sarah Chen', role: 'Operations Head', bio: 'Ensuring every RV in our fleet is in pristine condition for your journey.' },
    { name: 'Mark Thompson', role: 'Customer Relations', bio: 'Dedicated to helping you plan the perfect route and trip schedule.' },
    { name: 'Elena Vance', role: 'Fleet Specialist', bio: 'Expert in modern RV technology and onboard amenities.' },
  ]

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <MotionSection delay={100}>
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#0F172A',
                mb: 2
              }}
            >
              Meet Our Team
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.2rem',
                color: '#64748b',
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              The passionate travelers and experts behind your seamless RV experience.
            </Typography>
          </Box>
        </MotionSection>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <MotionSection delay={200 + index * 100}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)'
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 180,
                      height: 180,
                      mx: 'auto',
                      mb: 4,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                      bgcolor: '#eff6ff',
                      color: '#3b82f6',
                      fontSize: '3rem',
                      fontWeight: 700
                    }}
                  >
                    {member.name[0]}
                  </Avatar>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#0F172A',
                      mb: 1
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 600,
                      color: '#3b82f6',
                      fontSize: '0.95rem',
                      mb: 2
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      color: '#64748b',
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Box>
              </MotionSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutTeamSection
