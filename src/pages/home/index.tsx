import React from 'react'
import pokemonServices from '../../services/pokemon';
import CardPokemon from '../../components/cardPokemon';
import { Container,ContainerPokemons } from './style'
import Filter from '../../components/filter';
import { PokemonContext } from '../../contexts/pokemon';
import CardFilter from '../../components/cardPokemon/cardFilter'
import IPokemon from '../../interfaces/pokemons';
const HomePage = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const [value,setValue] = React.useState<string>('')
  const { pokemonFilter } = React.useContext(PokemonContext)
  const getPokemons = async () => {
    const pokemons = await pokemonServices.getAll();
    setPokemons(pokemons)
  }

  React.useEffect(() => {
    getPokemons()
  }, [])

  return (
    <Container>
      <Filter value={value} setValue={setValue}/>
      <ContainerPokemons>
        {
          pokemonFilter == null ?
          pokemons.map((item: { url: string, name: string }) => <CardPokemon key={item.url} item={item} />) :
          pokemonFilter.length > 1 ? 
          pokemonFilter.map((item: { pokemon : {url: string, name: string } }) => <CardPokemon key={item.pokemon.url} item={item.pokemon} />) :
          pokemonFilter.map((item: IPokemon) => <CardFilter pokemon={item} />)
        }
      </ContainerPokemons>
    </Container>
  )
}

export default HomePage