import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'
import { featuredCaravans, heroImage } from '../data/caravans'
import {
  aboutPreviewImages,
  caravanForYouImages,
  experienceBannerImage,
  popularDestinations,
  recommendedDestinations,
} from '../data/homeContent'
import HomeHeroSection from '../components/sections/home/HomeHeroSection'
import FeaturedCaravansSection from '../components/sections/home/FeaturedCaravansSection'
import CaravanForYouSection from '../components/sections/home/CaravanForYouSection'
import RecommendedCarouselSection from '../components/sections/home/RecommendedCarouselSection'
import PopularDestinationsSection from '../components/sections/home/PopularDestinationsSection'
import AboutPreviewSection from '../components/sections/home/AboutPreviewSection'
import ExperienceBannerSection from '../components/sections/home/ExperienceBannerSection'

function HomePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const recommendedScrollRef = useRef<HTMLDivElement | null>(null)

  const handleBookNow = (id: string) => {
    dispatch(selectCaravan(id))
    navigate('/booking')
  }

  const scrollRecommended = (direction: 'left' | 'right') => {
    if (!recommendedScrollRef.current) return
    const amount = Math.round(recommendedScrollRef.current.clientWidth * 0.8)
    recommendedScrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <HomeHeroSection
        heroImage={heroImage}
        onViewGallery={() => navigate('/gallery')}
        onExploreServices={() => navigate('/services')}
      />

      <FeaturedCaravansSection
        caravans={featuredCaravans}
        onViewDetails={(id) => navigate(`/caravan/${id}`)}
        onBookNow={handleBookNow}
      />

      <CaravanForYouSection images={caravanForYouImages} />

      <RecommendedCarouselSection
        items={recommendedDestinations}
        scrollRef={recommendedScrollRef}
        onMoveLeft={() => scrollRecommended('left')}
        onMoveRight={() => scrollRecommended('right')}
      />

      <PopularDestinationsSection items={popularDestinations} />

      <AboutPreviewSection
        mainImage={aboutPreviewImages.main}
        galleryImages={aboutPreviewImages.gallery}
        onMoreAbout={() => navigate('/about')}
      />

      <ExperienceBannerSection
        image={experienceBannerImage}
        onBook={() => navigate('/booking')}
        onLearnMore={() => navigate('/contact')}
      />
    </>
  )
}

export default HomePage
