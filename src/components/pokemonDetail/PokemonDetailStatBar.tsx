import { getTypeColors } from '@/lib/constants/pokemon-type-colors'
import { capitalize } from '@/lib/utilities'
import { PokemonStat } from '@/types/pokemon'
import { Heart, Shield, Star, Wind, Zap, Activity } from 'lucide-react'

interface StatBarProps {
  stat: PokemonStat
  type: string
}

export const STATS_ICONS = {
  hp: Heart,
  attack: Zap,
  defense: Shield,
  'special-attack': Star,
  'special-defense': Activity,
  speed: Wind,
}

export const PokemonDetailStatBar = ({ stat, type }: StatBarProps) => {
  const percentage = Math.min((stat.base_stat / 255) * 100, 100)
  const StatIcon = STATS_ICONS[stat.stat.name as keyof typeof STATS_ICONS] || Activity

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StatIcon className="w-4 h-4 text-slate-400" />
          <span className="text-slate-300 text-sm font-medium">{capitalize(stat.stat.name.replace('-', ' '))}</span>
        </div>
        <span className="text-white font-bold text-sm">{stat.base_stat}</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${getTypeColors(type).background} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

