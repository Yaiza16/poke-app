import { useEffect, useMemo, useState } from 'react'
import { usePagination } from './usePagination'
import { usePokemonListFilter } from '../queries'

const ITEMS_PER_PAGE = 20

export const usePokemonPagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: allFilteredPokemon, isLoading, error, filteredCount, totalCount } = usePokemonListFilter()

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredCount])

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
  }, [currentPage])

  const pagination = usePagination({
    totalItems: filteredCount,
    itemsPerPage: ITEMS_PER_PAGE,
    currentPage,
  })

  // Pokemon paginados
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
