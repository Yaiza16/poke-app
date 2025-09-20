import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

interface UsePokemonSpeciesOptions {
  enabled?: boolean;
}

export const usePokemonSpecies = (id: number | string, options: UsePokemonSpeciesOptions = {}) => {
  const { enabled = true } = options
  return useQuery({
    queryKey: ['pokemon-species', id],
    queryFn: () => PokemonService.getPokemonSpecieByPokemonId(id),
    enabled: enabled && !!id,
    staleTime: Infinity,
  })
}

