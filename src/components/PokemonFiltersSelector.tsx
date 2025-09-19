import useAllPokemonTypes from '@/lib/queries/useAllPokemonTypes'
import { usePokemonFiltersStore } from '@/lib/stores/pokemon-filters-store'
import SelectFilter from './SelectFilter'
import { capitalize } from '@/lib/utilities'
import useAllPokemonGenerations from '@/lib/queries/useAllPokemonGenerations'
import SkeletonPokemonFilterInput from './skeletons/SkeletonPokemonFilterInput'

const PokemonFiltersSelector = () => {
  const { filters, setType, setGeneration } = usePokemonFiltersStore()
  const { data: types = [], isLoading: isTypesLoading, isError: isTypesError } = useAllPokemonTypes()
  const { data: generations = [], isLoading: isGenLoading, isError: isGenError } = useAllPokemonGenerations()

  const isLoading = isTypesLoading || isGenLoading
  const hasError = isTypesError || isGenError
  if (isLoading) return Array.from({ length: 2 }).map((_, i) => <SkeletonPokemonFilterInput key={i} />)
  if (hasError) return <div>Error loading types or generations</div>
  return (
    <>
      <SelectFilter
        placeholder="All Types"
        data={types.map(type => ({ value: type, label: capitalize(type) }))}
        currentValue={filters.type}
        setValue={setType}
      />

      <SelectFilter
        placeholder="All Generations"
        data={generations.map(gen => ({ value: gen, label: capitalize(gen.split('-')[1]) }))}
        currentValue={filters.generation}
        setValue={setGeneration}
      />
    </>
  )
}

export default PokemonFiltersSelector
