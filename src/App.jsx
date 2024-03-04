import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SpecialSection from './components/SpecialSection'
import TestimonialSection from './components/TestimonialSection'
import StorySection from './components/StorySection'
import Footer from './components/Footer'

import './App.css'

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
      <Footer />
    </>
  )
}

export default App
