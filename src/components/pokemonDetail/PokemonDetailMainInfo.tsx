import { Pokemon, PokemonAPIResourceItem } from '@/types'
import { capitalize, formatGenerationName } from '@/lib/utilities'
import TypeBadge from '../pokemon/TypeBadge'
import { PokemonDetailBasicInfo, PokemonDetailContainerCard, PokemonDetailImage } from '.'

interface PokemonDetailMainInfoProps {
  pokemon: Pokemon
  generation?: PokemonAPIResourceItem
}

export const PokemonDetailMainInfo = ({ pokemon, generation }: PokemonDetailMainInfoProps) => {
  return (
    <PokemonDetailContainerCard>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">{capitalize(pokemon.name)}</h1>
        <div className="text-slate-400 text-lg font-mono mb-3">#{pokemon.id.toString().padStart(3, '0')}</div>
        {generation?.name && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-600/20 to-slate-700/20 border border-slate-400/30 backdrop-blur-sm">
            <span className="text-slate-200 text-sm font-medium tracking-wide">
              {formatGenerationName(generation.name)}
            </span>
          </div>
        )}
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
