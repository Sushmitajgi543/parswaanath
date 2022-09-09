import React from 'react'
import Footer from '../Component/Footer/Footer'
import GetToKnow from '../Component/GetToKnow/GetToKnow'
import Herosection from '../Component/Home/HeroSection/Herosection'
import AboutSection from '../Component/Home/LittleAbout/AboutSection'
import ProductSection from '../Component/Home/ProductSection/ProductSection'

function Home() {
  return (
    <div>
        <Herosection/>
        <AboutSection/>
        <ProductSection></ProductSection>
        <GetToKnow/>
        <Footer></Footer>
    </div>
  )
}

export default Home