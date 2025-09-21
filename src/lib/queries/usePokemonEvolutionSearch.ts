import { useQueries } from '@tanstack/react-query'
import { PokemonService } from '../api'
import { extractEvolutionFamily } from '../utilities/evolution-utils'
import { PokemonBasicItem } from '@/types/pokemon'
import { useMemo } from 'react'

export const usePokemonEvolutionSearch = (
  allPokemon: PokemonBasicItem[],
  directMatches: PokemonBasicItem[],
  searchTerm: string
) => {
  const isEnabled = directMatches.length > 0 && searchTerm.length >= 3

  const speciesQueries = useQueries({
    queries: isEnabled
      ? directMatches.map(pokemon => ({
          queryKey: ['pokemon-species-search', pokemon.id],
          queryFn: () => PokemonService.getPokemonSpecieByPokemonId(pokemon.id),
          staleTime: Infinity,
          retry: 1,
          throwOnError: false,
        }))
      : [],
  })

  const evolutionUrls = useMemo(() => {
    if (!isEnabled) return []

    return Array.from(
      new Set(
        speciesQueries
          .filter(q => q.data && !q.isError)
          .map(q => q.data?.evolution_chain?.url)
          .filter(Boolean)
      )
    )
  }, [isEnabled, speciesQueries])

  const evolutionQueries = useQueries({
    queries: evolutionUrls.map(url => ({
      queryKey: ['evolution-chain-search', url],
      queryFn: () => PokemonService.getEvolutionChainByUrl(url!), 
      staleTime: Infinity,
      retry: 1,
      throwOnError: false,
    })),
  })

  const evolutionMatches = useMemo(() => {
    if (!isEnabled || evolutionQueries.length === 0) return []

    const evolutionNames = new Set<string>()
    evolutionQueries
      .filter(q => q.data && !q.isError)
      .forEach(q => {
        if (q.data) {
          extractEvolutionFamily(q.data).forEach(member => evolutionNames.add(member.name))
        }
      })

    const directMatchIds = new Set(directMatches.map(p => p.id))

    return allPokemon.filter(pokemon => evolutionNames.has(pokemon.name) && !directMatchIds.has(pokemon.id))
  }, [isEnabled, allPokemon, directMatches, evolutionQueries])

  const isLoading = speciesQueries.some(q => q.isLoading) || evolutionQueries.some(q => q.isLoading)

  return {
    evolutionMatches,
    isLoading,
  }
}
