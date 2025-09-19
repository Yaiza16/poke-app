import { useQuery } from '@tanstack/react-query'
import { PokemonService } from '../api'

const useAllPokemonTypes = () => {
  return useQuery({
    queryKey: ['all-pokemon-types'],
    queryFn: () => PokemonService.getAllPokemonTypes(),
  })
}

export default useAllPokemonTypes
