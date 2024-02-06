import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import Logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  let [navMenu, setNavMenu] = useState(false)
  useEffect(()=>{
    let navList = document.querySelector('.nav_list')
    navList.style.maxHeight = "0px"
    let navBar = document.querySelector('#navbar')
    navBar.style.paddingBottom = "0px"
  },[])
  let handleClick = ()=>{
    setNavMenu(!navMenu)
  }
  return (
    <section id='navbar' style={{paddingBottom: navMenu ? '390px' : '0px'}}>
        <div className="navbar">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <a href="#" className='logo_image'>
                        <img src={Logo} alt="LogoImage" />
                    </a>
                </div>
                <div className="nav_menu">
                    <ul className='nav_list' style={{ maxHeight: navMenu ? '376px' : '0px' }}>
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
                <div onClick={handleClick} className="bars">
                  <FaBars  id='bar'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar
