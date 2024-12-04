import { CONTACT } from '../constants'
import { motion } from "motion/react"
const Contact = () => {
    return (
        <section>
                <motion.h2
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 1.5 }}
                className='text-4xl text-center my-10'>Get In Touch</motion.h2>
               <div className='text-center tracking-tighter'>
                 <motion.p
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 1.5 }}
                 className='my-4'>{CONTACT.address}</motion.p>
                 <motion.p
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1.5 }}
                 className='my-4'>{CONTACT.phoneNo}</motion.p>
                 <motion.p
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: 100 }}
                 transition={{ duration: 1.5 }}
                 className='my-4'>{CONTACT.email}</motion.p>
               </div>
        </section>
    )
}

export default Contact