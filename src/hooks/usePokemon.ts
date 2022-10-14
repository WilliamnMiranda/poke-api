import React from "react";
import { PokemonContext } from "../contexts/pokemon";
import pokemonServices from "../services/pokemon";
import { ErrorContext } from "../contexts/error";
export const usePokemon = () => {
  const { setPokemonsFilter } = React.useContext(PokemonContext);
  const { error, setError } = React.useContext(ErrorContext);
  const filterPokemonByName = async (value: string) => {
    if (value === "") {
      setError("Digite o nome do pokemon");
      return;
    }
    const pokemon = await pokemonServices.getByIdOrName(value);
    if (pokemon == null) {
      return setError("Nao foi possivel identificar o pokemon");
    }
    if (pokemon) setPokemonsFilter([pokemon]);
  };

  const filterPokemonByType = async (type: string) => {
    const pokemon = await pokemonServices.getByType(type);
    setPokemonsFilter(pokemon);
  };

  return [filterPokemonByName, filterPokemonByType];
};
