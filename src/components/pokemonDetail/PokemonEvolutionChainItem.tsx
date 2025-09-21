import React from 'react'

import { getTypeColors } from '@/lib/constants/pokemon-type-colors'
import usePokemon from '@/lib/queries/usePokemon'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SkeletonPokemonEvolution } from '../skeletons'
import { PokemonImage } from '../pokemon/PokemonImage'
import { CurrentPokemonGlow, CurrentPokemonIndicator, PokemonInfo } from './PokemonEvolutionChainItemParts'

const getCurrentPokemonStyles = (typeColors: ReturnType<typeof getTypeColors>) => `
  bg-gradient-to-br from-slate-700/80 via-slate-800/80 to-slate-900/80 
  ${typeColors.border} shadow-2xl hover:shadow-3xl hover:brightness-105
`

const getDefaultStyles = () => `
  bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-600/50 
  hover:bg-gradient-to-br hover:from-slate-700/60 hover:to-slate-800/60 
  hover:border-slate-500/60
`
interface PokemonEvolutionChainItemProps {
  id: number
}

export const PokemonEvolutionChainItem: React.FC<PokemonEvolutionChainItemProps> = ({ id }) => {
  const { id: currentPokemonId } = useParams()
  const isCurrent = id === Number(currentPokemonId)
  const { data, isLoading, error } = usePokemon(id)

  if (isLoading) return <SkeletonPokemonEvolution />
  if (error || !data) {
    return <div className="min-w-[120px] max-w-[140px] p-4 text-center text-red-400 text-sm">Error</div>
  }

  const typeColors = getTypeColors(data.types[0]?.type.name)

  return (
    <Link href={`/${id}`} className="flex-shrink-0">
      <div
        className={`
        relative group cursor-pointer transition-all duration-500 
        ${isCurrent ? 'scale-110 z-10' : 'hover:scale-105'}
      `}
      >
        <CurrentPokemonGlow isCurrent={isCurrent} />

        <div
          className={`
          relative p-3 rounded-2xl backdrop-blur-lg border-2 transition-all duration-500 
          min-w-[120px] max-w-[140px]
          ${isCurrent ? getCurrentPokemonStyles(typeColors!) : getDefaultStyles()}
        `}
        >
          <PokemonImage pokemon={data} size="xsmall" variant="card" className="mb-2" />

          <CurrentPokemonIndicator isCurrent={isCurrent} typeColors={typeColors!} />

          <PokemonInfo pokemon={data} isCurrent={isCurrent} />
        </div>
      </div>
    </Link>
  )
}
