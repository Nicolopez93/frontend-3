import React, { useState } from 'react'
import '../styles.css'

const Card = ({tech}) => {
    console.log(tech.img);
    const [counter, setCounter] = useState (0)

    const suma = () => {
        setCounter (counter + 1)
    }
    const resta = () => {
        setCounter (counter - 1)
    }


return (
    <div className='product-item' key={tech.id}>
        <h2>{tech.nombre}</h2>
        <img className='product-item' src={tech.imagen} alt="" />
        <h3>{tech.precio}</h3>
        <div className='button'>
            <button onClick={resta}> - </button>
            <h2>{counter}</h2>
            <button onClick={suma}> + </button>
        </div>
    </div>
)
}

export default Card
