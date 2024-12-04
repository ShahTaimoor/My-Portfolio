import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"
const About = () => {
  return (
    <section>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='mb-20 mt-40 text-center text-4xl'>About Me</motion.h2>
      <div className='flex flex-col md:flex-row gap-24'>

        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='md:w-[400px] rounded-3xl opacity-55' src="/images/hero1.jpg" alt="" />
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='lg:w-1/2 tracking-tighter w-full flex justify-center lg:justify-start'>{ABOUT_TEXT}</motion.p>

      </div>
    </section>
  )
}

export default About