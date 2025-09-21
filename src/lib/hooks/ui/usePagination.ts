import { useMemo } from 'react'

interface UsePaginationOptions {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}

export const usePagination = ({ totalItems, itemsPerPage, currentPage }: UsePaginationOptions) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return {
      startIndex,
      endIndex,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
      isFirstPage: currentPage === 1,
      isLastPage: currentPage === totalPages,
    }
  }, [currentPage, itemsPerPage, totalPages])

  return {
    ...paginatedData,
    totalPages,
    currentPage,
    totalItems,
    itemsPerPage,
  }
}
