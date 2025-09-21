'use client'

import { usePokemonPagination } from '@/lib/hooks/pokemon/usePokemonPagination'
import PokemonCard from './PokemonCard'
import PokemonPagination from './PokemonPagination'
import SpinnerLoadingPokemon from '../spinners/SpinnerLoadingPokemon'

const PokemonList = () => {
  const { pokemon, isLoading, error, pagination } = usePokemonPagination()

  if (isLoading) return <SpinnerLoadingPokemon />

  if (error) return <div className="p-8 text-center text-red-500">Error: {error.message}</div>
  if (!pokemon) return <div className="p-8 text-center">No hay datos disponibles.</div>

  if (pokemon.length === 0)
    return <div className="p-8 text-center">No se encontraron Pokémon que coincidan con los filtros.</div>

  return (
    <div className="w-full flex-1">
      <div className="flex justify-center  mb-8">
        <PokemonPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          hasNextPage={pagination.hasNextPage}
          hasPreviousPage={pagination.hasPreviousPage}
          isFirstPage={pagination.isFirstPage}
          isLastPage={pagination.isLastPage}
          onPageChange={pagination.onPageChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-auto gap-8 justify-items-center">
        {pokemon.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemonBasic={pokemon} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <PokemonPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          hasNextPage={pagination.hasNextPage}
          hasPreviousPage={pagination.hasPreviousPage}
          isFirstPage={pagination.isFirstPage}
          isLastPage={pagination.isLastPage}
          onPageChange={pagination.onPageChange}
        />
      </div>
    </div>
  )
}

export default PokemonList
