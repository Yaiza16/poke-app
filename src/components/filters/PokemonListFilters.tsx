'use client'

import PokemonSearchInput from './PokemonSearchInput'
import PokemonFiltersSelector from './PokemonFiltersSelector'
import ClearFiltersButton from './ClearFiltersButton'

const PokemonListFilters = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-700/50 mb-6 w-full">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center w-full">
        <div className="flex-1 w-full">
          <PokemonSearchInput />
        </div>

        <div className="w-full lg:w-auto flex gap-4">
          <PokemonFiltersSelector />
          <ClearFiltersButton />
        </div>
      </div>
    </div>
  )
}

export default PokemonListFilters
