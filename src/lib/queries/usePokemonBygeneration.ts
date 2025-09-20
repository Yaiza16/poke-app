import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

export const usePokemonByGeneration = (generationId: number) => {
  return useQuery({
    queryKey: ['pokemonByGeneration', generationId],
    queryFn: () => PokemonService.getPokemonByGeneration(generationId),
    enabled: !!generationId,
  })
}
