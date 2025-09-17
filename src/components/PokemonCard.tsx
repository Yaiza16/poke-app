import { PokemonService } from '@/lib/api'
import usePokemon from '@/lib/queries/usePokemon'
import usePokemonSpecies from '@/lib/queries/usePokemonSpecies'
import { PokemonAPIResourceItem } from '@/types'
import Image from 'next/image'
import React from 'react'

const PokemonCard = ({ pokemonBasic }: { pokemonBasic: PokemonAPIResourceItem }) => {
  const pokemonId = PokemonService.extractIdFromUrl(pokemonBasic.url)
  const {
    data: pokemon,
    isLoading: pokemonLoading,
    error: pokemonError,
  } = usePokemon(pokemonId)
  const { data: species, isLoading: speciesLoading, error: speciesError } = usePokemonSpecies(pokemonId)

  if (pokemonLoading || speciesLoading) return <div>Loading...</div>
  if (pokemonError || speciesError) return <div>Error loading Pokemon</div>
  if (!pokemon) return <div>No data</div>

  return (
    <div>
      <Image
        src={pokemon.sprites.other.home.front_default}
        alt={pokemon.name}
        width={150}
        height={150}
        className="object-contain"
      />
      {pokemon.name}
      {speciesError && <small className="text-yellow-600">⚠️ Generation info unavailable</small>}
    </div>
  )
}

export default PokemonCard
