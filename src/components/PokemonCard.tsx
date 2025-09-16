import { PokemonService } from '@/lib/api'
import usePokemon from '@/lib/queries/usePokemon'
import { PokemonAPIResourceItem } from '@/types'
import React from 'react'

const PokemonCard = ({ pokemonBasic }: { pokemonBasic: PokemonAPIResourceItem }) => {
  const pokemonId = PokemonService.extractIdFromUrl(pokemonBasic.url)
  const { data: pokemon, isLoading: pokemonLoading, error: pokemonError } = usePokemon(pokemonId)

  if (pokemonLoading) return <div>Loading...</div>
  if (pokemonError) return <div>Error loading Pokemon</div>
  if (!pokemon) return <div>No data</div>

  return <div>{pokemon.name}</div>
}

export default PokemonCard
