import React from 'react'
import "./AboutSection.scss"
import Container from '../../Container/Container'
import ImageDivide from '../ImageDivide/ImageDivide'

function AboutSection() {
    return (
        <div className='about-section'>
            <Container>
                <div className='about-section-top'>
                  ..  <p>KNOW MORE</p>
                </div>

                <div className='about-section-bottom'>

                    <div className='about-section-bottom-left'>
                        <h1>A Little About
                            <span> Parshwanath’s </span>History </h1>
                    </div>

                    <div className='about-section-bottom-right'>
                        <p>Lorem ipsum dolor sit amet, consec adipis elit, sed do eius  tempor incididunt ut labore et  Lorem ipsum dolor sit amet, consec adipis el, sed do eiusmod tempor incididunt ut labore et  Lorem ipsum dolor  amet, consec adipis elit, sed do eiusmod tempor incididunt ut labore et  Lorem ipsum dolor sit amet, consec adipis elit, sed do eiusmod tempor incididunt ut labore et
                        </p>
                        <button>READ MORE</button>
                    </div>

                </div>

            </Container>
            <ImageDivide></ImageDivide>

        </div>
    )
}

export default AboutSection