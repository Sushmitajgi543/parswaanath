import React from 'react'
import Container from '../../Container/Container'
import Header from '../../Header/Header'
import dot from "../../../Assets/Image/dot.png"
import group from "../../../Assets/Image/group.png"
import "./HeroSection.scss"
function Herosection() {
  return (
    <div className='herosection'>
      <Header />
      <Container className="herosection-content">
        <div className='herosection-content-text'>
          <h3>PARSHWNATH</h3>
          <h1>Leading Manufacturers of Industrial Pigment And <span>Dyes</span> </h1>
          <div className='herosection-content-text-para' >
            <span>
              <img src={dot} alt="dot" />
            </span>
            <p>Lorem ipsum dolor sit amet, consec adipis elit, sed do eiusmod tempor incididunt ut labore
              et
            </p>
          </div>

        </div>
        <div className='herosection-content-image'>
          <div className='herosection-content-image-1'>
            <div >

            </div>
          </div>
          <div className='herosection-content-image-2'>
            <div></div>
            <span>
              {/* <img src={group} alt="" /> */}
            </span>

          </div>

        </div>
      </Container>
      <div className='herosection-scroll'>

        <button>^</button>

      </div>
    </div>
  )
}

export default Herosection