import { useEffect, useMemo } from 'react'
import { usePagination } from './usePagination'
import { usePokemonListFilter } from '../queries'
import { usePokemonFiltersStore } from '../stores/PokemonFiltersStore'

const ITEMS_PER_PAGE = 20

export const usePokemonPagination = () => {
  const { filters, setCurrentPage } = usePokemonFiltersStore()
  const { data: allFilteredPokemon, isLoading, error, filteredCount, totalCount } = usePokemonListFilter()

  useEffect(() => {
    const filtersElement = document.getElementById('pokemon-filters')
    if (filtersElement) {
      filtersElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [filters.currentPage])

  const pagination = usePagination({
    totalItems: filteredCount,
    itemsPerPage: ITEMS_PER_PAGE,
    currentPage: filters.currentPage,
  })

  const paginatedPokemon = useMemo(() => {
    if (!allFilteredPokemon) return []

    return allFilteredPokemon.slice(pagination.startIndex, pagination.endIndex)
  }, [allFilteredPokemon, pagination.startIndex, pagination.endIndex])

  return {
    pokemon: paginatedPokemon,
    isLoading,
    error,
    pagination: {
      ...pagination,
      onPageChange: setCurrentPage,
    },
    stats: {
      showing: paginatedPokemon.length,
      total: filteredCount,
      totalAll: totalCount,
    },
  }
}
