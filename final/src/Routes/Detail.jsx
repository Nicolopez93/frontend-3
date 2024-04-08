import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




const Detail = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);

  useEffect(() => {
    const fetchDentista = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentista(data);
      } catch (error) {
        console.error('Error fetching dentista details:', error);
      }
    };

    fetchDentista();
  }, [id]);

  return (
    <div className="detail">
      <h1>Detalles del Dentista</h1>
      {dentista ? (
        <>
          <p>Nombre: {dentista.name}</p>
          <p>Email: {dentista.email}</p>
          <p>Teléfono: {dentista.phone}</p>
          <p>Website: {dentista.website}</p>
        </>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};



export default Detail