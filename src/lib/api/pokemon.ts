import { Pokemon, PokemonAPIResourceList } from '@/types'
import { apiClient } from './client'
import { GenerationPokemonResponse, PokemonBasicItem, PokemonSpecies, TypePokemonResponse } from '@/types/pokemon'

const POKEMON_LIMIT_LIST = 1400
export class PokemonService {
  static async getPokemonList(): Promise<PokemonBasicItem[]> {
    const { data } = await apiClient.get<PokemonAPIResourceList>('pokemon', {
      params: { limit: POKEMON_LIMIT_LIST },
    })
    return data.results.map(pokemon => ({
      name: pokemon.name,
      id: this.extractIdFromUrl(pokemon.url),
    }))
  }

  static async getAllPokemonTypes(): Promise<string[]> {
    const { data } = await apiClient.get<PokemonAPIResourceList>('type')
    return data.results.map(type => type.name)
  }

  static async getAllPokemonGenerations(): Promise<string[]> {
    const { data } = await apiClient.get<PokemonAPIResourceList>('generation')
    return data.results.map(generation => generation.name)
  }

  static async getPokemonesByType(type: string): Promise<number[]> {
    const response = await apiClient.get<TypePokemonResponse>(`/type/${type}`)
    return response.data.pokemon.map(p => this.extractIdFromUrl(p.pokemon.url))
  }

  static async getPokemonById(id: number): Promise<Pokemon> {
    const { data } = await apiClient.get<Pokemon>(`/pokemon/${id}`)
    return data
  }
  static async getPokemonesByGeneration(generationId: number): Promise<number[]> {
    const response = await apiClient.get<GenerationPokemonResponse>(`/generation/${generationId}`)

    return response.data.pokemon_species.map(p => this.extractIdFromUrl(p.url))
  }

  static async getPokemonSpecieByPokemonId(id: number): Promise<PokemonSpecies> {
    const { data } = await apiClient.get<PokemonSpecies>(`/pokemon-species/${id}`)
    return data
  }

  static extractIdFromUrl(url: string): number {
    const matches = url.match(/\/(\d+)\/$/)
    return matches ? parseInt(matches[1], 10) : 0
  }
}
