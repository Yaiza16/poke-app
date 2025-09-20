import { Skeleton } from '../ui/skeleton'

export const SkeletonPokemonDetail = () => (
  <div className="animate-pulse">
    <Skeleton className="h-10 w-20 mb-6 bg-slate-700" />

    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
          <Skeleton className="h-8 mb-4 bg-slate-700" />
          <div className="flex justify-center mb-6">
            <Skeleton className="w-64 h-64 rounded-full bg-slate-700" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-6 w-3/4 bg-slate-700" />
            <Skeleton className="h-6 w-1/2 bg-slate-700" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
          <Skeleton className="h-6 mb-4 bg-slate-700" />
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-4 w-1/3 bg-slate-700" />
                <Skeleton className="h-4 w-1/4 bg-slate-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

