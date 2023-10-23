import './App.css'
import ClassComponent,{OtroEjemplo} from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'
import Ejercicio from './Components/Ejercicio'
function App() {
  return (
    <>
    
      <Ejercicio nombre = "Juan" edad="29"/>
      <Ejercicio nombre = "Carlos" edad="20"/>
      <ClassComponent/>
      <FuncComponent/>
      <OtroEjemplo/>
      
    </>
  )
}

export default App
