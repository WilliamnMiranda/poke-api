import React from 'react'
import pokemonServices from '../../services/pokemon';
const HomePage = () => {

  const getPokemons = async () => {
    const pokemons  = await pokemonServices.getAll();
  }

  React.useEffect(()=>{
    getPokemons()
  })
  return (
    <p>a</p>
  )
}

export default HomePage