import React from 'react'
import Footer from '../Component/Footer/Footer'
import GetToKnow from '../Component/GetToKnow/GetToKnow'
import Abt_hero from '../Component/About/Abt-Hero/Abt_hero'
import OurStory from '../Component/About/OurStory/OurStory'
import VisionMision from '../Component/About/VisionMision/VisionMision'
import Milestone from '../Component/About/Milestone/Milestone'

function About() {
  return (
    <div>
        <Abt_hero/>
        <OurStory/>
        <VisionMision/>
        <Milestone/>
        <GetToKnow/>
        <Footer></Footer>
    </div>
  )
}

export default About