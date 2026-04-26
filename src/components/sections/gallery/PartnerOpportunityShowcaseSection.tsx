import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import MotionSection from '../../common/MotionSection'
import partner1 from '../../../assets/partner1.webp'
import partner2 from '../../../assets/partner2.webp'
import partner3 from '../../../assets/partner3.webp'
import partner4 from '../../../assets/partner4.webp'
import partner5 from '../../../assets/partner5.webp'
import partner6 from '../../../assets/partner6.webp'

const imageCards = [
  { image: partner1, title: 'RV-ready partnerships', height: 280 },
  { image: partner2, title: 'Tourism experiences', height: 220 },
  { image: partner3, title: 'Weekend escapes', height: 240 },
  { image: partner4, title: 'Family travel moments', height: 260 },
  { image: partner5, title: 'Road trip lifestyle', height: 220 },
  { image: partner6, title: 'UAE destination network', height: 300 },
]

const partnershipBenefits = [
  'Earn passive income from an idle motorhome or caravan.',
  'Sell your vehicle through a platform built for UAE outdoor travel.',
  'Unlock commission opportunities on caravan and motorhome sales.',
  'Launch tourism concepts with branding, visibility, and operational support.',
]

const tripExperiences = [
  'Desert adventures in Liwa and Al Badayer',
  'Mountain escapes in Hatta and Khorfakkan',
  'Beachside stays in Fujairah',
  'Family-friendly camping with BBQ setups',
  'Luxury motorhome road trips across the UAE',
]

const partnerTypes = [
  'Motorhome and caravan owners',
  'Tourism companies and travel agents',
  'Adventure organizers',
  'Investors entering the caravan rental business',
]

function PartnerOpportunityShowcaseSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top left, rgba(243, 154, 30, 0.18), transparent 28%), linear-gradient(180deg, #fff8ef 0%, #f4ebdf 100%)',
        py: { xs: 9, md: 14 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionSection delay={100}>
              <Stack spacing={3}>
                <Chip
                  label="Partner with Remal"
                  sx={{
                    alignSelf: 'flex-start',
                    bgcolor: 'rgba(243, 154, 30, 0.14)',
                    color: '#9a5400',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    borderRadius: '999px',
                    px: 1,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2.3rem', md: '4rem' },
                    lineHeight: 1.05,
                    color: '#1f1f1f',
                    letterSpacing: '-0.03em',
                    maxWidth: 700,
                  }}
                >
                  Turn parked caravans into revenue and tourism ideas into real UAE experiences.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: { xs: '1.03rem', md: '1.15rem' },
                    lineHeight: 1.8,
                    color: '#5d554c',
                    maxWidth: 640,
                  }}
                >
                  Remal Caravans helps owners, operators, and investors grow with a trusted platform for rentals,
                  sales, and curated travel experiences across the Emirates.
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1.2}>
                  <Chip label="Rent" sx={{ bgcolor: '#fff', fontWeight: 700 }} />
                  <Chip label="Sell" sx={{ bgcolor: '#fff', fontWeight: 700 }} />
                  <Chip label="Travel" sx={{ bgcolor: '#fff', fontWeight: 700 }} />
                  <Chip label="Explore" sx={{ bgcolor: '#fff', fontWeight: 700 }} />
                </Stack>
              </Stack>
            </MotionSection>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <MotionSection delay={220}>
              <Grid container spacing={2}>
                {imageCards.map((card, index) => (
                  <Grid key={card.title} size={{ xs: 6, md: 4 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '28px',
                        minHeight: { xs: 180, md: card.height },
                        boxShadow: index === 5 ? '0 22px 48px rgba(20, 20, 20, 0.16)' : '0 18px 40px rgba(20, 20, 20, 0.1)',
                      }}
                    >
                      <Box
                        component="img"
                        src={card.image}
                        alt={card.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          minHeight: { xs: 180, md: card.height },
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(8, 20, 16, 0.05) 25%, rgba(8, 20, 16, 0.72) 100%)',
                        }}
                      />
                      <Typography
                        sx={{
                          position: 'absolute',
                          left: 16,
                          right: 16,
                          bottom: 16,
                          color: '#fff',
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 700,
                          fontSize: { xs: '0.95rem', md: '1.05rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </MotionSection>
          </Grid>
        </Grid>

        <MotionSection delay={320}>
          <Grid container spacing={3} sx={{ mt: { xs: 5, md: 7 } }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  borderRadius: '28px',
                  bgcolor: '#fff',
                  p: { xs: 3, md: 4 },
                  boxShadow: '0 24px 50px rgba(31, 31, 31, 0.08)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: '1.45rem',
                    color: '#1f1f1f',
                    mb: 2,
                  }}
                >
                  Why Partner With Us?
                </Typography>
                <Stack spacing={1.4}>
                  {partnershipBenefits.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#534c44',
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  borderRadius: '28px',
                  bgcolor: '#123227',
                  p: { xs: 3, md: 4 },
                  boxShadow: '0 24px 50px rgba(18, 50, 39, 0.2)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: '1.45rem',
                    color: '#f7f1e8',
                    mb: 2,
                  }}
                >
                  Create Unforgettable Experiences
                </Typography>
                <Stack spacing={1.2}>
                  {tripExperiences.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: 'rgba(247, 241, 232, 0.88)',
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  borderRadius: '28px',
                  bgcolor: '#fff3df',
                  p: { xs: 3, md: 4 },
                  boxShadow: '0 24px 50px rgba(31, 31, 31, 0.06)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: '1.45rem',
                    color: '#1f1f1f',
                    mb: 2,
                  }}
                >
                  Who Can Partner?
                </Typography>
                <Stack spacing={1.2}>
                  {partnerTypes.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: '#534c44',
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </MotionSection>

        <MotionSection delay={380}>
          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              borderRadius: '30px',
              px: { xs: 3, md: 5 },
              py: { xs: 3.5, md: 4.5 },
              background: 'linear-gradient(135deg, #f39a1e 0%, #ffd287 100%)',
              boxShadow: '0 24px 46px rgba(243, 154, 30, 0.24)',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: '#1f1f1f',
                mb: 1,
              }}
            >
              Let&apos;s grow together.
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: { xs: '1rem', md: '1.08rem' },
                lineHeight: 1.7,
                color: 'rgba(31, 31, 31, 0.88)',
                maxWidth: 960,
              }}
            >
              We provide the platform, branding, and support. You bring your vehicle, destination access, or tourism
              idea, and together we build memorable UAE road-trip experiences.
            </Typography>
          </Box>
        </MotionSection>
      </Container>
    </Box>
  )
}

export default PartnerOpportunityShowcaseSection
