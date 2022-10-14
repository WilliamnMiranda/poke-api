import React, { SetStateAction } from 'react'
import IPokemon from '../interfaces/pokemons'

interface IContextPokemon {
    pokemonFilter: any[] | null,
    setPokemonsFilter: React.Dispatch<SetStateAction<any[] | null>>
}
interface IChildren {
    children: React.ReactNode
}
const initialValue = {
    pokemonFilter: null,
    setPokemonsFilter: () => { },
}
export const PokemonContext = React.createContext<IContextPokemon>(initialValue);

export const PokemonProvider = ({ children }: IChildren) => {
    const [pokemonFilter, setPokemonsFilter] = React.useState<any[] | null>(null)
    console.log(pokemonFilter)
    return (
        <PokemonContext.Provider value={{ pokemonFilter, setPokemonsFilter }}>
            {children}
        </PokemonContext.Provider>
    )
}