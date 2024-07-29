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
      setDarkTheme(true);
    }
  }, [])
  return(
    <div className={`${darkTheme? 'dark': ''}`}>
        <div className="relative dark:bg-[#0c0c0c]">
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
    </div>
    
  )
    
}

export default App;