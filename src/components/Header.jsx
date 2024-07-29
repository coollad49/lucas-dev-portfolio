import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className="mt-2 md:mt-4 flex-col flex justify-center items-center space-y-8 md:flex-row-reverse md:justify-between md:item-start">
        <img src={assets.me} alt="" className="rounded-full w-56 md:w-72"/>
        <div className="dark:text-white flex flex-col items-center pb-6 max-w-md md:items-start">
            <h2 className="font-bold text-xl md:text-2xl mb-2">Hi, my name is</h2>
            <h1 className="font-bold text-3xl md:text-4xl mb-3">Lucas-Adebayo Daniel</h1>
            <p className="text-sm text-center dark:text-gray-300 text-gray-900 md:text-left">I am a Software Engineering Intern with hands-on experience in full-stack development, specializing in Django and Tailwind CSS. Proven ability to deliver solutions in agile & CI/CD environments.</p>
            <div className="w-full dark:bg-white dark:text-black bg-black text-white flex justify-around mt-7 p-4 rounded-xl">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-3xl">10</span>
                    <span className="uppercase text-[10px]">verified</span>
                    <span className="uppercase text-[10px]">skills</span>
                </div>
                <div className="border-l-2"></div>
                <div className="flex flex-col items-center">
                    <span className="font-bold text-3xl">3</span>
                    <span className="uppercase text-[10px] ">Professional</span>
                    <span className="uppercase text-[10px]">Projects</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header