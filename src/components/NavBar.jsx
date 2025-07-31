import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import PropTypes from 'prop-types';

const NavBar = ({theme, setTheme}) =>{
    const {setShowNav} = useContext(PopupContext)
    return(
        <div className="flex justify-between">
            <Logo/>
            <div className="hidden  md:flex gap-4 text-white items-center font-[Manrope]">
                <button
                  onClick={() => {
                    const skills = document.getElementById('skills');
                    skills.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-bold dark:text-gray-200 text-gray-900 text-xl relative focus:outline-none focus:underline hover:underline hover:text-indigo-600 transition"
                  aria-current="page"
                >
                  Skills Acquired
                </button>
            
    
                <button
                  onClick={() => {
                    const skills = document.getElementById('projects');
                    skills.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-bold dark:text-gray-200 text-gray-900 text-xl focus:outline-none hover:underline hover:text-indigo-600 transition"
                >
                  My Projects
                </button>
        
    
                <button
                  onClick={() => {
                    const skills = document.getElementById('github');
                    skills.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-bold dark:text-gray-200 text-gray-900 text-xl focus:outline-none hover:underline hover:text-indigo-600 transition"
                >
                  Github
                </button>
            
                <div className="border-l-2 dark:text-black text-white">
i
                </div>
                <a href="https://github.com/coollad49" className="text-black dark:text-white">
                    <FontAwesomeIcon icon={faGithub} fontSize={32}/>
                </a>
                <div onClick={()=>setTheme(!theme)} className="text-gray-700 dark:text-white cursor-pointer">
                    {theme? <FontAwesomeIcon icon={faSun} fontSize={26}/> : <FontAwesomeIcon icon={faMoon} fontSize={26}/>}
                </div>
            </div>
            <div className="flex items-center md:hidden gap-8">
                <div onClick={()=>setTheme(!theme)} className="text-gray-700 dark:text-white cursor-pointer">
                    {theme? <FontAwesomeIcon icon={faSun} fontSize={26}/> : <FontAwesomeIcon icon={faMoon} fontSize={26}/>}
                </div>
                <div onClick={()=>{
                    setShowNav(true)
                }} className="dark:text-white">
                    <FontAwesomeIcon icon={faBars} fontSize={32}/>
                </div>
            </div>
            
        </div>
    )
}

NavBar.propTypes = {
    theme: PropTypes.bool.isRequired,
    setTheme: PropTypes.func.isRequired,
};
export default NavBar;