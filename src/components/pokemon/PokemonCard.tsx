import usePokemon from '@/lib/queries/usePokemon'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { getTypeColors } from '@/lib/constants/pokemon-type-colors'
import { PokemonBasicItem } from '@/types/pokemon'
import { capitalize } from '@/lib/utilities'
import { usePokemonSpecies } from '@/lib/queries'
import AnimatedStat from './AnimatedStat'
import PokemonAbilities from './pokemonCardItems/PokemonAbilities'
import PokemonTypes from './pokemonCardItems/PokemonTypes'
import { SkeletonPokemonCard } from '../skeletons/SkeletonPokemonCard'
import { SkeletonPokemonCardError } from '../skeletons'
import { PokemonImage } from './PokemonImage'
import Link from 'next/link'
import { Star, TriangleAlert, Zap } from 'lucide-react'

const formatGeneration = (genName: string) => {
  const genNumber = genName.split('-')[1]
  return genNumber ? `Gen ${genNumber.toUpperCase()}` : genName
}

const PokemonCard = ({ pokemonBasic }: { pokemonBasic: PokemonBasicItem }) => {
  const { data: pokemon, isLoading: pokemonLoading, error: pokemonError } = usePokemon(pokemonBasic.id)
  const { data: species, isLoading: speciesLoading, error: speciesError } = usePokemonSpecies(pokemonBasic.id)

  if (pokemonLoading || speciesLoading) return <SkeletonPokemonCard className="w-[320px] h-[586px]" />
  if (pokemonError) return <SkeletonPokemonCardError className="w-[320px] h-[586px]" />
  if (!pokemon) return <div>No data</div>

  return (
    <Link href={`/${pokemonBasic.id}`} className="block">
      <Card
        className={`group relative w-80 overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl hover:brightness-105 border-2 ${getTypeColors(pokemon.types[0].type.name).border} hover:${getTypeColors(pokemon.types[0].type.name).shadow}`}
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

          <PokemonImage pokemon={pokemon} size="medium" variant="card" className="mb-4" />
          <h2
            className={`mb-6 text-center text-2xl font-bold text-slate-100 drop-shadow-lg transition-all duration-300`}
          >
            {capitalize(pokemon.name)}
          </h2>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <AnimatedStat
              label="Generation"
              value={species ? formatGeneration(species.generation.name) : speciesError ? 'Not found' : 'Loading...'}
              delay={200}
              icon={speciesError ? <TriangleAlert size={16} /> : <Star size={16} />}
              type={speciesError ? 'error' : 'default'}
            />
            <AnimatedStat
              label="Base EXP"
              value={pokemon.base_experience?.toString() || 'N/A'}
              delay={400}
              icon={<Zap size={16} />}
            />
          </div>
          {pokemon.abilities && pokemon.abilities.length > 0 && <PokemonAbilities pokemon={pokemon} />}
          {pokemon.types && pokemon.types.length > 0 && <PokemonTypes pokemon={pokemon} />}
        </CardContent>
      </Card>
    </Link>
  )
}

export default PokemonCard
