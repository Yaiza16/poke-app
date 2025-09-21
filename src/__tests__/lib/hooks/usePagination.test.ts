import { usePagination } from '@/lib/hooks/ui/usePagination'
import { renderHook } from '@testing-library/react'

interface PaginationOptions {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}

describe('usePagination', () => {
  it('should calculate pagination correctly for first page', () => {
    const options: PaginationOptions = {
      totalItems: 100,
      itemsPerPage: 20,
      currentPage: 1,
    }

    const { result } = renderHook(() => usePagination(options))

    expect(result.current.startIndex).toBe(0)
    expect(result.current.endIndex).toBe(20)
    expect(result.current.totalPages).toBe(5)
    expect(result.current.hasNextPage).toBe(true)
    expect(result.current.hasPreviousPage).toBe(false)
  })

  it('should calculate pagination correctly for middle page', () => {
    const options: PaginationOptions = {
      totalItems: 100,
      itemsPerPage: 20,
      currentPage: 3,
    }

    const { result } = renderHook(() => usePagination(options))

    expect(result.current.startIndex).toBe(40)
    expect(result.current.endIndex).toBe(60)
    expect(result.current.hasNextPage).toBe(true)
    expect(result.current.hasPreviousPage).toBe(true)
  })

  it('should calculate pagination correctly for last page', () => {
    const options: PaginationOptions = {
      totalItems: 100,
      itemsPerPage: 20,
      currentPage: 5,
    }

    const { result } = renderHook(() => usePagination(options))

    expect(result.current.startIndex).toBe(80)
    expect(result.current.endIndex).toBe(100)
    expect(result.current.hasNextPage).toBe(false)
    expect(result.current.hasPreviousPage).toBe(true)
  })

  it('should handle edge case with zero items', () => {
    const options: PaginationOptions = {
      totalItems: 0,
      itemsPerPage: 20,
      currentPage: 1,
    }

    const { result } = renderHook(() => usePagination(options))

    expect(result.current.startIndex).toBe(0)
    expect(result.current.endIndex).toBe(20)
    expect(result.current.totalPages).toBe(0)
    expect(result.current.hasNextPage).toBe(false)
    expect(result.current.hasPreviousPage).toBe(false)
  })
})
