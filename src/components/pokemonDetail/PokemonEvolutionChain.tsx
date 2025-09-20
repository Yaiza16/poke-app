import { PokemonBasicItem } from '@/types/pokemon'
import React from 'react'
import { PokemonDetailContainerCard, PokemonEvolutionChainItem } from '.'

interface PokemonEvolutionChainProps {
  evolutionData: PokemonBasicItem[]
}

export const PokemonEvolutionChain = ({ evolutionData }: PokemonEvolutionChainProps) => {
  if (!evolutionData || evolutionData.length === 0) return null

  return (
    <PokemonDetailContainerCard>
      <div className="space-y-6">
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-2 border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-green-500/5 to-purple-500/5" />
          <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-slate-600/10 to-slate-700/10" />

          <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-11/12 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />

          <div className="relative z-10">
            <div
              className={`
              flex items-center justify-center gap-2 sm:gap-4
              ${evolutionData.length === 2 ? 'flex-col sm:flex-row' : ''}
              ${evolutionData.length === 3 ? 'flex-col lg:flex-row' : ''}
              ${evolutionData.length > 3 ? 'grid grid-cols-2 lg:grid-cols-4 gap-4' : ''}
            `}
            >
              {evolutionData.map((pokemon, index) => (
                <React.Fragment key={pokemon.id}>
                  <div className="flex-shrink-0">
                    <PokemonEvolutionChainItem id={pokemon.id} />
                  </div>
                  {index < evolutionData.length - 1 && (
                    <div className="flex items-center justify-center flex-shrink-0">
                      <div className="text-slate-400 text-lg font-medium rotate-90 lg:rotate-0 transition-transform duration-300">
                        →
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PokemonDetailContainerCard>
  )
}
