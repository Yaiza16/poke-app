import { Badge } from '@/components/ui/badge'
import { Pokemon } from '@/types'
import React from 'react'

const PokemonAbilities = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="mb-6 text-center">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Primary Ability</div>
      <Badge className="bg-slate-700/50 text-slate-200 border-slate-600 hover:bg-slate-600/50 capitalize">
        {pokemon.abilities[0].ability.name.replace('-', ' ')}
      </Badge>
    </div>
  )
}

export default PokemonAbilities
