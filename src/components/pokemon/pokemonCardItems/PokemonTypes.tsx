import React from 'react'
import TypeBadge from '../TypeBadge'
import { Pokemon } from '@/types'

const PokemonTypes = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="text-center">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400 transition-all duration-300 group-hover:text-slate-300">
        Type
      </div>
      <div className="flex justify-center gap-3">
        {pokemon.types.map((typeInfo, index) => (
          <TypeBadge key={typeInfo.type.name} type={typeInfo.type.name} delay={600 + index * 200} />
        ))}
      </div>
    </div>
  )
}

export default PokemonTypes
