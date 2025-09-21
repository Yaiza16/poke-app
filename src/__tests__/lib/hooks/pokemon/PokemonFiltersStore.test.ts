import { usePokemonFiltersStore } from '@/lib/stores/PokemonFiltersStore'
import { renderHook, act } from '@testing-library/react'

describe('usePokemonFiltersStore', () => {
  beforeEach(() => {
    const { result } = renderHook(() => usePokemonFiltersStore())
    act(() => {
      result.current.clearFilters()
    })
  })

  it('should initialize with empty filters', () => {
    const { result } = renderHook(() => usePokemonFiltersStore())
    
    expect(result.current.filters).toEqual({
      search: '',
      type: '',
      generation: '',
      currentPage: 1
    })
  })

  it('should update search filter and reset page', () => {
    const { result } = renderHook(() => usePokemonFiltersStore())
    
    act(() => {
      result.current.setCurrentPage(3)
      result.current.setSearch('pikachu')
    })
    
    expect(result.current.filters.search).toBe('pikachu')
    expect(result.current.filters.currentPage).toBe(1) 
  })

  it('should clear all filters', () => {
    const { result } = renderHook(() => usePokemonFiltersStore())
    
    act(() => {
      result.current.setSearch('test')
      result.current.setType('fire')
      result.current.setGeneration('generation-i')
      result.current.setCurrentPage(5)
    })
    
    act(() => {
      result.current.clearFilters()
    })
    
    expect(result.current.filters).toEqual({
      search: '',
      type: '',
      generation: '',
      currentPage: 1
    })
  })
})