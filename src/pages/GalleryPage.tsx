import GalleryHeroSection from '../components/sections/gallery/GalleryHeroSection'
import GalleryContentSection from '../components/sections/gallery/GalleryContentSection'
import AdventureCTASection from '../components/common/AdventureCTASection'

function GalleryPage() {
  return (
    <>
      <GalleryHeroSection />
      <GalleryContentSection />
      <AdventureCTASection 
        title="Start Your Own RV Adventure"
        subtitle="Ready to write your own story? Book your premium RV today and hit the open road."
        buttonText="Book Your RV Now"
      />
    </>
  )
}

export default GalleryPage