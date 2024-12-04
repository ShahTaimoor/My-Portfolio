import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "motion/react"
const Experience = () => {
    return (
        <section className=' md:px-20 pb-4 border-b border-neutral-800'>
                <motion.h2
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 1.5 }}
                
                className='my-20  text-4xl text-center'>Experiences</motion.h2>
        {EXPERIENCES.map((item,index)=>(
            <div
            
            
            key={index} className='mb-8  md:flex  justify-between '>
              <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:0.5}}
              
              className='md:w-[40%]'>
                <p>{item.year}</p>
              </motion.div>
              <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              
              className='md:w-[60%]  mb-10'>
                
                    <span>{item.company}</span>
                
              <p className='tracking-tighter mb-3 '>{item.description}</p>
              {item.technologies.map((item,index)=>(
                <p key={index} className='mr-2 inline-block rounded bg-neutral-900 mt-3 px-2 py-1 text-sm font-medium text-purple-800'>
                    {item}
                </p>
              ))}
              </motion.div>
            </div>
        ))}
        </section>
    )
}

export default Experience