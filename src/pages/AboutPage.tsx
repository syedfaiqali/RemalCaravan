import AboutHeroHighlightsSection from '../components/sections/about/AboutHeroHighlightsSection'
import AboutJourneySection from '../components/sections/about/AboutJourneySection'
import AboutWhyChooseSection from '../components/sections/about/AboutWhyChooseSection'
import AboutMissionVisionSection from '../components/sections/about/AboutMissionVisionSection'
import {
  aboutFooterImage,
  aboutHeroImage,
  aboutHighlights,
  aboutJourneyImages,
} from '../data/aboutContent'

function AboutPage() {
  return (
    <>
      <AboutHeroHighlightsSection image={aboutHeroImage} highlights={aboutHighlights} />
      <AboutJourneySection images={aboutJourneyImages} />
      <AboutWhyChooseSection />
      <AboutMissionVisionSection image={aboutFooterImage} />
    </>
  )
}

export default AboutPage
