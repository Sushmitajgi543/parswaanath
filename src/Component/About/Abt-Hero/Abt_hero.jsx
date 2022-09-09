import React from 'react'
import Header from '../../Header/Header'
import Container from '../../Container/Container'
import "./Style.scss"
function Abt_hero() {
    return (
        <div className='Abt-hero'>
            <div className='Abt-hero'>
                <Header />
                <Container className="Abt-hero-content">
                    <div className='Abt-hero-content-text'>
                        <h1>About <span>Us</span> </h1>

                        <div className='Abt-hero-content-text-para' >

                            <p>Lorem ipsum dolor sit amet, consec adipis elit, sed do eiusmod tempor incididunt ut labore et
                            </p>
                        </div>

                    </div>
                    
                </Container>
                <div className='Abt-hero-scroll'>

                    <button>^</button>

                </div>
            </div>
        </div>
    )
}

export default Abt_hero