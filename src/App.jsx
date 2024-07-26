import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

const App = ()=>{
  return(
    <div className="p-4 overflow-auto lg:mx-20">
      <NavBar/>
      <Header/>
      <Skills/>
    </div>
  )
}

export default App;