import { motion } from "motion/react"
import { HERO_CONTENT } from '../constants'


const container = (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center h-full mt-28  justify-between'>
            <div className='md:w-1/2 flex flex-col gap-4'>
                <motion.h1 
            variants={container(0)}
            initial='hidden'
            animate='visible'
                className='text-5xl md:text-5xl font-thin'>Shah Taimoor</motion.h1>
                <motion.span
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                className='from-pink-600 via-slate-800 bg-gradient-to-r text-2xl to-purple-500 bg-clip-text text-transparent  tracking-tight'>Full Stack Developer</motion.span>
               <motion.p
               variants={container(1)}
               initial='hidden'
               animate='visible'
               
               className='tracking-tighter font-thin'>{HERO_CONTENT}</motion.p>

            </div>
            <div className=''>
              <motion.img
              initial={{x:100, opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:1,delay:1.2}}
               className='md:w-[400px] mt-10 md:mt-0 shadow-2xl rounded-2xl opacity-65' src="/images/hero.jpg" alt="" />
            </div>
    </section>
  )
}

export default Hero