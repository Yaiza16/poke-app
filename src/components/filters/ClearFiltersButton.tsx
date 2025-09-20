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
      className="flex items-center gap-2 h-auto bg-slate-700/50 text-slate-200 border border-slate-600/50 hover:bg-slate-600/60 hover:text-white hover:border-slate-500 transition-all duration-300 disabled:bg-slate-800/50 disabled:text-slate-500 disabled:border-slate-700/30"
      disabled={!hasActiveFilters}
    >
      <RotateCcw className="h-3 w-3" />
      Clear all
    </Button>
  )
}

export default ClearFiltersButton
