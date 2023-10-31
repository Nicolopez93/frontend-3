import React from 'react'

const Listado = ({doctores}) => {
    console.log(doctores);
  return (
    <div>
        <ul>
            {doctores.map((doctor) => {
                return <li key={doctor.id}>
                    {doctor.id} - 
                    {doctor.nombre} -
                    {doctor.especialidad}
                    </li>
            })}
        </ul>
    </div>
  )
}

export default Listado
