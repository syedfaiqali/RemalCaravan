import DestinationsHeroSection from '../components/sections/destinations/DestinationsHeroSection'
import DestinationsGridSection from '../components/sections/destinations/DestinationsGridSection'
import FeaturedRoadTripsSection from '../components/sections/destinations/FeaturedRoadTripsSection'
import TravelFreelySection from '../components/sections/destinations/TravelFreelySection'
// import RecommendedTripsSection from '../components/sections/destinations/RecommendedTripsSection'
import AdventureCTASection from '../components/common/AdventureCTASection'

function DestinationsPage() {
  return (
    <>
      <DestinationsHeroSection />
      <DestinationsGridSection />
      <FeaturedRoadTripsSection />
      <TravelFreelySection />
      {/* <RecommendedTripsSection /> */}
      <AdventureCTASection
        title="Ready To Explore The New Destinations?"
        subtitle="Stop dreaming and start driving. Choose your destination, pick your RV,
and create memories that will last forever."
        buttonText="Book Your RV Now"
      />
    </>
  )
}

export default DestinationsPage
