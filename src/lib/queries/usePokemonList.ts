import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'



export function usePokemonList() {
  return useQuery({
    queryKey: ['pokemon-basic-all'],
    queryFn: () => PokemonService.getPokemonList(),
  })
}
