export interface EvolutionChainLink {
  is_baby: boolean
  species: {
    name: string
    url: string
  }
  evolves_to: EvolutionChainLink[]
  evolution_details: Array<{
    min_level?: number
    trigger: {
      name: string
      url: string
    }
    item?: {
      name: string
      url: string
    }
  }>
}

export interface EvolutionChainResponse {
  id: number
  baby_trigger_item?: {
    name: string
    url: string
  }
  chain: EvolutionChainLink
}

export interface PokemonSpeciesResponse {
  id: number
  name: string
  evolution_chain: {
    url: string
  }
  generation: {
    name: string
    url: string
  }
}