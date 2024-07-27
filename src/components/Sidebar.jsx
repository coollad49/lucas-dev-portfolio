import { useContext } from "react"
import { PopupContext } from "../context/PopupContext"

const Sidebar = () => {
  const {showNav, setShowNav} = useContext(PopupContext)
  
  if (showNav){
    return(
        <div className={`fixed bg-slate-800 h-full w-full top-0 p-7 ${showNav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <span onClick={()=>{
          setShowNav(false)
        }} className="text-purple-500 font-bold text-xl font-mono">x</span>
        <div className="space-y-5 mt-5 ml-10 text-white mx-24">
          <button className="text-lg font-medium focus:bg-purple-800 flex pl-5 w-full rounded-full p-1 py-2">Home</button>
          <button onClick={()=>{
                      setShowNav(false)
                      const skills = document.getElementById('skills')
                      skills.scrollIntoView({
                          behavior : 'smooth'
                      })
                  }} className="text-lg font-medium focus:bg-purple-800 flex pl-5 w-full rounded-full p-1 py-2">Skills Acquired</button>
          <button onClick={()=>{
                      setShowNav(false)
                      const skills = document.getElementById('projects')
                      skills.scrollIntoView({
                          behavior : 'smooth'
                      })
                  }} className="text-lg font-medium focus:bg-purple-800 flex pl-5 w-full rounded-full p-1 py-2">My Projects</button>
          <button onClick={()=>{
                      setShowNav(false)
                      const skills = document.getElementById('github')
                      skills.scrollIntoView({
                          behavior : 'smooth'
                      })
                  }} className="text-lg font-medium focus:bg-purple-800 flex pl-5 w-full rounded-full p-1 py-2">GitHub</button>

        </div>
      </div>
    )
  }
  else{
    return ''
  }
}

export default Sidebar