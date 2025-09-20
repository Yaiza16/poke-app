import { useMemo } from 'react'
import { usePokemonFiltersStore } from '../stores/pokemon-filters-store'
import { usePokemonList } from './usePokemonList'
import { usePokemonSearch } from './usePokemonSearch'

export const usePokemonListFilter = () => {
  const { filters } = usePokemonFiltersStore()
  const { data: allPokemon, isLoading, error } = usePokemonList()
  const {
    results: searchResults,
    isLoading: isSearchLoading,
  } = usePokemonSearch(allPokemon || [], filters.search)

  const filteredPokemon = useMemo(() => {
    if (!allPokemon) return []

    if (filters.search && filters.search.length >= 3) {
      return searchResults
    }

    // Si no hay búsqueda, usar todos los Pokemon
    const filtered = allPokemon

    // TODO: Filtros por tipo y generación

    return filtered
  }, [allPokemon, filters, searchResults])

  return {
    data: filteredPokemon.sort((a, b) => a.id - b.id),
    isLoading: isLoading || isSearchLoading,
    error,
    totalCount: allPokemon?.length || 0,
    filteredCount: filteredPokemon.length,
  }
}
