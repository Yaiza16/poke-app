import { EvolutionChainLink, EvolutionChainResponse } from '@/types'
import { PokemonBasicItem } from '@/types/pokemon'

const getIdFromUrl = (url: string): number => {
  const match = url.match(/\/(\d+)\/$/)
  return match ? parseInt(match[1], 10) : 0
}

export function extractEvolutionFamily(evolutionChainData: EvolutionChainResponse): PokemonBasicItem[] {
  const family: PokemonBasicItem[] = []

  function traverse(evolutionData: EvolutionChainLink) {
    if (evolutionData.species?.name) {
      family.push({ name: evolutionData.species.name, id: getIdFromUrl(evolutionData.species.url) })
    }

    // Recorrer evoluciones recursivamente
    if (evolutionData.evolves_to && evolutionData.evolves_to.length > 0) {
      evolutionData.evolves_to.forEach((evolution: EvolutionChainLink) => {
        traverse(evolution)
      })
    }
  }

  traverse(evolutionChainData.chain)
  return family
}
