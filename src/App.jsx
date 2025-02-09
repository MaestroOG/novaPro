import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Details from './components/Details'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FeatureTwo from './components/FeatureTwo'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Details />
      <Testimonials />
      <CTA />
      <FeatureTwo />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  )
}

export default App