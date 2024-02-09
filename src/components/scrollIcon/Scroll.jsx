import React, { useEffect, useState } from 'react'
import './scroll.css'
import { FaAngleUp } from "react-icons/fa6";


const Scroll = () => {
let [is200down, setIs200down] = useState(false)
let handleIcon = ()=>{
    window.scrollPosition({top: 0, right: 0, behavior: 'smooth'})
}
let bottomToTop = ()=>{
    let scroolHidden = 200
    let scrollTerms = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTerms > scroolHidden) {
        setIs200down(true)
    }else{
        setIs200down(false)
    }
}
useEffect(()=>{
    window.addEventListener('scroll', bottomToTop)
    return ()=> window.removeEventListener('scroll', bottomToTop)
},[])
  return (
    <div>
        {
            is200down &&
            <a onClick={handleIcon} href="#" className='scroll'>
                <FaAngleUp className='scroll_icon'/>
            </a>
        }
    </div>
  )
}

export default Scroll