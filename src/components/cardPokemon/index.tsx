import React from 'react'
import pokemonServices from '../../services/pokemon'
import IPokemon from '../../interfaces/pokemons'
import Stats from '../stats'
import CardFilter from './cardFilter'
import {
  ContainerCard,
  Information,
  Image,
  Id,
  Name,
  Types,
  Background,
  Container
} from './style'
import { pokemonTypes } from '../../helpers/bgColorsPokemon'
import { PokemonContext } from '../../contexts/pokemon'
import { NavLink } from 'react-router-dom'

interface IProps {
  item?: {
    name: string,
    url: string
  }
}
const CardPokemon = ({ item }: IProps) => {

  const [pokemon, setPokemon] = React.useState<IPokemon>()
  const [colorType, setColorType] = React.useState<string>('')
  const { pokemonFilter } = React.useContext(PokemonContext)

  const filterPokemon = async () => {
    const pokemonFilter = await pokemonServices.getStatusByUrl(item!.url)
    setPokemon(pokemonFilter)
    const type = pokemonFilter!.types[0].type.name
    pokemonTypes.forEach((item) => {
      if (item.name === type)
        setColorType(item.color)
    })
  }


  React.useEffect(() => {
    filterPokemon()
  }, [])
  return (
    <Container>
      <NavLink to={`/${pokemon?.id}`}>
        {
          <ContainerCard color={colorType}>
            <Information>
              <Id># {pokemon?.id}</Id>
              <Name>{pokemon?.name}</Name>
              <Types>
                {pokemon?.types.map((item) => {
                  return <Stats type={item.type.name} />
                })}
              </Types>
            </Information>

            <Image>
              <Background />
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} />
            </Image>
          </ContainerCard>
        }
      </NavLink>
    </Container>
  )

}

export default CardPokemon