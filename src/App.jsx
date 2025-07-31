import { useEffect, useState } from "react";
import Contribution from "./components/Contribution";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const App = ()=>{
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(()=>{
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme){
      setDarkTheme(false);
    }
  }, [])
  return(
    <div className={`${darkTheme? 'dark': ''}`}>
      <div className="relative bg-gray-50 dark:bg-[#18181b]">
        <Sidebar/>
        <div className="p-4 overflow-auto lg:mx-20">
          <NavBar theme={darkTheme} setTheme={setDarkTheme}/>
          <Header/>
        </div>
        <Skills/>
        <div className="p-4 overflow-auto lg:mx-20">
          <Projects/>
          <Contribution dark={darkTheme}/>
        </div>
      </div>
      <footer className="w-full bg-gray-900 text-white py-6  flex flex-col items-center space-y-2">
        <div className="font-bold text-lg">Lucas-Adebayo Daniel</div>
        <div className="flex space-x-4">
          <a href="mailto:coollad49@outlook.com" className="hover:underline">coollad49@outlook.com</a>
          <a href="https://github.com/coollad49" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/daniellucasadebayo/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
        <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Lucas Dev. All rights reserved.</div>
      </footer>
    </div>
    
  )
    
}

export default App;