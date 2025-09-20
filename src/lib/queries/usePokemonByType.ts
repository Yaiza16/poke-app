import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

export const usePokemonByType = (type: string) => {
  return useQuery({
    queryKey: ['pokemonByType', type],
    queryFn: () => PokemonService.getPokemonByType(type),
    enabled: !!type,
  })
}
