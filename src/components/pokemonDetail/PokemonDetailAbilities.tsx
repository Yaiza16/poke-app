import { PokemonAbility } from '@/types/pokemon'
import { capitalize } from '@/lib/utilities'
import { Badge } from '../ui/badge'
import { PokemonDetailContainerCard } from '.'

export const PokemonDetailAbilities = ({ abilities }: { abilities: PokemonAbility[] }) => {
  return (
    <PokemonDetailContainerCard>
      <h3 className="text-xl font-bold text-white mb-4">Abilities</h3>
      <div className="space-y-3">
        {abilities.map(ability => (
          <div
            key={ability.ability.name}
            className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600/30"
          >
            <span className="text-white font-medium">{capitalize(ability.ability.name)}</span>
            {ability.is_hidden && <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/30">Hidden</Badge>}
          </div>
        ))}
      </div>
    </PokemonDetailContainerCard>
  )
}
