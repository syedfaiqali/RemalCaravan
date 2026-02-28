import { ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

interface BookingGuardProps {
  children: ReactNode
}

function BookingGuard({ children }: BookingGuardProps) {
  const selectedCaravan = useAppSelector((state) => state.booking.selectedCaravan)

  useEffect(() => {
    if (!selectedCaravan) {
      alert('Please select a caravan from Home, Services, or Gallery before booking.')
    }
  }, [selectedCaravan])

  if (!selectedCaravan) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default BookingGuard