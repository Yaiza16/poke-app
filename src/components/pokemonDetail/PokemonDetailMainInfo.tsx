import { Pokemon } from '@/types'
import React from 'react'
import { capitalize } from '@/lib/utilities'
import TypeBadge from '../pokemon/TypeBadge'
import { PokemonDetailBasicInfo, PokemonDetailContainerCard, PokemonDetailImage } from '.'


export const PokemonDetailMainInfo = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <PokemonDetailContainerCard>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">{capitalize(pokemon.name)}</h1>
        <div className="text-slate-400 text-lg font-mono">#{pokemon.id.toString().padStart(3, '0')}</div>
      </div>

      <PokemonDetailImage pokemon={pokemon} />

      <div className="flex justify-center gap-3 mb-6">
        {pokemon.types?.map((typeInfo, index) => (
          <TypeBadge type={typeInfo.type.name} key={typeInfo.type.name} delay={index * 100} />
        ))}
      </div>

      <PokemonDetailBasicInfo pokemon={pokemon} />
    </PokemonDetailContainerCard>
  )
}
