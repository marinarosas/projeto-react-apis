import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { Modal } from '../../components/Modal/Modal'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerHomePage, PokemonMain } from './HomePage.styles'

export const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokemons, pokedex, isOpen } = context

  localStorage.setItem('pokedex', JSON.stringify(pokedex))

  return (
    <>
      <Header />
      <ContainerHomePage>
        <h1>Todos Pokémons</h1>
        <PokemonMain>
          {pokemons.map((pokemon) => {
            return (<PokemonCard key={pokemon.id} pokemon={pokemon} />)
          })
          }
        </PokemonMain>
      </ContainerHomePage>  
    </>
  )
}
