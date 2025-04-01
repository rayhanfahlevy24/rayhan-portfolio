import { assets } from '../assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={assets.rayhanlogo} alt="" className='w-28 cursor-pointer mr-14'/>
            </a>    

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                <li><a className='font-Ovo' href="#home">Home</a></li>
                <li><a className='font-Ovo' href="#about">About</a></li>
                <li><a className='font-Ovo' href="#project">Project</a></li>
            </ul>

            <div className='flex items-center gap-4'>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-400
                rounded-full ml-4 font-Ovo hover:bg-slate-200 transition'>Contact <Image src={assets.arrow_icon} alt="" className='w-3'/></a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>

            {/* Mobile Menu */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64
            z-50 h-screen bg-slate-100 transition duration-500'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#work">Work</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar