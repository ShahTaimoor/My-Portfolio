import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
    return (
        <section className='h-screen'>
                <h2 className='my-20 text-4xl text-center'>Experiences</h2>
        {EXPERIENCES.map((item,index)=>(
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-3/4'>
                    <p className='mb-2'>{item.year}</p>
                </div>
            </div>
        ))}
        </section>
    )
}

export default Experience