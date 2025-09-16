import { PokemonService } from '../api'
import { useQuery } from '@tanstack/react-query'

const usePokemon = (id: number) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => PokemonService.getPokemonById(id),
  })
}

export default usePokemon
