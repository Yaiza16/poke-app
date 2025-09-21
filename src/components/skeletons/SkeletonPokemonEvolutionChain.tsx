import React from 'react'
import { PokemonDetailContainerCard } from '../pokemonDetail'

export const SkeletonPokemonEvolutionChain = () => {
  return (
    <PokemonDetailContainerCard>
      <div className="space-y-6">
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-2 border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-green-500/5 to-purple-500/5" />
          <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-slate-600/10 to-slate-700/10" />

          <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-11/12 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="h-6 bg-slate-700/50 rounded-lg w-48 animate-pulse" />
            </div>

            <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
              <div className="flex-shrink-0">
                <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/30">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-full animate-pulse" />
                  <div className="h-4 bg-slate-700/50 rounded w-16 animate-pulse" />
                  <div className="h-3 bg-slate-800/50 rounded w-10 animate-pulse" />
                </div>
              </div>

              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-slate-700/30 rounded animate-pulse" />
              </div>

              <div className="flex-shrink-0">
                <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/30">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-full animate-pulse" />
                  <div className="h-4 bg-slate-700/50 rounded w-16 animate-pulse" />
                  <div className="h-3 bg-slate-800/50 rounded w-10 animate-pulse" />
                </div>
              </div>

              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-slate-700/30 rounded animate-pulse" />
              </div>

              <div className="flex-shrink-0">
                <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/30">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-full animate-pulse" />
                  <div className="h-4 bg-slate-700/50 rounded w-16 animate-pulse" />
                  <div className="h-3 bg-slate-800/50 rounded w-10 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-slate-400">
                <div className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-medium">Loading..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PokemonDetailContainerCard>
  )
}
