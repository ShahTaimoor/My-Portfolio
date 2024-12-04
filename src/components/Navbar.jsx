import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between mt-3">
            <div >
                <h1 className="text-5xl cursor-pointer font-bold italic">T</h1>
            </div>

            <div className="flex text-2xl cursor-pointer items-center gap-6">
                <Link target="_blank" to='https://github.com/ShahTaimoor?tab=repositories' className="hover:text-slate-600 transition-all ease-in-out duration-150"><FaGithub /></Link>
                <Link target="_blank" to='https://www.linkedin.com/in/hafiz-shah-taimoor-b86191268/' className="hover:text-slate-600 transition-all ease-in-out duration-150"><FaLinkedinIn /></Link>
                




            </div>
        </nav>
    )
}

export default Navbar