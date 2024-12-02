import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-4">
        <h2 className='text-4xl text-center'>Technologies</h2>

        <div className="flex gap-4 my-10 justify-center">
            <div className='rounded-2xl border-4 border-neutral-400 p-4'>
            <FaReact className="text-cyan-400 text-5xl"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-400 p-4'>
            <RiTailwindCssFill className="text-cyan-400 text-5xl"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-400 p-4'>
            <FaBootstrap className="text-purple-500 text-5xl"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-400 p-4'>
            <DiMongodb className="text-green-500 text-5xl"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-400 p-4'>
            <FaNodeJs className="text-green-500 text-5xl"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-400 p-4'>
            <SiExpress className="text-yellow-500 text-5xl"/>
            </div>
        </div>
    </section>
  )
}

export default Technologies