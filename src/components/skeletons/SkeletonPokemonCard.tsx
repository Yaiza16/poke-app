import { cn } from '@/lib/utils'
import { Card } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export const SkeletonPokemonCard = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        'w-80 h-[586px] bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-slate-700/50 rounded-2xl p-6 flex flex-col relative overflow-hidden backdrop-blur-sm shadow-2xl',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-transparent pointer-events-none" />

      <div className="flex justify-between items-center mb-6 relative z-10">
        <Skeleton className="h-6 w-12 rounded-md bg-slate-700/60" />
        <Skeleton className="w-6 h-6 rounded-full bg-slate-700/60" />
      </div>

      <div className="flex justify-center mb-8 relative z-10">
        <div className="w-32 h-32 rounded-full border-2 border-slate-600/60 bg-slate-700/30 flex items-center justify-center">
          <Skeleton className="w-24 h-24 rounded-full bg-slate-600/70" />
        </div>
      </div>

      <div className="text-center mb-8 relative z-10">
        <Skeleton className="h-9 w-32 mx-auto bg-slate-700/60" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
        <div className="bg-slate-700/40 rounded-lg p-4 border border-slate-600/30">
          <Skeleton className="h-4 w-20 mb-2 bg-slate-600/60" />
          <Skeleton className="h-6 w-16 bg-slate-600/60" />
        </div>

        <div className="bg-slate-700/40 rounded-lg p-4 border border-slate-600/30">
          <Skeleton className="h-4 w-16 mb-2 bg-slate-600/60" />
          <Skeleton className="h-6 w-12 bg-slate-600/60" />
        </div>
      </div>

      {/* Primary Ability skeleton */}
      <div className="mb-6 relative z-10">
        <Skeleton className="h-4 w-24 mx-auto mb-2 bg-slate-700/60" />
        <Skeleton className="h-5 w-28 mx-auto bg-slate-700/60" />
      </div>

      {/* Types skeleton */}
      <div className="mt-auto relative z-10">
        <Skeleton className="h-4 w-16 mx-auto mb-3 bg-slate-700/60" />
        <div className="flex justify-center gap-2">
          <Skeleton className="h-7 w-16 rounded-full bg-slate-600/70" />
          <Skeleton className="h-7 w-14 rounded-full bg-slate-600/70" />
        </div>
      </div>
    </Card>
  )
}
