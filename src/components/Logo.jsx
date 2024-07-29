import { assets } from "../assets/assets"

const Logo = () => {
  return (
    <div className="dark:text-white flex space-x-3 items-center py-5">
        <img src={assets.code} alt="" className="w-10 rounded-md"/>
        <h2 className="text-3xl font-medium  hidden md:block tracking-wide ">lucas dev</h2>
    </div>
    
  )
}

export default Logo