import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BookingGuard from './components/booking/BookingGuard'
import SupportWidget from './components/support/SupportWidget'
import ScrollToTopFab from './components/common/ScrollToTopFab'
import ScrollToTopOnRoute from './components/common/ScrollToTopOnRoute'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BookingPage = lazy(() => import('./pages/BookingPage'))
const CaravanDetailsPage = lazy(() => import('./pages/CaravanDetailsPage'))

const loader = (
  <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
    <CircularProgress />
  </Box>
)

function App() {
  const location = useLocation()

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTopOnRoute />
      <Navbar />
      <Box key={location.pathname} component="main" sx={{ flexGrow: 1 }}>
        <Suspense fallback={loader}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/caravan/:id" element={<CaravanDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/booking"
              element={
                <BookingGuard>
                  <BookingPage />
                </BookingGuard>
              }
            />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
      <ScrollToTopFab />
      <SupportWidget />
    </Box>
  )
}

export default App
