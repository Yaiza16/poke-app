import { AlertTriangle } from 'lucide-react'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'

export const SkeletonPokemonCardError = ({ className, onRetry }: { className?: string; onRetry?: () => void }) => {
  return (
    <Card
      className={cn(
        'w-80 h-[586px] bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-red-600/50 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-2xl',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent pointer-events-none" />

      <div className="text-center relative z-10 flex flex-col items-center px-4">
        <div className="w-32 h-32 rounded-full border-2 border-red-500/60 bg-red-900/20 flex items-center justify-center mb-8">
          <AlertTriangle className="w-16 h-16 text-red-400" />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-balance text-slate-200">Error Loading Pokémon</h2>

        <p className="text-slate-400 mb-8 text-balance leading-relaxed">
          Unable to load Pokémon data. Please check your connection and try again.
        </p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-slate-700/70 text-slate-200 border border-slate-600/50 px-6 py-2 rounded-lg font-medium hover:bg-slate-600/80 hover:text-white hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
          >
            Try Again
          </button>
        )}
      </div>
    </Card>
  )
}
