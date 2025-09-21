import React from 'react'

const PokemonDetailPageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-700 rounded mb-6 w-48"></div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-8">
                <div className="w-64 h-64 bg-slate-700 rounded-full mx-auto mb-6"></div>

                <div className="space-y-3">
                  <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-8">
                <div className="h-6 bg-slate-700 rounded mb-4"></div>

                {Array.from({ length: 6 }, (_, index) => (
                  <div key={index} className="flex justify-between mb-3">
                    <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailPageSkeleton
