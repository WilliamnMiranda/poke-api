import { createGlobalStyle } from 'styled-components'
import { ErrorProvider } from './contexts/error'
import { PokemonProvider } from './contexts/pokemon'
import RoutesApplication from './routes'

function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      margin : 0px;
      padding: 0px;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }
    a{
      color:black;
    }
  `
  return (
    <ErrorProvider>
      <PokemonProvider>
        <GlobalStyle />
        <RoutesApplication />
      </PokemonProvider>
    </ErrorProvider>
  )
}

export default App
