import { useState } from 'react'
import PokemonCard from './components/pokemon/PokemonCard'
import './MainPage.css'

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonCard />
      </header>
    </div>
  )
}

export default MainPage
