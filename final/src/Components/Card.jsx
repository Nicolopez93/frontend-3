import React from "react";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    const isAlreadyFav = favorites.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      
      const newFavorite = { name, username, id };
      const updatedFavorites = [...favorites, newFavorite];

      
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>ID: {id}</p>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
