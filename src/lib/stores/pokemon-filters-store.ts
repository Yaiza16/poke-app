import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface PokemonFilters {
  search: string
  type: string
  generation: string
}

interface PokemonFiltersStore {
  filters: PokemonFilters
  setSearch: (search: string) => void
  setType: (type: string) => void
  setGeneration: (generation: string) => void
  clearFilters: () => void
}

export const usePokemonFiltersStore = create<PokemonFiltersStore>()(
  devtools(
    persist(
      set => ({
        filters: {
          search: '',
          type: '',
          generation: '',
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

        clearFilters: () =>
          set({
            filters: { search: '', type: '', generation: '' },
          }),
      }),
      {
        name: 'pokemon-filters',
      }
    ),
    { name: 'PokemonFiltersStore' }
  )
)
