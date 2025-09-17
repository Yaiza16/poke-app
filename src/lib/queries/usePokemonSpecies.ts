import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

const usePokemonSpecies = (id: number) => {
  return useQuery({
    queryKey: ['pokemon-species', id],
    queryFn: () => PokemonService.getPokemonSpeciesById(id),
  })
}

export default usePokemonSpecies
