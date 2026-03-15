import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'
import { featuredCaravans, premiumCaravans } from '../data/caravans'
import {
  caravanForYouImages,
  popularDestinations,
} from '../data/homeContent'
import HomeHeroSection from '../components/sections/home/HomeHeroSection'
import FeaturedCaravansSection from '../components/sections/home/FeaturedCaravansSection'
import CaravanForYouSection from '../components/sections/home/CaravanForYouSection'

import PopularDestinationsSection from '../components/sections/home/PopularDestinationsSection'
import RecommendedCaravansSection from '../components/sections/home/RecommendedCaravansSection'
import WhyChooseUsSection from '../components/sections/home/WhyChooseUsSection'
import BookYourRVSection from '../components/sections/home/BookYourRVSection'
import HassleFreeRentalSection from '../components/sections/home/HassleFreeRentalSection'

function HomePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const handleBookNow = (id: string) => {
    dispatch(selectCaravan(id))
    navigate('/booking')
  }



  return (
    <>
      <HomeHeroSection
        onViewGallery={() => navigate('/gallery')}
      />

      <FeaturedCaravansSection
        caravans={featuredCaravans}
        onBookNow={handleBookNow}
      />

      <CaravanForYouSection 
        image={caravanForYouImages[0]} 
        onLearnMore={() => navigate('/about')}
      />

      <PopularDestinationsSection items={popularDestinations} />

      <RecommendedCaravansSection 
        caravans={premiumCaravans}
        onBookNow={handleBookNow}
      />

      <WhyChooseUsSection />

      <BookYourRVSection />

      <HassleFreeRentalSection onLearnMore={() => navigate('/about')} />
    </>
  )
}

export default HomePage
