import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

interface UsePokemonEvolutionOptions {
  enabled?: boolean;
}

export const useEvolutionChain = (
  url: string,
  options: UsePokemonEvolutionOptions = {}
) => {
  const { enabled = true } = options
  return useQuery({
    queryKey: ['evolution-chain', url],
    queryFn: () => PokemonService.getEvolutionChainByUrl(url),
    enabled: !!url && enabled,
  })
}
