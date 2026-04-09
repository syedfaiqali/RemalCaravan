import { useMemo, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Tab,
  Tabs,
  Avatar,
  Divider,
  Fade,
} from '@mui/material'
import MotionSection from '../components/common/MotionSection'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import PersonIcon from '@mui/icons-material/Person'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import StarIcon from '@mui/icons-material/Star'
import heroBanner from '../assets/caravan_hero_banner_1775771753954.png'
import BedIcon from '@mui/icons-material/Bed'
import WeekendIcon from '@mui/icons-material/Weekend'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import TvIcon from '@mui/icons-material/Tv'
import SpeakerIcon from '@mui/icons-material/Speaker'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import WcIcon from '@mui/icons-material/Wc'
import BathtubIcon from '@mui/icons-material/Bathtub'
import LockIcon from '@mui/icons-material/Lock'
import HotTubIcon from '@mui/icons-material/HotTub'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker'
import KitchenIcon from '@mui/icons-material/Kitchen'
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher'
import BoltIcon from '@mui/icons-material/Bolt'
import UmbrellaIcon from '@mui/icons-material/Umbrella'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import VerifiedIcon from '@mui/icons-material/Verified'
import SettingsIcon from '@mui/icons-material/Settings'
import TimerIcon from '@mui/icons-material/Timer'
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import PhishingIcon from '@mui/icons-material/Phishing'
import CustomButton from '../components/common/CustomButton'
import { getCaravanById } from '../data/caravans'

const TypewriterEffect = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[index].length) {
        setCurrentText(prev => prev + texts[index][charIndex])
        setCharIndex(prev => prev + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      } else if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setIndex(prev => (prev + 1) % texts.length)
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index, texts])

  return (
    <Typography
      sx={{
        color: '#fff',
        fontFamily: '"Poppins", sans-serif',
        fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.5rem' },
        fontWeight: 700,
        textAlign: 'center',
        px: 2,
        textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '1.5em'
      }}
    >
      {currentText}
      <Box
        component="span"
        sx={{
          ml: 1,
          width: '3px',
          height: '1.1em',
          bgcolor: '#fea116',
          display: 'inline-block',
          animation: 'blink 1s step-end infinite',
          '@keyframes blink': {
            'from, to': { opacity: 1 },
            '50%': { opacity: 0 }
          }
        }}
      />
    </Typography>
  )
}

function CaravanDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const caravan = useMemo(() => (id ? getCaravanById(id) : undefined), [id])
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)
  const [tabValue, setTabValue] = useState(0)

  if (!caravan) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Caravan not found
        </Typography>
        <CustomButton onClick={() => navigate('/fleet')}>Back to Fleet</CustomButton>
      </Container>
    )
  }

  const gallery = caravan.gallery && caravan.gallery.length > 0 ? caravan.gallery : [caravan.image]

  useEffect(() => {
    if (gallery.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [gallery.length])

  const getIconForItem = (text: string) => {
    const lowerText = text.toLowerCase()
    if (lowerText.includes('driver')) return <PersonIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('bed')) return <BedIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('sofa')) return <WeekendIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('air conditioner')) return <AcUnitIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('tv')) return <TvIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('sound system') || lowerText.includes('speaker')) return <SpeakerIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('charging')) return <BatteryChargingFullIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('intercom')) return <PhoneInTalkIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('toilet') || lowerText.includes('washbasin')) return <WcIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('shower') || lowerText.includes('shampoo')) return <BathtubIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('vault')) return <LockIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('geyser')) return <HotTubIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('kitchenette') || lowerText.includes('hot plate')) return <SoupKitchenIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('kettle')) return <CoffeeMakerIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('fridge')) return <KitchenIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('outdoor')) return <OutdoorGrillIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('utensils') || lowerText.includes('breakfast') || lowerText.includes('barbeque')) return <RestaurantIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('lpg') || lowerText.includes('fuel')) return <LocalGasStationIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('lighting')) return <LightbulbIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('fire extinguisher')) return <FireExtinguisherIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('genset')) return <BoltIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('umbrella')) return <UmbrellaIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('parking') || lowerText.includes('campsites')) return <LocalParkingIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('permit') || lowerText.includes('pass')) return <VerifiedIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('personal expenses')) return <SettingsIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('halting') || lowerText.includes('hour')) return <TimerIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('bicycle')) return <PedalBikeIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('bonfire')) return <WhatshotIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('badminton') || lowerText.includes('archery')) return <SportsTennisIcon sx={{ color: '#fea116', fontSize: '1rem' }} />
    if (lowerText.includes('fishing')) return <PhishingIcon sx={{ color: '#fea116', fontSize: '1rem' }} />

    return <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#fea116', mt: 0.8, flexShrink: 0 }} />
  }


  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const handleBookNow = () => {
    navigate('/contact')
  }

  return (
    <Box>
      {/* Hero Banner Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '200px', sm: '250px', md: '300px' },
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 4
        }}
      >
        <MotionSection delay={200}>
          <Box sx={{ textAlign: 'center' }}>
            <TypewriterEffect
              texts={[
                "Unforgettable Journeys",
                "Luxury on the Road",
                "Your Home Anywhere",
                "Explore with Freedom"
              ]}
            />
          </Box>
        </MotionSection>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        {/* Navigation & Info Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
          <Box
            onClick={() => navigate('/fleet')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: '#fea116',
              fontWeight: 600,
              fontSize: '0.9rem',
              '&:hover': { opacity: 0.8 }
            }}
          >
            ← Back
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            {/* <Typography sx={{ fontSize: '0.7rem', color: '#1a4f8b', fontWeight: 600 }}>
              * Unused KM per day will be carried over to next applicable day.
            </Typography>
            <Typography sx={{ fontSize: '0.7rem', color: '#006d5b', fontWeight: 600 }}>
              * Rs. 140 per KM will be charged for the overall trip KMS used.
            </Typography> */}
          </Box>
        </Box>

        {/* Top Section Card */}
        <MotionSection delay={300}>
          <Box
            sx={{
              bgcolor: '#ffffff',
              borderRadius: '16px',
              p: { xs: 2, md: 3 },
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              mb: 4,
              border: '1px solid #f3e4d2',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              gap: 4
            }}
          >
            {/* Slider Section */}
            <Box sx={{ width: '100%', maxWidth: { md: 420 }, flexShrink: 0 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: { xs: '4/3', md: '16/11' },
                  width: '100%',
                }}
              >
                <Fade in={true} key={activeIndex} timeout={800}>
                  <Box
                    component="img"
                    src={gallery[activeIndex]}
                    alt={caravan.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Fade>
                {gallery.length > 1 && (
                  <>
                    <IconButton
                      onClick={prevImage}
                      sx={{ position: 'absolute', left: 4, top: '50%', transform: 'translateY(-50%)', color: '#fff' }}
                    >
                      <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={nextImage}
                      sx={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', color: '#fff' }}
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </>
                )}
                {/* Pagination Dots */}
                <Box sx={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 0.5 }}>
                  {gallery.map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: i === activeIndex ? '#fea116' : 'rgba(255,255,255,0.5)',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Content Section */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    color: '#2b2b2b'
                  }}
                >
                  {caravan.title}
                </Typography>
                <CustomButton
                  bgColor="#fea116"
                  textColor="#fff"
                  onClick={handleBookNow}
                  sx={{ borderRadius: '25px', px: 3, fontWeight: 700, fontSize: '0.9rem' }}
                >
                  Book Now
                </CustomButton>
              </Box>

              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  color: '#5b5b5b',
                  mt: 1,
                  lineHeight: 1.6,
                  fontSize: '0.95rem'
                }}
              >
                {caravan.description}
              </Typography>

              <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                <Typography
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#fea116'
                  }}
                >
                  {caravan.pricePerDay}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.75rem',
                    color: '#5b5b5b'
                  }}
                >
                  (250 of Free Run)*
                </Typography>
              </Box>
            </Box>
          </Box>
        </MotionSection>

        {/* Tabs Section */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={(_, v) => setTabValue(v)}
            TabIndicatorProps={{ sx: { bgcolor: '#fea116' } }}
            sx={{
              '& .MuiTab-root': {
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minWidth: 120,
                '&.Mui-selected': { color: '#fea116' }
              }
            }}
          >
            <Tab label="Information" />
            <Tab label="Review" />
          </Tabs>
        </Box>

        {tabValue === 0 && (
          <Box>
            {/* Description */}
            <MotionSection delay={100}>
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 1, fontFamily: '"Poppins", sans-serif' }}>
                  Description:
                </Typography>
                <Typography sx={{ color: '#5b5b5b', lineHeight: 1.7, fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {caravan.fullDescription || caravan.description}
                </Typography>
              </Box>
            </MotionSection>

            <Divider sx={{ my: 4 }} />

            {/* Specification */}
            <MotionSection delay={200}>
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 2, fontFamily: '"Poppins", sans-serif', color: '#444' }}>
                  Specification:
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <LocalGasStationIcon sx={{ color: '#fea116', fontSize: '1.2rem' }} />
                      <Typography sx={{ fontWeight: 500, color: '#5b5b5b', fontSize: '0.95rem' }}>{caravan.specificationSummary?.fuel || 'Diesel'}</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <ChildCareIcon sx={{ color: '#fea116', fontSize: '1.2rem' }} />
                      <Typography sx={{ fontWeight: 500, color: '#5b5b5b', fontSize: '0.95rem' }}>{caravan.specificationSummary?.kids || '2 Kids'}</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <PersonIcon sx={{ color: '#fea116', fontSize: '1.2rem' }} />
                      <Typography sx={{ fontWeight: 500, color: '#5b5b5b', fontSize: '0.95rem' }}>{caravan.specificationSummary?.adults || '4 Adults'}</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <DirectionsCarIcon sx={{ color: '#fea116', fontSize: '1.2rem' }} />
                      <Typography sx={{ fontWeight: 500, color: '#5b5b5b', fontSize: '0.95rem' }}>{caravan.specificationSummary?.vehicleType || 'Vehicle'}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </MotionSection>

            <Divider sx={{ my: 4 }} />

            {/* Inclusions */}
            {caravan.inclusions && (
              <MotionSection delay={300}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '1.4rem',
                      mb: 2.5,
                      fontFamily: '"Poppins", sans-serif',
                      color: '#333',
                    }}
                  >
                    Inclusions:
                  </Typography>
                  <Box
                    sx={{
                      columnCount: { xs: 1, sm: 2, md: 3 },
                      columnGap: { xs: 2, md: 4 },
                      '& > *': { breakInside: 'avoid', display: 'inline-block', width: '100%', mb: { xs: 1, md: 1.5 } }
                    }}
                  >
                    {caravan.inclusions.map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <Box sx={{ display: 'flex', flexShrink: 0, mt: 0.2 }}>{getIconForItem(item)}</Box>
                        <Typography
                          sx={{
                            fontSize: '0.82rem',
                            color: '#555',
                            lineHeight: 1.3,
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontWeight: 500,
                            wordBreak: 'break-word'
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </MotionSection>
            )}

            <Divider sx={{ my: 4 }} />

            {/* Exclusions */}
            {caravan.exclusions && (
              <MotionSection delay={400}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '1.4rem',
                      mb: 2.5,
                      fontFamily: '"Poppins", sans-serif',
                      color: '#333',
                    }}
                  >
                    Exclusions:
                  </Typography>
                  <Box
                    sx={{
                      columnCount: { xs: 1, sm: 2, md: 3 },
                      columnGap: { xs: 2, md: 4 },
                      '& > *': { breakInside: 'avoid', display: 'inline-block', width: '100%', mb: { xs: 1, md: 1.5 } }
                    }}
                  >
                    {caravan.exclusions.map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <Box sx={{ display: 'flex', flexShrink: 0, mt: 0.2 }}>{getIconForItem(item)}</Box>
                        <Typography
                          sx={{
                            fontSize: '0.82rem',
                            color: '#555',
                            lineHeight: 1.3,
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontWeight: 500,
                            wordBreak: 'break-word'
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </MotionSection>
            )}

            <Divider sx={{ my: 4 }} />

            {/* Services */}
            {caravan.services && (
              <MotionSection delay={500}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '1.4rem',
                      mb: 2.5,
                      fontFamily: '"Poppins", sans-serif',
                      color: '#333',
                    }}
                  >
                    Services:
                  </Typography>
                  <Grid container spacing={2}>
                    {caravan.services.map((item, idx) => (
                      <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.25 }}>
                          <Box sx={{ display: 'flex', flexShrink: 0 }}>{getIconForItem(item)}</Box>
                          <Typography
                            sx={{
                              fontSize: '0.85rem',
                              color: '#555',
                              lineHeight: 1.3,
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                              fontWeight: 500,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </MotionSection>
            )}
          </Box>
        )}

        {tabValue === 1 && (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography color="text.secondary">No reviews yet for this caravan.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default CaravanDetailsPage
