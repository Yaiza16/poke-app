import { useInfiniteQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

interface UsePokemonListOptions {
  limit?: number
}

export function usePokemonList(options: UsePokemonListOptions) {
  const { limit = 20 } = options || {}

  return useInfiniteQuery({
    queryKey: ['pokemon-list', { limit }],
    queryFn: async ({ pageParam = 0 }: { pageParam?: number }) => {
      const response = await PokemonService.getPokemonList({
        limit,
        offset: pageParam,
      })
      return {
        pokemon: response.results,
        nextOffset: response.next ? pageParam + limit : null,
        hasMore: !!response.next,
        count: response.count,
      }
    },
    getNextPageParam: lastPage => lastPage.nextOffset,
    initialPageParam: 0,
  })
}
