
import { HERO_CONTENT } from '../constants'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center h-full mt-28  justify-between'>
            <div className='md:w-1/2 flex flex-col gap-4'>
                <h1 className='text-5xl md:text-5xl font-thin'>Shah Taimoor</h1>
                <span className='from-pink-600 via-slate-800 bg-gradient-to-r text-2xl to-purple-500 bg-clip-text text-transparent  tracking-tight'>Full Stack Developer</span>
               <p className='tracking-tighter font-thin'>{HERO_CONTENT}</p>

            </div>
            <div className=''>
              <img className='md:w-[400px] mt-10 md:mt-0 shadow-2xl rounded-2xl opacity-65' src="/images/hero.jpg" alt="" />
            </div>
    </section>
  )
}

export default Hero