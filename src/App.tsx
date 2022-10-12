import { createGlobalStyle } from 'styled-components'
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
    <PokemonProvider>
      <GlobalStyle />
      <RoutesApplication />
    </PokemonProvider>
  )
}

export default App
