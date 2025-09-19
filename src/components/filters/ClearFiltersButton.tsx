import { usePokemonFiltersStore } from '@/lib/stores/pokemon-filters-store'
import { Button } from '../ui/button'
import { RotateCcw } from 'lucide-react'

const ClearFiltersButton = () => {
  const { filters, clearFilters } = usePokemonFiltersStore()

  const hasActiveFilters = !!(filters.search || filters.type || filters.generation)

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={clearFilters}
      className="flex items-center gap-2 h-auto"
      disabled={!hasActiveFilters}
    >
      <RotateCcw className="h-3 w-3" />
      Clear all
    </Button>
  )
}

export default ClearFiltersButton
