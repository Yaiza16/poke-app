import { PokemonBasicItem } from '@/types/pokemon'


export const deduplicatePokemon = (pokemon: PokemonBasicItem[]): PokemonBasicItem[] => {
  const seen = new Set<number>()
  return pokemon.filter(p => {
    if (seen.has(p.id)) return false
    seen.add(p.id)
    return true
  })
}

export const sortPokemonById = (pokemon: PokemonBasicItem[]): PokemonBasicItem[] => {
  return [...pokemon].sort((a, b) => a.id - b.id)
}


export const combinePokemonArrays = (...arrays: PokemonBasicItem[][]): PokemonBasicItem[] => {
  const combined = arrays.flat()
  const deduplicated = deduplicatePokemon(combined)
  return sortPokemonById(deduplicated)
}


export const filterPokemonByName = (pokemon: PokemonBasicItem[], searchTerm: string): PokemonBasicItem[] => {
  if (!searchTerm || searchTerm.length < 3) return []

  const term = searchTerm.toLowerCase().trim()
  return pokemon.filter(p => p.name.toLowerCase().includes(term))
}
