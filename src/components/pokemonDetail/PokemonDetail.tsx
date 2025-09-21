'use client'

import { usePokemonDetail } from '@/lib/hooks/pokemon/usePokemonDetail'
import { useParams } from 'next/navigation'
import { SkeletonPokemonDetail } from '../skeletons'
import {
  PokemonDetailAbilities,
  PokemonDetailGoBackButton,
  PokemonDetailMainInfo,
  PokemonDetailNotFound,
  PokemonDetailStats,
  PokemonEvolutionChain,
} from '.'

const PokemonDetail = () => {
  const { id } = useParams()
  const { pokemon, species, isLoading, errorPokemon } = usePokemonDetail(Number(id))
  if (isLoading) return <SkeletonPokemonDetail />

  if (errorPokemon || !pokemon) return <PokemonDetailNotFound />

  return (
    <>
      <PokemonDetailGoBackButton />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <PokemonDetailMainInfo pokemon={pokemon} generation={species?.generation} />
          <PokemonDetailAbilities abilities={pokemon.abilities} />
        </div>

        <div className="space-y-6">
          <PokemonDetailStats stats={pokemon.stats} type={pokemon.types[0].type.name} />
          <PokemonEvolutionChain evolutionUrl={species?.evolution_chain?.url || null} />
        </div>
      </div>
    </>
  )
}

export default PokemonDetail
