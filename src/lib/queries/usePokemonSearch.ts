import { useQueries } from '@tanstack/react-query'
import { useMemo } from 'react'
import { PokemonService } from '../api'
import { extractEvolutionFamily } from '../utilities/evolution-utils'
import { PokemonBasicItem } from '@/types/pokemon'

export const usePokemonSearch = (allPokemon: PokemonBasicItem[], searchTerm: string) => {
  const directMatches = useMemo(() => {
    if (!searchTerm || searchTerm.length < 3) return []

    return allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [allPokemon, searchTerm])

  const speciesQueries = useQueries({
    queries: directMatches.map(pokemon => ({
      queryKey: ['pokemon-species', pokemon.id],
      queryFn: () => PokemonService.getPokemonSpecieByPokemonId(pokemon.id),
      staleTime: Infinity,
    })),
  })

  const evolutionUrls = speciesQueries.map(query => query.data?.evolution_chain?.url).filter(Boolean)

  const evolutionQueries = useQueries({
    queries: evolutionUrls.map(url => ({
      queryKey: ['evolution-chain', url],
      queryFn: () => PokemonService.getEvolutionChainByUrl(url!),
      staleTime: Infinity,
    })),
  })

  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 3) return []

    const evolutionFamilies = evolutionQueries
      .map(query => (query.data ? extractEvolutionFamily(query.data) : []))
      .flat()

    const evolutionMatches = allPokemon.filter(
      pokemon =>
        evolutionFamilies.map(family => family.name).includes(pokemon.name) &&
        !directMatches.some(direct => direct.id === pokemon.id)
    )

    return [...directMatches, ...evolutionMatches]
  }, [directMatches, evolutionQueries, allPokemon, searchTerm])

  const isLoading = speciesQueries.some(q => q.isLoading) || evolutionQueries.some(q => q.isLoading)

  return {
    results: searchResults,
    isLoading,
  }
}
