import React from 'react'
import { PokemonDetailContainerCard } from '../pokemonDetail'

export const PokemonEvolutionChainEmpty = () => {
  return (
    <PokemonDetailContainerCard>
      <div className="space-y-6">
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-2 border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-slate-600/10 to-slate-700/10" />

          <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-11/12 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />

          <div className="relative z-10 flex flex-col items-center justify-center py-8 space-y-4">


            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-slate-200">No evolutions</h3>
              <p className="text-sm text-slate-400 max-w-md">
                This Pokémon has no evolution chain available or is unique in its species.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PokemonDetailContainerCard>
  )
}
