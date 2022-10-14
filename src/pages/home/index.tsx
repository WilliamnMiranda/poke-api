import React from 'react'
import pokemonServices from '../../services/pokemon';
import CardPokemon from '../../components/cardPokemon';
import { Container, ContainerPokemons, ContainerButtons } from './style'
import Filter from '../../components/filter';
import { PokemonContext } from '../../contexts/pokemon';
import CardFilter from '../../components/cardPokemon/cardFilter'
import IPokemon from '../../interfaces/pokemons';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { usePagination } from '../../hooks/usePagination';
import Loading from '../../components/loading';
import { ErrorContext } from '../../contexts/error';
import Error from '../../components/error';
const HomePage = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const [value, setValue] = React.useState<string>('')
  const { pokemonFilter } = React.useContext(PokemonContext)
  const [loading, setLoading] = React.useState<boolean | null>(null)
  const { error,setError } = React.useContext(ErrorContext)
  const { setPage,setPagination } = usePagination()
  const getPokemons = async () => {
    setLoading(true)
    const data = await pokemonServices.getAll();
    const { next, previous } = data
    setPokemons(data.results)
    setPagination({ next, previous })
    setLoading(false)
  }
  React.useEffect(() => {
    getPokemons()
  }, [])
  const alterPage = async (type : string) => {
    const pokemons = await setPage(type)
    if(pokemons !== null)
      setPokemons(pokemons)
  }
  return (
    <Container>
      {error && <Error message={error} />}
      <Filter value={value} setValue={setValue} />
      <ContainerPokemons>
        {
            loading ? <Loading /> : 
            pokemonFilter == null ?
            pokemons.map((item: { url: string, name: string }) => <CardPokemon key={item.url} item={item} />) :
            pokemonFilter && pokemonFilter.length > 1 ?
            pokemonFilter?.map((item: { pokemon: { url: string, name: string } }) => <CardPokemon key={item.pokemon.url} item={item.pokemon} />) :
            pokemonFilter?.map((item: IPokemon) => <CardFilter key={item.id} pokemon={item} />)
        }
      </ContainerPokemons>
      <ContainerButtons>
        <div  onClick={() => alterPage('back')}> <FaRegArrowAltCircleLeft /> </div>
        <div onClick={() => alterPage('next')}>  <FaRegArrowAltCircleRight /> </div>
      </ContainerButtons>
    </Container>
  )
}

export default HomePage