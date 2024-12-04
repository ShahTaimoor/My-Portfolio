import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }
})
const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-4 mt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}

        className='text-4xl text-center'>Technologies</motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap gap-4 my-10 justify-center">
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-400 p-4'>
          <FaReact className="text-cyan-400 text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-400 p-4'>
          <RiTailwindCssFill className="text-cyan-400 text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-400 p-4'>
          <FaBootstrap className="text-purple-500 text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'

          className='rounded-2xl border-4 border-neutral-400 p-4'>
          <DiMongodb className="text-green-500 text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-400 p-4'>
          <FaNodeJs className="text-green-500 text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-400 p-4'>
          <SiExpress className="text-yellow-500 text-5xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Technologies