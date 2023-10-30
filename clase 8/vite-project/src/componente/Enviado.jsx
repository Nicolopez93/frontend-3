import React from 'react'

const Enviado = ({nombre, edad, pokemon}) => {
  return (
    <div>
      <h2>Perfecto , {nombre} !</h2>
      <h3> Tu edad es {edad} y tu pokemon es {pokemon}</h3>
    </div>
  )
}

export default Enviado
