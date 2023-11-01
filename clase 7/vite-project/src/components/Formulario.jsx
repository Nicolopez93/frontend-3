import { useState } from 'react' 
import Card from './Card'  
import './Formulario.css'
const Formulario = () => {
    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [show, setShow]= useState (false);
    const [error, setError]= useState (false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (nombre.trim().length > 3 &&  nombre.trim().startsWith('') && apellido.length >= 6 && edad >= 18) {
            setShow (true)
        }else{
            setError (true)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label> Nombre </label>
            <input  type='text' name='nombre' value={nombre} onChange={(event)=>setNombre(event.target.value)}/>
            <label> Apellido </label>
            <input  type='text' name='apellido' value={apellido} onChange={(event)=>setApellido(event.target.value)}/>
            <label> Edad </label>
            <input min={'0'} type='number' name='edad' value={edad} onChange={(event)=>setEdad(event.target.value)}/>
            <button> Enviar </button>
        </form>
        {
            show ? <Card nombre={nombre} apellido ={apellido} edad ={edad}/> : null
        }
        {error ? <h5> Verificar los datos </h5>: null}
    </div>
  )
}

export default Formulario
