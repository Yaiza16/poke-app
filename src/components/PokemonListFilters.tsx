'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { usePokemonFiltersStore } from '@/lib/stores/pokemon-filters-store'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui//button'
import { X } from 'lucide-react'
import { useDebounce } from '@/lib/hooks/useDebounce'

import PokemonFiltersSelector from './PokemonFiltersSelector'

const PokemonListFilters = () => {
  const { filters, setSearch } = usePokemonFiltersStore()
  const [inputValue, setInputValue] = useState(filters.search)

  const debouncedValue = useDebounce(inputValue, 300)

  useEffect(() => {
    if (debouncedValue.length >= 3 || debouncedValue.length === 0) {
      setSearch(debouncedValue)
    }
  }, [debouncedValue, setSearch])

  useEffect(() => {
    setInputValue(filters.search)
  }, [filters.search])

  const onSearchChange = (value: string) => {
    setInputValue(value)
  }
  const clearSearch = () => {
    setInputValue('')
    setSearch('')
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
      <div className="flex-1 w-full lg:max-w-md">
        <div className="relative">
          <search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search Pokémon by name (includes evolutions)... (min 3 characters)"
            value={inputValue}
            onChange={e => onSearchChange(e.target.value)}
            className="pl-10 pr-10 py-2 w-full"
          />
          {inputValue && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <PokemonFiltersSelector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonListFilters
