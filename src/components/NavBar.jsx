import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = () =>{
    return(
        <div className="flex justify-between">
            <Logo/>
            <div className="hidden  md:flex gap-4 text-white items-center font-[Manrope]">
                <div>
                    <a href="#skills" className="font-bold text-gray-200 text-xl">Skills Acquired</a>
                </div>
                <div>
                    <a href="" className="font-bold text-gray-200 text-xl">My Projects</a>
                </div>
                <div>
                    <a href="" className="font-bold text-gray-200 text-xl">Github</a>
                </div>
                <div className="border-l-2 text-black">
i
                </div>
                <a href="https://github.com/coollad49">
                    <FontAwesomeIcon icon={faGithub} fontSize={32}/>
                </a>
            </div>
            <div className="text-white flex items-center md:hidden">
                <FontAwesomeIcon icon={faBars} fontSize={32}/>
            </div>
        </div>
    )
}

export default NavBar;