import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface PokemonFilters {
  search: string
  type: string
  generation: string
  currentPage: number
}

interface PokemonFiltersStore {
  filters: PokemonFilters
  setSearch: (search: string) => void
  setType: (type: string) => void
  setGeneration: (generation: string) => void
  clearFilters: () => void
  setCurrentPage: (page: number) => void
  resetPageOnFiltersChange: () => void
}

export const usePokemonFiltersStore = create<PokemonFiltersStore>()(
  devtools(
    persist(
      set => ({
        filters: {
          search: '',
          type: '',
          generation: '',
          currentPage: 1,
        },

        setSearch: (search: string) =>
          set(state => ({
            filters: { ...state.filters, search },
          })),

        setType: (type: string) =>
          set(state => ({
            filters: { ...state.filters, type },
          })),

        setGeneration: (generation: string) =>
          set(state => ({
            filters: { ...state.filters, generation },
          })),

        setCurrentPage: currentPage => {
          set(state => ({
            filters: { ...state.filters, currentPage },
          }))
        },

        clearFilters: () =>
          set({
            filters: { search: '', type: '', generation: '', currentPage: 1 },
          }),
        resetPageOnFiltersChange: () => {
          set(state => ({
            filters: { ...state.filters, currentPage: 1 },
          }))
        },
      }),
      {
        name: 'pokemon-filters',
        partialize: state => ({ filters: state.filters }),
      }
    ),
    { name: 'PokemonFiltersStore' }
  )
)
