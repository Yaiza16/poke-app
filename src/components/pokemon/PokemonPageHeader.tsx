const PokemonPageHeader = () => {
  return (
    <div className="text-center w-full mb-8">
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent mb-4">
          Pokédex Explorer
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover, explore and catch all your favorite Pokémon. Filter by type, generation, or search by name to find
          exactly what you&apos;re looking for.
        </p>
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default PokemonPageHeader
