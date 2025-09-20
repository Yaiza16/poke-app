import { Pokemon } from '@/types'
import { getTypeColors } from '@/lib/constants/pokemon-type-colors'
import Image from 'next/image'

interface PokemonImageProps {
  pokemon: Pokemon
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  variant?: 'card' | 'detail'
  className?: string
}

export const PokemonImage = ({ pokemon, size = 'medium', variant = 'card', className = '' }: PokemonImageProps) => {
  const primaryType = pokemon.types[0]?.type.name
  const typeColors = getTypeColors(primaryType)

  const sizeConfig = {
    // Añadir otra más pequeña todavía. MÁS
    xsmall: {
      container: 'w-22 h-22',
      image: { width: 80, height: 80, padding: 'p-1' },
      reflection: 'w-16 h-2',
      particles: { main: 'w-0.5 h-0.5', secondary: 'w-0.25 h-0.25' },
    },
    small: {
      container: 'w-32 h-32',
      image: { width: 100, height: 100, padding: 'p-2' },
      reflection: 'w-20 h-3',
      particles: { main: 'w-1 h-1', secondary: 'w-0.5 h-0.5' },
    },
    medium: {
      container: 'w-40 h-40',
      image: { width: 130, height: 130, padding: 'p-2' },
      reflection: 'w-24 h-4',
      particles: { main: 'w-1.5 h-1.5', secondary: 'w-1 h-1' },
    },
    large: {
      container: 'w-64 h-64',
      image: { width: 200, height: 200, padding: 'p-4' },
      reflection: 'w-32 h-6',
      particles: { main: 'w-2 h-2', secondary: 'w-1 h-1' },
    },
  }

  const config = sizeConfig[size]
  const isDetail = variant === 'detail'

  return (
    <div className={`relative group ${className}`}>
      {isDetail && (
        <div
          className={`absolute inset-0 rounded-full blur-2xl opacity-20 transition-all duration-1000 group-hover:opacity-40 animate-pulse-glow ${typeColors.background}`}
        />
      )}

      <div
        className={`
          relative ${config.container} rounded-full backdrop-blur-sm 
          transition-all duration-500 overflow-hidden mx-auto
          bg-gradient-to-br from-slate-700/50 to-slate-800/50
          ${isDetail ? `border-4 ${typeColors.border}` : `border-2 ${typeColors.border}`}
          group-hover:scale-105
          ${isDetail ? 'group-hover:shadow-2xl group-hover:brightness-110' : 'hover:brightness-110'}
          flex items-center justify-center
        `}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-500/5 to-purple-500/5" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-600/20 to-slate-700/20" />

        {isDetail && (
          <div
            className="absolute inset-0 rounded-full opacity-20 animate-rotate-slow"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${typeColors.main}/20, transparent)`,
            }}
          />
        )}

        <div
          className={`relative w-full h-full z-10 flex items-center justify-center ${
            isDetail ? 'animate-subtle-float' : ''
          }`}
        >
          <Image
            src={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default || ''}
            alt={pokemon.name}
            width={config.image.width}
            height={config.image.height}
            className={`
              object-contain ${config.image.padding} transition-all duration-500 
              group-hover:scale-110 
              ${
                isDetail
                  ? 'group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                  : 'group-hover:drop-shadow-[0_0_20px_rgba(202,182,171,0.5)]'
              }
            `}
            priority={isDetail}
          />
        </div>

        <div
          className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 ${config.reflection} bg-gradient-to-t from-white/${isDetail ? '8' : '5'} to-transparent rounded-full blur-${isDetail ? 'md' : 'sm'}`}
        />

        {/* Partículas decorativas (solo para detail) */}
        {isDetail && (
          <>
            <div
              className={`absolute top-4 right-4 ${config.particles.main} bg-white/30 rounded-full animate-twinkle-1`}
            />
            <div
              className={`absolute bottom-8 left-6 ${config.particles.secondary} bg-white/20 rounded-full animate-twinkle-2`}
            />
          </>
        )}
      </div>
    </div>
  )
}
