export interface PokemonAPIResourceList {
  count: number
  next: string | null
  previous: string | null
  results: Array<{
    name: string
    url: string
  }>
}

export interface PokemonAPIResourceItem {
  name: string
  url: string
}

export interface PokemonAPIListParams {
  limit?: number
  offset?: number
}
