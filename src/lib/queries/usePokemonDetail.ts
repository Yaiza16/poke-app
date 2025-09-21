import { usePokemonSpecies } from './usePokemonSpecies'
import usePokemon from './usePokemon'

export const usePokemonDetail = (id: number) => {
  const pokemonQuery = usePokemon(id)

  const speciesQuery = usePokemonSpecies(id, {
    enabled: !!id && !!pokemonQuery.data,
  })

  const isLoading = pokemonQuery.isLoading || speciesQuery.isLoading

  return {
    pokemon: pokemonQuery.data,
    species: speciesQuery.data,
    errorPokemon: pokemonQuery.error,
    errorSpecies: speciesQuery.error,
    isLoading,
  }
}
