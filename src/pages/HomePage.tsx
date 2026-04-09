import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'
import { featuredCaravans, premiumCaravans } from '../data/caravans'
import {
  popularDestinations,
} from '../data/homeContent'
import HomeHeroSection from '../components/sections/home/HomeHeroSection'
import FeaturedCaravansSection from '../components/sections/home/FeaturedCaravansSection'
import CaravanForYouSection from '../components/sections/home/CaravanForYouSection'

import PopularDestinationsSection from '../components/sections/home/PopularDestinationsSection'
import RecommendedCaravansSection from '../components/sections/home/RecommendedCaravansSection'
import WhyChooseUsSection from '../components/sections/home/WhyChooseUsSection'
import BookYourRVSection from '../components/sections/home/BookYourRVSection'
import AdventureCTASection from '../components/common/AdventureCTASection'
import MotionSection from '../components/common/MotionSection'

function HomePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const handleBookNow = (id: string) => {
    dispatch(selectCaravan(id))
    navigate('/contact')
  }



  return (
    <>
      <MotionSection>
        <HomeHeroSection
          onViewGallery={() => navigate('/contact')}
        />
      </MotionSection>

      <MotionSection delay={100}>
        <FeaturedCaravansSection
          caravans={premiumCaravans}
          onViewDetails={(id) => navigate(`/caravan/${id}`)}
        />
      </MotionSection>

      <MotionSection delay={200}>
        <CaravanForYouSection
          onLearnMore={() => navigate('/about')}
        />
      </MotionSection>

      <MotionSection delay={100}>
        <PopularDestinationsSection items={popularDestinations} />
      </MotionSection>

      {/* <MotionSection delay={100}>
        <RecommendedCaravansSection
          caravans={premiumCaravans}
          onBookNow={handleBookNow}
        />
      </MotionSection> */}

      <MotionSection delay={100}>
        <WhyChooseUsSection />
      </MotionSection>

      <MotionSection delay={100}>
        <BookYourRVSection />
      </MotionSection>

      <AdventureCTASection
        title="Hassle-Free Rental Experience"
        subtitle="Experience the Remal Caravans Difference across the UAE."
        buttonText="Learn More"
        onAction={() => navigate('/about')}
      />
    </>
  )
}

export default HomePage
