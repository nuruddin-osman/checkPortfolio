import React, { useEffect, useRef } from 'react'
import './navbar.css'
import Logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    let navMenu = document.querySelector('#navMenu');
    let navRrf = useRef(null)
    let handleClick = ()=>{
        if (navRrf.current.style.opacity == "0") {
            navRrf.current.style.opacity = "1"
        }else{
            navRrf.current.style.opacity = "0"
        }
    }
       
  return (
    <section id='navbar'>
        <div className="navbar">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <a href="#" className='logo_image'>
                        <img src={Logo} alt="LogoImage" />
                    </a>
                </div>
                <div className="nav_menu">
                    <ul className='nav_list' id='navMenu' ref={navRrf}>
                        <li className='nav_item'>
                            <a href="#profile" >profile</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#about" >about</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#skill" >skills</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#project" >projects</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#education" >education</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#contact" >contact</a>
                        </li>
                    </ul>
                </div>
                <div  className="hello"></div>
                <div className="bars">
                <FaBars onClick={handleClick} id='bar'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar