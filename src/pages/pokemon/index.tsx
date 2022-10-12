import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { pokemonTypes } from '../../helpers/bgColorsPokemon'
import IPokemon from '../../interfaces/pokemons'
import pokemonServices from '../../services/pokemon'
import logo from '../../assets/logo.webp'
import { AiOutlineHome } from "react-icons/ai";
import {
  Container,
  ContainerPokemon,
  Image,
  Infos,
  Name,
  Background,
  BackgroundPokemon,
  StatsPokemon,
  Status,
  NameStatus,
  Progress,
  StatusProgress,
  Value,
  Types,
  Inicio
} from './style'
import Stats from '../../components/stats'
const PagePokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = React.useState<IPokemon>()
  const [background, setBackground] = React.useState<string>()
  const [formatId, setFormatId] = React.useState<string>('')
  const getPokemon = async () => {
    const pokemon = await pokemonServices.getByIdOrName(id!)
    console.log(pokemon)
    setPokemon(pokemon)
    formatNumber(pokemon.id)
    const type = pokemon!.types[0].type.name
    pokemonTypes.forEach((item) => {
      if (item.name === type)
        setBackground(item.color)
    })
  }
  const formatNumber = (id) => {
    if (id < 10)
      setFormatId(`#00${id}`)
    else if (id >= 10 && id < 100)
      setFormatId(`#0${id}`)
    else
      setFormatId(`#${id}`)
  }
  React.useEffect(() => {
    getPokemon()
  }, [])
  return (
    <Container color={background}>
      <ContainerPokemon>
        <Image>
          <BackgroundPokemon />
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} />
        </Image>
        <Infos>
          <Inicio>
            <NavLink to='/'>
              <AiOutlineHome /> <p>HOME</p>
            </NavLink>
          </Inicio>
          <Name>
            <h1> {pokemon?.name} </h1>
            <span>{formatId}</span>
          </Name>
          <Types>
            {
              pokemon?.types.map((item) => {
                return <Stats type={item.type.name} />
              })
            }
          </Types>
          <Background src={logo} />
          <StatsPokemon>
            {
              pokemon?.stats.map((item) => {
                return (
                  <Status>
                    <NameStatus>{item.stat.name}</NameStatus>
                    <Progress>
                      <StatusProgress tam={`${item.base_stat}%`} />
                    </Progress>
                    <Value>{item.base_stat}</Value>
                  </Status>
                )
              })
            }
          </StatsPokemon>
        </Infos>
      </ContainerPokemon>
    </Container>
  )
}

export default PagePokemon