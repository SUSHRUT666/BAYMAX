// import React from 'react'
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import SectionSeparator from '../components/SectionSeparator';

const Home = () => {
  return (
     <>    
      <Hero />
      <Features />
      <SectionSeparator/>
      <HowItWorks />
      <Footer />
    </>
  )
}

export default Home