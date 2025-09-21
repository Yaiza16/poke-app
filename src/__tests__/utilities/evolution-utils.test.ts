import { extractEvolutionFamily } from '@/lib/utilities/evolution-utils'
import { EvolutionChainResponse } from '@/types/pokemon-evolution'

describe('extractEvolutionFamily', () => {
  it('should extract pokemon with names and IDs from evolution chain', () => {
    const mockEvolutionChain: EvolutionChainResponse = {
      id: 10,
      chain: {
        is_baby: false,
        species: {
          name: 'pichu',
          url: 'https://pokeapi.co/api/v2/pokemon-species/172/',
        },
        evolves_to: [
          {
            is_baby: false,
            species: {
              name: 'pikachu',
              url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
            },
            evolves_to: [
              {
                is_baby: false,
                species: {
                  name: 'raichu',
                  url: 'https://pokeapi.co/api/v2/pokemon-species/26/',
                },
                evolves_to: [],
                evolution_details: [],
              },
            ],
            evolution_details: [],
          },
        ],
        evolution_details: [],
      },
    }

    const result = extractEvolutionFamily(mockEvolutionChain)

    expect(result).toEqual([
      { name: 'pichu', id: 172 },
      { name: 'pikachu', id: 25 },
      { name: 'raichu', id: 26 },
    ])
    expect(result).toHaveLength(3)
  })

  it('should handle pokemon with no evolutions', () => {
    const mockEvolutionChain: EvolutionChainResponse = {
      id: 143,
      chain: {
        is_baby: false,
        species: {
          name: 'snorlax',
          url: 'https://pokeapi.co/api/v2/pokemon-species/143/',
        },
        evolves_to: [],
        evolution_details: [],
      },
    }

    const result = extractEvolutionFamily(mockEvolutionChain)

    expect(result).toEqual([{ name: 'snorlax', id: 143 }])
    expect(result).toHaveLength(1)
  })

  it('should extract correct IDs from URLs', () => {
    const mockEvolutionChain: EvolutionChainResponse = {
      id: 1,
      chain: {
        is_baby: false,
        species: {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        },
        evolves_to: [],
        evolution_details: [],
      },
    }

    const result = extractEvolutionFamily(mockEvolutionChain)

    expect(result[0].id).toBe(1)
    expect(result[0].name).toBe('bulbasaur')
  })
})
