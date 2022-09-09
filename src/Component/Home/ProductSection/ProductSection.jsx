import React from 'react'
import Container from '../../Container/Container'
import "./ProductSection.scss"
function ProductSection() {
  return (
    <div  className='ProductSection'>
        <Container>
                <div className='product-section-top'>
                  ..  <p>PRODUCTS</p>
                </div>

                <div className='product-section-bottom'>

                    <div className='product-section-bottom-left'>
                        <h1>What we 
                            <span> Manufacture</span> </h1>
                    </div>

                    


                </div>

            </Container>
            <div className='image'>
              <div className='d1'></div>
              <div className='d2'></div>

              <div className='d3'></div>

            </div>
    </div>
  )
}

export default ProductSection