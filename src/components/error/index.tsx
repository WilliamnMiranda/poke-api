import React from 'react'
import { ErrorContext } from '../../contexts/error'
import { Container } from './style'
interface IProps {
  message: string
}
const Error = ({ message }: IProps) => {
  const { setError } = React.useContext(ErrorContext)

  React.useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 2000)
  }, [])

  return (
    <Container>{message}</Container>
  )
}

export default Error