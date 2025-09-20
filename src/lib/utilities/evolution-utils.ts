import { EvolutionChainLink, EvolutionChainResponse } from "@/types"

export function extractEvolutionFamily(evolutionChainData: EvolutionChainResponse): string[] {
  const family: string[] = []
  
  function traverse(evolutionData: EvolutionChainLink) {
    if (evolutionData.species?.name) {
      family.push(evolutionData.species.name)
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