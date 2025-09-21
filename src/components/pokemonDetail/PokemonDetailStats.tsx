import React from 'react'
import { PokemonStat } from '@/types/pokemon'
import { PokemonDetailContainerCard } from './PokemonDetailContainerCard'
import { PokemonDetailStatBar } from './PokemonDetailStatBar'

interface PokemonDetailStatsProps {
  stats: PokemonStat[]
  type: string
}

export const PokemonDetailStats = ({ stats, type }: PokemonDetailStatsProps) => {
  return (
    <PokemonDetailContainerCard>
      <h3 className="text-xl font-bold text-white mb-6">Stats</h3>
      <div className="space-y-4">
        {stats?.map((stat) => (
          <PokemonDetailStatBar key={stat.stat.name} stat={stat} type={type} />
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-slate-600/30">
        <div className="flex justify-between items-center">
          <span className="text-slate-300 font-medium">Total</span>
          <span className="text-white font-bold text-lg">
            {stats?.reduce((total: number, stat: any) => total + stat.base_stat, 0)}
          </span>
        </div>
      </div>
    </PokemonDetailContainerCard>
  )
}
