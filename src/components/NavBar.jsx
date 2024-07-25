import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () =>{
    return(
        <div className="flex justify-between">
            <Logo/>
            <div className="text-white flex items-center">
                <FontAwesomeIcon icon={faBars} fontSize={32}/>
            </div>
        </div>
    )
}

export default NavBar;