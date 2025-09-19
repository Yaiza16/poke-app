'use client'

import PokemonCard from './PokemonCard'
import { usePokemonListFilter } from '@/lib/queries/usePokemonListFilter'

const PokemonList = () => {
  const { data, isLoading, error } = usePokemonListFilter()

  if (isLoading) <div className="p-8 text-center">Cargando Pokemon...</div>

  if (error) <div className="p-8 text-center text-red-500">Error: {error.message}</div>
  if (!data) return <div className="p-8 text-center">No hay datos disponibles.</div>

  return (
    <div className="p-4">
      <div className="space-y-2">
        {data.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemonBasic={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList
