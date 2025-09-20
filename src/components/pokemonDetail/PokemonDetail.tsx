'use client'

import { usePokemonDetail } from '@/lib/queries/usePokemonDetail'
import { extractEvolutionFamily } from '@/lib/utilities/evolution-utils'
import { useParams } from 'next/navigation'
import { SkeletonPokemonDetail } from '../skeletons'
import { PokemonDetailAbilities, PokemonDetailGoBackButton, PokemonDetailMainInfo, PokemonDetailNotFound, PokemonDetailStats, PokemonEvolutionChain } from '.'


const PokemonDetail = () => {
  const { id } = useParams()
  const { pokemon, evolutionChain, isLoading, error } = usePokemonDetail(Number(id))

  if (isLoading) return <SkeletonPokemonDetail />

  if (error || !pokemon) return <PokemonDetailNotFound />

  const evolutionFamily = evolutionChain ? extractEvolutionFamily(evolutionChain) : []

  return (
    <>
      <PokemonDetailGoBackButton />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <PokemonDetailMainInfo pokemon={pokemon} />
          <PokemonDetailAbilities abilities={pokemon.abilities} />
        </div>

        <div className="space-y-6">
          <PokemonDetailStats stats={pokemon.stats} type={pokemon.types[0].type.name} />
          <PokemonEvolutionChain evolutionData={evolutionFamily} />
        </div>
      </div>
    </>
  )
}

export default PokemonDetail
