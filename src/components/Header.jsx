import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className="mt-5 flex-col flex justify-center items-center">
        <img src={assets.me} alt="" className="rounded-full w-64"/>
    </div>
  )
}

export default Header