import React, { SetStateAction } from 'react'
import { PokemonContext } from '../../contexts/pokemon'
import {
  Container,
  FilterInput,
  FilterType
} from './style'
import pokemonServices from '../../services/pokemon'
import { pokemonTypes } from '../../helpers/bgColorsPokemon'
import Stats from '../stats'
import { usePokemon } from '../../hooks/usePokemon'
import { ErrorContext } from '../../contexts/error'
interface IProps {
  setValue: React.Dispatch<SetStateAction<string>>
  value: string
}
const Filter = ({ setValue, value }: IProps) => {
  const [ filterPokemonByName, filterPokemonByType ] = usePokemon()
  const { setPokemonsFilter } = React.useContext(PokemonContext);
  const { error,setError } = React.useContext(ErrorContext)
  const setParamsFilter = () => {
    setPokemonsFilter(null)
    setValue('')
    setError('')
  }
  return (
    <Container>
      <FilterInput>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Digite o nome do pokemon'
        />
        <button onClick={()=> filterPokemonByName(value) }>Pesquisar</button>
        <button onClick={setParamsFilter}>INICIO</button>
      </FilterInput>
      <FilterType>
        {
          pokemonTypes.map((item)=> <span onClick={()=> filterPokemonByType(item.name)}> <Stats type={item.name}/> </span>)
        }
      </FilterType>
    </Container>
  )
}

export default Filter