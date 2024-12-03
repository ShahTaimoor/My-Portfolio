import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
    return (
        <section className=' md:px-20 pb-4 border-b border-neutral-800'>
                <h2 className='my-20  text-4xl text-center'>Experiences</h2>
        {EXPERIENCES.map((item,index)=>(
            <div key={index} className='mb-8  md:flex  justify-between '>
              <div  className='md:w-[40%]'>
                <p>{item.year}</p>
              </div>
              <div className='md:w-[60%] mb-10'>
                <h6>{item.role} - {''}
                    <span>{item.company}</span>
                </h6>
              <p className='tracking-tighter mb-3'>{item.description}</p>
              {item.technologies.map((item,index)=>(
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2  py-1 text-sm font-medium text-purple-800'>
                    {item}
                </span>
              ))}
              </div>
            </div>
        ))}
        </section>
    )
}

export default Experience