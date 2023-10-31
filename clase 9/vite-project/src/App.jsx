
import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'

function App() {
  const [search, setSearch]= useState(0)
  const[docsFound, setDocsFound]= useState([])
  const[show, setShow]= useState (false)
  let doctores = [
    { id: 1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
    { id: 2, nombre: 'Julius Hibbert' , especialidad: 'Dermatologo'},
    { id: 3, nombre: 'Nick Riviera' , especialidad: 'Otrorrinonaringologo'},
    { id: 4, nombre: 'John Zoidberg ' , especialidad: 'Cirujano'}
  ]
    
    const handelChange = (event) => setSearch(event.target.value.trim())
    const handelSerch = () => {
      const filterDocs = doctores.filter(doctor => doctor.nombre.toLowerCase().includes(search.toLowerCase()))
      setDocsFound(filterDocs);
      if (filterDocs.length > 0) {
        setShow(true);
      }
      
    }
  return (
    <>
    <input type="text" placeholder='Busqueda' onChange={handelChange}/>
    <button onClick={handelSerch}> 🔍 </button>
    {!show &&
    <Listado doctores={doctores}/>
    }

    {search}
    
      {show &&
        <>
        <h3>Doctores Encontrados</h3>
        <Listado doctores={docsFound}/>
        </>
      }
    </>
  )
}

export default App
