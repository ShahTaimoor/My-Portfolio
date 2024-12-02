import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex justify-between mt-3">
            <div >
                <h1 className="text-5xl cursor-pointer font-bold italic">T</h1>
            </div>

            <div className="flex text-2xl cursor-pointer items-center gap-6">
                <FaGithub />
                <FaLinkedinIn />
                <FaXTwitter />
            </div>
        </nav>
    )
}

export default Navbar