
import { usePokemonSpecies } from './usePokemonSpecies'
import { useEvolutionChain } from './useEvolutionChain'
import usePokemon from './usePokemon'

export const usePokemonDetail = (id: number) => {
  const pokemonQuery = usePokemon(id)

  const speciesQuery = usePokemonSpecies(id, {
    enabled: !!id && !!pokemonQuery.data,
  })

  const evolutionQuery = useEvolutionChain(speciesQuery.data?.evolution_chain?.url || '', {
    enabled: !!speciesQuery.data?.evolution_chain?.url,
  })

  const isLoading = pokemonQuery.isLoading || speciesQuery.isLoading
  const error = pokemonQuery.error || speciesQuery.error || evolutionQuery.error

  return {
    pokemon: pokemonQuery.data,
    species: speciesQuery.data,
    evolutionChain: evolutionQuery.data,
    isLoading,
    error,
  }
}
