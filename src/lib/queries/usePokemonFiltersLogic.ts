import { useMemo } from "react"
import { usePokemonFiltersStore } from "../stores/pokemon-filters-store"
import { usePokemonByGeneration } from "./usePokemonBygeneration"
import { usePokemonByType } from "./usePokemonByType"
import { PokemonBasicItem } from "@/types/pokemon"

export const usePokemonFiltersLogic = (allPokemon: PokemonBasicItem[]) => {
  const { filters } = usePokemonFiltersStore()
  
  const { data: typeFilterIds = [], isLoading: isTypeLoading } = usePokemonByType(filters.type)
  
  const generationNumber = filters.generation ? 
    parseInt(filters.generation.replace('generation-', '')) : 0
  const { data: generationFilterIds = [], isLoading: isGenerationLoading } = usePokemonByGeneration(generationNumber)
  
  const filteredByTypeAndGeneration = useMemo(() => {
    if (!allPokemon) return []
    
    let filtered = allPokemon
    
    if (filters.type && typeFilterIds.length > 0) {
      filtered = filtered.filter(pokemon => typeFilterIds.includes(pokemon.id))
    }
    
    if (filters.generation && generationFilterIds.length > 0) {
      filtered = filtered.filter(pokemon => generationFilterIds.includes(pokemon.id))
    }
    
    return filtered
  }, [allPokemon, filters.type, filters.generation, typeFilterIds, generationFilterIds])
  
  return {
    filteredPokemon: filteredByTypeAndGeneration,
    isLoading: isTypeLoading || isGenerationLoading,
  }
}