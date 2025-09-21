import { PokemonBasicItem } from '@/types/pokemon'
import { useMemo } from 'react'
import { usePokemonEvolutionSearch } from './usePokemonEvolutionSearch'
import { filterPokemonByName, combinePokemonArrays } from '../../utilities/pokemon-search-utils'

export const usePokemonSearch = (allPokemon: PokemonBasicItem[], searchTerm: string) => {
  const directMatches = useMemo(() => filterPokemonByName(allPokemon, searchTerm), [allPokemon, searchTerm])

  const { evolutionMatches, isLoading } = usePokemonEvolutionSearch(allPokemon, directMatches, searchTerm)

  const results = useMemo(() => {
    if (!searchTerm || searchTerm.length < 3) return []
    return combinePokemonArrays(directMatches, evolutionMatches)
  }, [directMatches, evolutionMatches, searchTerm])

  return {
    results,
    isLoading,
  }
}
