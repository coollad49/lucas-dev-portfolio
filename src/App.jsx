import { useEffect, useState } from "react";
import Contribution from "./components/Contribution";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const App = ()=>{
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(()=>{
    let savedTheme = localStorage.getItem('savedTheme')
    if (!savedTheme){
      savedTheme = "dark";
      setLightTheme(false);
      localStorage.setItem("savedTheme", savedTheme)
    }
    setLightTheme(savedTheme === "light" ? true : false);
  }, [])
  return(
    <div className={`${lightTheme? 'dark': ''}`}>
        <div className="relative dark:bg-[#0c0c0c]">
        <Sidebar/>
        <div className="p-4 overflow-auto lg:mx-20">
          <NavBar theme={lightTheme} setTheme={setLightTheme}/>
          <Header/>
        </div>
        <Skills/>
        <div className="p-4 overflow-auto lg:mx-20">
          <Projects/>
          <Contribution dark={lightTheme}/>
        </div>
      </div>
    </div>
    
  )
    
}

export default App;