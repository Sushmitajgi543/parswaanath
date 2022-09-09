import React from 'react'
import { Container } from '../../Footer/FooterStyle'
import "./Style.scss"
function VisionMision() {
    return (
        <div className='VisionMision'>
            <Container id='div'>
                <div className='VisionMision-top'>
                    ..  <p>GOALS</p>
                </div>

                <div className='VisionMision-bottom'>


                    <h1>VISION AND <span>MISSION</span></h1>
                    <div></div>
                </div>
            </Container>
            <Container id='vision-mission'>
            <div className='content'>
                <div className='content-vision'>
                    <h3>Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <span> adipiscing elit, sed do eiusmod tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</p>
                </div>
                <div className='content-mission'>
                    <h3>Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <span> adipiscing elit, sed do eiusmod tempor</span>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori</p>
                </div>

            </div>
            </Container>
        </div>
    )
}

export default VisionMision