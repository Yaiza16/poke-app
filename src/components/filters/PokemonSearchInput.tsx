'use client'

import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'
import { usePokemonFiltersStore } from '@/lib/stores/PokemonFiltersStore'
import { useDebounce } from '@/lib/hooks/ui/useDebounce'

const PokemonSearchInput = () => {
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

  const clearSearch = () => {
    setInputValue('')
    setSearch('')
  }

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />

      <Input
        type="text"
        placeholder="Search Pokémon by name (min 3 characters)"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="pl-10 pr-10 bg-slate-700/50 border-slate-600/50 text-slate-200 placeholder:text-slate-400 hover:bg-slate-600/60 hover:border-slate-500 focus:bg-slate-600/60 focus:border-slate-500 focus:text-white transition-all duration-300"
      />

      {inputValue && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearSearch}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600/60 transition-colors duration-200"
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  )
}

export default PokemonSearchInput
