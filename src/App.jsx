import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = ()=>{
  return(
    <div className="p-4 overflow-auto">
      <NavBar/>
      <Header/>
    </div>
  )
}

export default App;