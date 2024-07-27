import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = () =>{
    
    return(
        <div className="flex justify-between">
            <Logo/>
            <div className="hidden  md:flex gap-4 text-white items-center font-[Manrope]">
                <button onClick={()=>{
                    const skills = document.getElementById('skills')
                    skills.scrollIntoView({
                        behavior : 'smooth'
                    })
                }} className="font-bold text-gray-200 text-xl">Skills Acquired</button>
            
    
                <button onClick={()=>{
                    const skills = document.getElementById('projects')
                    skills.scrollIntoView({
                        behavior : 'smooth'
                    })
                }} className="font-bold text-gray-200 text-xl">My Projects</button>
        
    
                <button onClick={()=>{
                    const skills = document.getElementById('github')
                    skills.scrollIntoView({
                        behavior : 'smooth'
                    })
                }} className="font-bold text-gray-200 text-xl">Github</button>
            
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