import React from 'react'
import IPokemon from '../../../interfaces/pokemons'
import Stats from '../../stats'
import { pokemonTypes } from '../../../helpers/typeColorsPokemon'
import {
    ContainerCard,
    Information,
    Image,
    Id,
    Name,
    Types,
    Background,
    Container
} from '../style'
import { NavLink } from 'react-router-dom'
interface IProps {
    pokemon: IPokemon
}
const CardFilter = ({ pokemon }: IProps) => {
    const [color, setColor] = React.useState<string>('')
    const setColorType = async () => {
        pokemonTypes.forEach((item) => {
            if (item.name === pokemon.types[0].type.name)
                setColor(item.color)
        })
    }

    React.useEffect(() => {
        setColorType()
    }, [])
    return (
        <Container>
            <NavLink to={`/${pokemon?.id}`}>
                <ContainerCard key={pokemon.id} color={color}>
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
            </NavLink>
        </Container>
    )
}

export default CardFilter