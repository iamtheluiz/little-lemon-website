import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SpecialSection from './components/SpecialSection'

import './App.css'
import TestimonialSection from './components/TestimonialSection'
import StorySection from './components/StorySection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SpecialSection />
        <TestimonialSection />
        <StorySection />
      </main>
    </>
  )
}

export default App
