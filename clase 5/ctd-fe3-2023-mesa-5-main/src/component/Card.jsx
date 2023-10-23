import React from 'react'
import '../styles.css'

const Card = ({tech}) => {
    console.log(tech.img);
return (
    <div className='product-item' key={tech.id}>
        <h2>{tech.nombre}</h2>
        <img className='product-item' src={tech.imagen} alt="" />
        <h3>{tech.precio}</h3>
    </div>
)
}

export default Card
