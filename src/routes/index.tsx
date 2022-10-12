import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/home';
import PagePokemon from '../pages/pokemon';
const RoutesApplication = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PagePokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApplication