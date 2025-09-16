import { PokemonAPIListParams, PokemonAPIResourceList } from '@/types'
import { apiClient } from './client'

export class PokemonService {
  static async getPokemonList(params: PokemonAPIListParams = {}) {
    const { limit = 20, offset = 0 } = params

    const { data } = await apiClient.get<PokemonAPIResourceList>('pokemon', {
      params: { limit, offset },
    })
    return data
  }
}
