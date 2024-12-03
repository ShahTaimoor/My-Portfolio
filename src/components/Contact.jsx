import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
    return (
        <section>
                <h2 className='text-4xl text-center my-10'>Get In Touch</h2>
               <div className='text-center tracking-tighter'>
                 <p className='my-4'>{CONTACT.address}</p>
                 <p className='my-4'>{CONTACT.phoneNo}</p>
               </div>
        </section>
    )
}

export default Contact