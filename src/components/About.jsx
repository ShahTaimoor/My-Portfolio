import React from 'react'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <section>
        <h2 className='mb-20 mt-40 text-center text-4xl'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-24'>
            
                <img className='md:w-[400px] rounded-3xl opacity-55' src="/images/hero1.jpg" alt="" />
                <p className='lg:w-1/2 tracking-tighter w-full flex justify-center lg:justify-start'>{ABOUT_TEXT}</p>
            
        </div>
    </section>
  )
}

export default About