export interface PokemonAPIResourceList {
  count: number
  next: string | null
  previous: string | null
  results: PokemonAPIResourceItem[]
}

export interface PokemonBasicItem {
  name: string
  id: number
}

export interface PokemonAPIResourceItem {
  name: string
  url: string
}

export interface PokemonAPIListParams {
  limit?: number
  offset?: number
}

interface PokemonType {
  slot: number
  type: PokemonAPIResourceItem
}

interface PokemonSprite {
  front_default: string
  other: {
    ['official-artwork']: {
      front_default: string
    }
    home: {
      front_default: string
    }
  }
}

export interface PokemonAbility {
  ability: PokemonAPIResourceItem
  is_hidden: boolean
  slot: number
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: PokemonAPIResourceItem
}

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  types: PokemonType[]
  sprites: PokemonSprite
  abilities: PokemonAbility[]
  stats: PokemonStat[]
}

export interface PokemonSpecies {
  id: number
  name: string
  generation: PokemonAPIResourceItem
  evolution_chain: { url: string }
}

// Pokemon Types
export interface TypePokemonResponse {
  pokemon: Array<{
    pokemon: PokemonAPIResourceItem
  }>
}

export interface GenerationPokemonResponse {
  pokemon_species: Array<{
    name: string
    url: string
  }>
}
