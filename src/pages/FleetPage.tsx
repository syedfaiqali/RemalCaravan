import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectCaravan } from '../store/slices/bookingSlice'
import FleetHeroSection from '../components/sections/fleet/FleetHeroSection'
import FleetGridSection from '../components/sections/fleet/FleetGridSection'
import MotionSection from '../components/common/MotionSection'

function FleetPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  return (
    <>
      <MotionSection>
        <FleetHeroSection />
      </MotionSection>

      <MotionSection delay={100}>
        <FleetGridSection onViewDetails={(id) => navigate(`/caravan/${id}`)} />
      </MotionSection>
    </>
  )
}

export default FleetPage
