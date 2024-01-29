import React, { useEffect } from 'react'
import './navbar.css'
import Logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    
    // useEffect(()=>{
    //     let navList = document.querySelector('.nav_list')
    //     let menuBar = document.querySelector('#menu_bar')
    //     function show() {
    //         navList.classList.toggle("show")
    //     };
    //     return(()=>{
    //         menuBar.addEventListener("click", ()=>{
    //             show()
    //         })
    //     })
    // },[])
    let menuOpenn = ()=>{
        let navList = document.querySelector('.nav_list')
        navList.classList.toggle("show");
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
                    <ul className='nav_list'>
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
                <div className="bars">
                <FaBars onClick={menuOpenn}  className='menu_bar' id='menu_bar' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar