import React, { useEffect,useState } from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon/clefairy'
    console.log(pokemon.sprites.front_shiny);//esto hice para poder llegar a la informacion de la imagen 

    const fetchApi = () => { 
        fetch(url)
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch(err => console.log(err))
    }
    
    useEffect(fetchApi, [])

  return (
    <div>
      <button onClick={fetchApi}>Cambiar POKEMON</button>
        <img src={pokemon.sprites.front_shiny}/>
    </div>
  )
}

export default Pokemon
