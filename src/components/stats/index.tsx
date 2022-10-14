import React from 'react'
import { pokemonTypes } from '../../helpers/typeColorsPokemon'
import { Container } from './style'
interface IProps {
  type: string
}
const Stats = ({ type }: IProps) => {
  const [color, setColor] = React.useState<string>('')
  const [icon, setIcon] = React.useState<JSX.Element>();
  React.useEffect(() => {
    pokemonTypes.forEach((item) => {
      if (item.name === type) {
        setColor(item.color)
        setIcon(item.icon)
      }
    })
  }, [])
  return (
    <Container color={color}>
      {icon}
      {type}
    </Container>
  )
}

export default Stats