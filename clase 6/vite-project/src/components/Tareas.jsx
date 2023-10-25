import React, { useState } from 'react'

const tareas = () => {

    let ejercicios = [
        "Hacer la cama",
        "Preparar el desayuno",
        "Ir al trabajo o la escuela",
        "Hacer ejercicio",
        "Cocinar la cena",
    ];
    const [completadas, setCompletadas] = useState(new Array(ejercicios.length).fill(0));

    const sumar = (index) => {
        const nuevasCompletadas = [...completadas];
        nuevasCompletadas[index]++;
        setCompletadas(nuevasCompletadas);
    };

    const restar = (index) => {
        const nuevasCompletadas = [...completadas];
        if (nuevasCompletadas[index] > 0) {
            nuevasCompletadas[index]--;
        }
        setCompletadas(nuevasCompletadas);
    };

    return (
        <div>
            {ejercicios.map((tarea, index) => (
                <div key={index}>
                    <button onClick={() => sumar(index)}> + </button>
                    <span>{completadas[index]}</span>
                    <button onClick={() => restar(index)}> - </button>
                    <span>{tarea}</span>
                </div>
            ))}
        </div>
    );
};

export default tareas;
