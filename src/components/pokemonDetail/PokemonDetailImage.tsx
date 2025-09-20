import { Pokemon } from '@/types'
import { PokemonImage } from '../pokemon/PokemonImage'
import React from 'react'

interface PokemonDetailImageProps {
  pokemon: Pokemon
}

export const PokemonDetailImage = ({ pokemon }: PokemonDetailImageProps) => {
  return (
    <div className="flex justify-center mb-6">
      <PokemonImage pokemon={pokemon} size="large" variant="detail" />
    </div>
  )
}
