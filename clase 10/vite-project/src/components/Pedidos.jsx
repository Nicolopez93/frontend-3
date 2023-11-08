import React, { useEffect, useState } from 'react'
import Pizza from './Pizza'

const Pedidos = () => {
    const [show, setShow] = useState(false)
    

    useEffect (() =>{
        setTimeout(() => {
            console.log("el componente fue actualizado");
            setShow (true)
        }, 2000);
    },[])

    const cancelarPedidos = () => { 
        setShow (!show)
        console.log("desmontamos el componente");
    }

  return (
    <div>
        <h1> Su Pedido </h1>
        { show ? <Pizza/> : null }
        <button onClick={cancelarPedidos}>Cancelar Pedido</button>
    </div>
  )
}

export default Pedidos
