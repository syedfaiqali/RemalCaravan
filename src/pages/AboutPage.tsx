import AboutHeroHighlightsSection from '../components/sections/about/AboutHeroHighlightsSection'
import AboutWhyChooseSection from '../components/sections/about/AboutWhyChooseSection'
import AboutStorySection from '../components/sections/about/AboutStorySection'
import AboutMissionVisionSection from '../components/sections/about/AboutMissionVisionSection'
import AboutExperienceSection from '../components/sections/about/AboutExperienceSection'
import {
  aboutHeroImage,
  aboutJourneyImages,
  aboutFooterImage
} from '../data/aboutContent'

function AboutPage() {
  return (
    <>
      <AboutHeroHighlightsSection image={aboutHeroImage} />
      <AboutStorySection image={aboutJourneyImages.large} />
      <AboutWhyChooseSection />
      <AboutMissionVisionSection />
      <AboutExperienceSection image={aboutFooterImage} />
    </>
  )
}

export default AboutPage
