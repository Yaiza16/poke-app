import { useMemo } from 'react'
import { usePokemonFiltersStore } from '../../stores/PokemonFiltersStore'
import { usePokemonList } from '../../queries/usePokemonList'
import { usePokemonSearch } from './usePokemonSearch'
import { usePokemonFiltersLogic } from './usePokemonFiltersLogic'

export const usePokemonListFilter = () => {
  const { filters } = usePokemonFiltersStore()
  const { data: allPokemon, isLoading, error } = usePokemonList()
  const { filteredPokemon: typeAndGenFiltered, isLoading: isFiltersLoading } = usePokemonFiltersLogic(allPokemon || [])
  const { results: searchResults, isLoading: isSearchLoading } = usePokemonSearch(typeAndGenFiltered, filters.search)

  const finalFilteredPokemon = useMemo(() => {
    if (filters.search && filters.search.length >= 3) {
      return searchResults
    }

    return typeAndGenFiltered
  }, [filters.search, searchResults, typeAndGenFiltered])

  return {
    data: finalFilteredPokemon.sort((a, b) => a.id - b.id),
    isLoading: isLoading || isFiltersLoading || isSearchLoading,
    error,
    totalCount: allPokemon?.length || 0,
    filteredCount: finalFilteredPokemon.length,
  }
}
