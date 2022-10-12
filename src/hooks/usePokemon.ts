import React from "react";
import { PokemonContext } from "../contexts/pokemon";
import pokemonServices from "../services/pokemon";
import IPokemon from "../interfaces/pokemons";
export const usePokemon = () => {
  const { setPokemonsFilter } = React.useContext(PokemonContext);
  const filterPokemonByName = async ( value  : string) => {
    if(value === ''){
      alert('digite algo')
      return
    }
    const pokemon = await pokemonServices.getByIdOrName(value);
    setPokemonsFilter([pokemon]);
  };

  const filterPokemonByType = async (type: string) => {
    const pokemon = await pokemonServices.getByType(type);
    console.log(pokemon);
    setPokemonsFilter(pokemon);
  };

  

  return [filterPokemonByName, filterPokemonByType,];
};
