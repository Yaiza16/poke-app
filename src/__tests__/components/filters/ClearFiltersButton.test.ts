// __tests__/components/clear-filters-button.test.ts
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ClearFiltersButton } from '@/components/filters'

const mockClearFilters = jest.fn()
let mockFilters = {
  search: '',
  type: '',
  generation: '',
  currentPage: 1,
}

jest.mock('@/lib/stores/PokemonFiltersStore', () => ({
  usePokemonFiltersStore: () => ({
    filters: mockFilters,
    clearFilters: mockClearFilters,
  }),
}))

describe('ClearFiltersButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockFilters = {
      search: '',
      type: '',
      generation: '',
      currentPage: 1,
    }
  })

  it('should render button as disabled when no filters are active', () => {
    render(React.createElement(ClearFiltersButton))

    const button = screen.getByText(/clear all/i)
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('should render button as enabled when search filter is active', () => {
    mockFilters.search = 'pikachu'

    render(React.createElement(ClearFiltersButton))

    const button = screen.getByText(/clear all/i)
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })
})
