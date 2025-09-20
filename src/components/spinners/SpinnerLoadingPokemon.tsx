import React from 'react'

const SpinnerLoadingPokemon = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-[400px]">
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-slate-700/50 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-slate-600/30 border-t-blue-500 animate-spin"></div>
          <div
            className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-red-500 animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Loading Pokémon</h3>
          <p className="text-slate-400 text-sm">Catching them all...</p>
        </div>

        <div className="flex gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default SpinnerLoadingPokemon
