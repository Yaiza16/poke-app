import { getTypeColors } from '@/lib/constants/pokemon-type-colors'

const CurrentPokemonGlow = ({ isCurrent }: { isCurrent: boolean }) =>
  isCurrent ? (
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-purple-500/20 to-amber-500/20 rounded-3xl blur-lg opacity-40 animate-pulse" />
  ) : null

const CurrentPokemonIndicator = ({
  isCurrent,
  typeColors,
}: {
  isCurrent: boolean
  typeColors: ReturnType<typeof getTypeColors>
}) =>
  isCurrent ? (
    <>
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <div className={`h-2 w-4 animate-pulse rounded-full ${typeColors.background}`} />
        <div className={`absolute inset-0 h-2 w-4 animate-ping rounded-full ${typeColors.background} opacity-75`} />
      </div>
      <div className={`absolute inset-0 rounded-2xl border ${typeColors.border} animate-pulse`} />
    </>
  ) : null

const PokemonInfo = ({ pokemon, isCurrent }: { pokemon: any; isCurrent: boolean }) => (
  <div className="text-center space-y-1">
    <p
      className={`
      font-bold capitalize transition-all duration-300 text-sm 
      ${isCurrent ? 'text-slate-100 drop-shadow-lg' : 'text-slate-200 group-hover:text-slate-100'}
    `}
    >
      {pokemon.name}
    </p>
    <p className="text-xs text-slate-400 font-mono">#{pokemon.id.toString().padStart(3, '0')}</p>
  </div>
)

export { PokemonInfo, CurrentPokemonGlow, CurrentPokemonIndicator }
