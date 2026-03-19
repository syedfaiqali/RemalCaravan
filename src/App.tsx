import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppWidget from './components/common/WhatsAppWidget'
import ScrollToTopFab from './components/common/ScrollToTopFab'
import ScrollToTopOnRoute from './components/common/ScrollToTopOnRoute'

import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import DestinationsPage from './pages/DestinationsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FleetPage from './pages/FleetPage'
import CaravanDetailsPage from './pages/CaravanDetailsPage'

function App() {
  const location = useLocation()

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTopOnRoute />
      <Navbar />
      <Box key={location.pathname} component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/caravan/:id" element={<CaravanDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
      <Footer />
      <ScrollToTopFab />
      <WhatsAppWidget />
    </Box>
  )
}

export default App
