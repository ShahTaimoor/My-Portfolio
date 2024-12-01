import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Home = () => {
    return (
        <>

            <section className="md:flex items-center justify-between md:pl-44 md:pr-10">
                <div className="relative">
                    <div className='mt-10 pl-52 text-[250px] text-blue-700 italic font-bold'>
                        T
                    </div>
                    <div className="absolute space-y-4 bottom-20 left-20 font">
                        <h1>SHAH TAIMOOR</h1>
                        <p>MERN STACK DEVELOPER!</p>

                        <button className="bg-white shadow-lg  hover:-translate-y-1 hover:duration-150 text-black px-3 py-2 font-semibold rounded-sm">About Me </button>

                    </div>
                </div>

                <ul className="space-y-7 text-2xl pt-20 text-[#b0b2c3] ">
                    <li className="hover:text-white hover:duration-300 hover:transition-all"><Link target="_blank"><ImLinkedin2 /></Link></li>
                    <li className="hover:text-white hover:duration-300 hover:transition-all"><Link target="_blank"><BsGithub /></Link></li>
                    <li className="hover:text-white hover:duration-300 hover:transition-all"><Link target="_blank"><FaXTwitter /></Link></li>

                </ul>
            </section>
            <div className="w-32 mx-auto mt-28">

            <button  className="bg-white shadow-lg   hover:-translate-y-1 hover:duration-150 text-black px-3 py-2 font-semibold rounded-sm">Latest Work</button>
            </div>

        </>
    )
}

export default Home