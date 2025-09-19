'use client'

import PokemonSearchInput from './PokemonSearchInput'
import PokemonFiltersSelector from './PokemonFiltersSelector'
import ClearFiltersButton from './ClearFiltersButton'

const PokemonListFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center mb-6">
      <div className="flex-1 w-full lg:max-w-md">
        <PokemonSearchInput />
      </div>

      <div className="w-full lg:w-auto flex gap-4">
        <PokemonFiltersSelector />
        <ClearFiltersButton />
      </div>
    </div>
  )
}

export default PokemonListFilters
