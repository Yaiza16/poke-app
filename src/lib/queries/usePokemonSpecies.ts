import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

const usePokemonSpecies = (id: number) => {
  return useQuery({
    queryKey: ['pokemon-species', id],
    queryFn: () => PokemonService.getPokemonSpecieByPokemonId(id),
  })
}

export default usePokemonSpecies
