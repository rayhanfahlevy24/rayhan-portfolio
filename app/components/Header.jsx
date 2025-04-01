import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="w-full px-[12%] h-screen flex items-center"> 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">

        <div className="text-center sm:text-left order-last lg:order-first"> 
          <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-bold text-gray-900">
            I'm <span className="text-slate-400">Rayhan Fahlevy</span>
          </h1>
          <p className="mt-4 text-lg max-w-[90%] sm:max-w-lg mx-auto sm:mx-0 font-Ovo text-justify"> 
            I love transforming ideas into interactive digital experiences. With a solid foundation in web development,
            I create elegant, functional and user-friendly websites that drive user engagement. I am commited to continously
            learning and exploring new technologies to deliver innovative and effective solutions.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
            <a 
              href="/sample-resume.pdf" 
              download 
              className="px-10 py-3 border-2 rounded-full border-gray-400 flex items-center gap-2 hover:bg-slate-200 transition"
            >
              <Image src={assets.download_icon} alt="" className="w-4" />
              My Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center mt-64 sm:mt-8 lg:mt-0 order-first lg:order-last"> 
          <div className="relative w-52 h-52 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Image 
              src={assets.levyart} 
              alt="Profile Image" 
              layout="fill" 
              objectFit="contain"
              className="shadow-none bg-transparent" 
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header