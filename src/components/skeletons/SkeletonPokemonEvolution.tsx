import React from 'react'

export const SkeletonPokemonEvolution = () => {
  return (
    <div className="min-w-[120px] max-w-[140px] p-4 text-center">
      <div className="w-20 h-20 bg-slate-700 rounded-full mx-auto mb-2 animate-pulse" />
      <div className="h-4 bg-slate-700 rounded mb-1 animate-pulse" />
      <div className="h-3 bg-slate-700 rounded w-16 mx-auto animate-pulse" />
    </div>
  )
}

