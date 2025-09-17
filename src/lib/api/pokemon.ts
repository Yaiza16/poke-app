import { Pokemon, PokemonAPIListParams, PokemonAPIResourceList } from '@/types'
import { apiClient } from './client'
import { PokemonSpecies } from '@/types/pokemon'

export class PokemonService {
  static async getPokemonList(params: PokemonAPIListParams = {}): Promise<PokemonAPIResourceList> {
    const { limit = 20, offset = 0 } = params

    const { data } = await apiClient.get<PokemonAPIResourceList>('pokemon', {
      params: { limit, offset },
    })
    return data
  }

  static async getPokemonById(id: number): Promise<Pokemon> {
    const { data } = await apiClient.get<Pokemon>(`/pokemon/${id}`)
    return data
  }

  static async getPokemonSpeciesById(id: number): Promise<PokemonSpecies> {
    const { data } = await apiClient.get<PokemonSpecies>(`/pokemon-species/${id}`)
    return data
  }

  static extractIdFromUrl(url: string): number {
    const matches = url.match(/\/(\d+)\/$/)
    return matches ? parseInt(matches[1], 10) : 0
  }
}
