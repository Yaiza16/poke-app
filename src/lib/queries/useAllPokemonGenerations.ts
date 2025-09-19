import { PokemonService } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
const useAllPokemonGenerations = () => {
  return useQuery({
    queryKey: ['all-pokemon-generations'],
    queryFn: () => PokemonService.getAllPokemonGenerations(),
  })
}

export default useAllPokemonGenerations
