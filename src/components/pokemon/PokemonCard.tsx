import usePokemon from '@/lib/queries/usePokemon'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { getTypeColors } from '@/lib/constants/pokemon-type-colors'
import { PokemonBasicItem } from '@/types/pokemon'
import { capitalize } from '@/lib/utilities'
import { usePokemonSpecies } from '@/lib/queries'

const PokemonCard = ({ pokemonBasic }: { pokemonBasic: PokemonBasicItem }) => {
  const { data: pokemon, isLoading: pokemonLoading, error: pokemonError } = usePokemon(pokemonBasic.id)
  const { data: species, isLoading: speciesLoading, error: speciesError } = usePokemonSpecies(pokemonBasic.id)

  if (pokemonLoading || speciesLoading) return <div>Loading...</div>
  if (pokemonError || speciesError) return <div>Error loading Pokemon</div>
  if (!pokemon) return <div>No data</div>

  return (
    <Card
      className={`group relative w-80 overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl hover:brightness-105 border-2 border-${getTypeColors(pokemon.types[0].type.name).main} hover:${getTypeColors(pokemon.types[0].type.name).shadow}`}
    >
      <CardContent className="relative z-10 p-6">
        <div className="mb-4 flex items-center justify-between">
          <Badge
            variant="secondary"
            className="transform border-slate-600 bg-slate-700/50 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-slate-600/60"
          >
            #{pokemon.id.toString().padStart(3, '0')}
          </Badge>
          <div className="relative">
            <div
              className={`h-3 w-6 animate-pulse rounded-full ${getTypeColors(pokemon.types[0].type.name).background}`}
            />
            <div
              className={`absolute inset-0 h-3 w-6 animate-ping rounded-full ${getTypeColors(pokemon.types[0].type.name).background} opacity-75`}
            />
          </div>
        </div>

        <div
          className={`relative h-40 w-40 overflow-hidden rounded-full border-2 border-${getTypeColors(pokemon.types[0].type.name).main}/30 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm transition-all duration-500 group-hover:border-${getTypeColors(pokemon.types[0].type.name).main}/60 flex items-center justify-center mx-auto mb-4`}
        >
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-500/5 to-purple-500/5" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-600/20 to-slate-700/20" />
          <Image
            src={pokemon.sprites.other?.['official-artwork'].front_default}
            alt={pokemon.name}
            width={130}
            height={130}
            className="object-contain p-2 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(202,182,171,0.5)]"
          />
        </div>
        <h2 className={`mb-6 text-center text-2xl font-bold text-slate-100 drop-shadow-lg transition-all duration-300`}>
          {capitalize(pokemon.name)}
        </h2>
        {speciesError && <small className="text-yellow-600">⚠️ Generation info unavailable</small>}
      </CardContent>
    </Card>
  )
}

export default PokemonCard
