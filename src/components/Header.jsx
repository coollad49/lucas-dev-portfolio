import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className="mt-2 flex-col flex justify-center items-center space-y-8">
        <img src={assets.me} alt="" className="rounded-full w-56"/>
        <div className="text-white flex flex-col items-center pb-6">
            <h2 className="font-bold text-xl mb-2">Hi, my name is</h2>
            <h1 className="font-bold text-3xl mb-3">Lucas-Adebayo Daniel</h1>
            <p className="text-sm text-center text-gray-300">I am a Software Engineering Intern with hands-on experience in full-stack development, specializing in Django and Tailwind CSS. Proven ability to deliver solutions in agile & CI/CD environments.</p>
            <div className="w-full bg-white text-black flex justify-around mt-7 p-4 rounded-xl">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-3xl">10</span>
                    <span className="uppercase text-[10px]">verified</span>
                    <span className="uppercase text-[10px]">skills</span>
                </div>
                <div className="border-l-2"></div>
                <div className="flex flex-col items-center">
                    <span className="font-bold text-3xl">5</span>
                    <span className="uppercase text-[10px] ">Professional</span>
                    <span className="uppercase text-[10px]">Projects</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header