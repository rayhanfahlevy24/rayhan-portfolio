import { toolsData } from '../assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mt-48 sm:mt-2 mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex flex-col items-center text-center my-10'>
            <p className='mb-10 text-lg max-w-lgl text-justify font-Ovo'>
                I'm a highly passionate Frontend Developer with a strong foundation in UI/UX design. As a fresh graduate
                with extensive hands-on experience in React.js, JavaScript and modern web frameworks, I have built various
                projects that focus on user-friendly and interactive interfaces.
                Throughout my journey, I have collaborated on campus project and internship, enhancing my ability
                to solve complex problems creatively and efficiently. I thrive in fast-paced environments and continuously
                seek to improve my skills in web development and user experience design.
            </p>

            <h4 className='my-6 mt-2 text-gray-700 font-Ovo'>Tools I use</h4>
            <ul className='flex flex-wrap justify-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index) => (
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border
                    border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                    key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default About