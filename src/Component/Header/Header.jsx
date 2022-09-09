import React from 'react'
import Container from '../Container/Container'
import './Header.scss'
import logo from "../../Assets/Image/logo.png"
import menu from "../../Assets/Image/menu.png"
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='Header'>
        <Container>
            <div>
                <span>
                    <img src={menu} alt="" />
                </span>
                <ul>
                    
                    <li><a href="">Products</a></li>
                    <li><Link to="/about-us"><a href="">About us</a></Link></li>
                    <li><a href="">Contact</a></li>
                    
                </ul>
            </div>
            <div className='logo'>

                <img src={logo} alt="" />
            </div>
            <div className='last'>
                <h4>FB | IN</h4>
            </div>
        </Container>
    </div>
  )
}

export default Header