import { assets } from '../assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='mt-20'>

        <div className='text-center sm:flex items-center justify-between border-t-2 border-gray-400
        mx-[10%] mt-12 py-6'>
            <div className='w-max flex items-center gap-2 sm:text-left text-center mx-auto sm:mx-0'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                rayhanfahlevy@gmail.com
            </div>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/rayhanfahlevy24">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/rayhan-fahlevy/">LinkedIn</a></li>
                <li><a target='_blank' href="https://dribbble.com/rayhanfahlevy24">Dribbble</a></li>
            </ul>
        </div>
        <div className='text-center mt-4 mb-4'>
            <p>&copy; 2025 Rayhan mark. All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer