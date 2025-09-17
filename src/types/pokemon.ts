export interface PokemonAPIResourceList {
  count: number
  next: string | null
  previous: string | null
  results: PokemonAPIResourceItem[]
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
    home: {
      front_default: string
    }
  }
}

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  types: PokemonType[]
  sprites: PokemonSprite
}

export interface PokemonSpecies {
  id: number
  name: string
  generation: PokemonAPIResourceItem
}
