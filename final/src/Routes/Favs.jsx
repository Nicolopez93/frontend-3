import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';  

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div className="favs">
      <h1>Dentistas Destacados</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map((dentista) => (
            <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id} />
          ))
        ) : (
          <p>No hay dentistas destacados.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;