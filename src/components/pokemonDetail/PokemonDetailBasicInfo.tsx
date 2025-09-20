import { Pokemon } from '@/types'

export const PokemonDetailBasicInfo = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-center">
      <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
        <div className="text-slate-400 text-sm mb-1">Height</div>
        <div className="text-white font-semibold">{pokemon.height / 10} m</div>
      </div>
      <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
        <div className="text-slate-400 text-sm mb-1">Weight</div>
        <div className="text-white font-semibold">{pokemon.weight / 10} kg</div>
      </div>
    </div>
  )
}

