interface TypeColorScheme {
  main: string
  border: string
  background: string
  shadow: string
}

// Colores organizados por tipo de Pokémon
export const POKEMON_TYPE_COLORS: Record<string, TypeColorScheme> = {
  grass: {
    main: 'green-500',
    border: 'border-green-500/40',
    background: 'bg-gradient-to-r from-green-500 to-green-600',
    shadow: 'shadow-green-500/25 hover:shadow-green-500/40',
  },
  poison: {
    main: 'purple-500',
    border: 'border-purple-500/40',
    background: 'bg-gradient-to-r from-purple-500 to-purple-600',
    shadow: 'shadow-purple-500/25 hover:shadow-purple-500/40',
  },
  fire: {
    main: 'red-500',
    border: 'border-red-500/40',
    background: 'bg-gradient-to-r from-red-500 to-red-600',
    shadow: 'shadow-red-500/25 hover:shadow-red-500/40',
  },
  water: {
    main: 'blue-500',
    border: 'border-blue-500/40',
    background: 'bg-gradient-to-r from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/25 hover:shadow-blue-500/40',
  },
  electric: {
    main: 'yellow-500',
    border: 'border-yellow-500/40',
    background: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    shadow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40',
  },
  normal: {
    main: 'gray-500',
    border: 'border-gray-500/40',
    background: 'bg-gradient-to-r from-gray-500 to-gray-600',
    shadow: 'shadow-gray-500/25 hover:shadow-gray-500/40',
  },
  fighting: {
    main: 'orange-500',
    border: 'border-orange-500/40',
    background: 'bg-gradient-to-r from-orange-500 to-orange-600',
    shadow: 'shadow-orange-500/25 hover:shadow-orange-500/40',
  },
  psychic: {
    main: 'pink-500',
    border: 'border-pink-500/40',
    background: 'bg-gradient-to-r from-pink-500 to-pink-600',
    shadow: 'shadow-pink-500/25 hover:shadow-pink-500/40',
  },
  rock: {
    main: 'amber-700',
    border: 'border-amber-700/40',
    background: 'bg-gradient-to-r from-amber-700 to-amber-800',
    shadow: 'shadow-amber-700/25 hover:shadow-amber-700/40',
  },
  ground: {
    main: 'yellow-600',
    border: 'border-yellow-600/40',
    background: 'bg-gradient-to-r from-yellow-600 to-yellow-700',
    shadow: 'shadow-yellow-600/25 hover:shadow-yellow-600/40',
  },
  flying: {
    main: 'indigo-400',
    border: 'border-indigo-400/40',
    background: 'bg-gradient-to-r from-indigo-400 to-indigo-500',
    shadow: 'shadow-indigo-400/25 hover:shadow-indigo-400/40',
  },
  bug: {
    main: 'lime-500',
    border: 'border-lime-500/40',
    background: 'bg-gradient-to-r from-lime-500 to-lime-600',
    shadow: 'shadow-lime-500/25 hover:shadow-lime-500/40',
  },
  ghost: {
    main: 'purple-700',
    border: 'border-purple-700/40',
    background: 'bg-gradient-to-r from-purple-700 to-purple-800',
    shadow: 'shadow-purple-700/25 hover:shadow-purple-700/40',
  },
  steel: {
    main: 'slate-500',
    border: 'border-slate-500/40',
    background: 'bg-gradient-to-r from-slate-500 to-slate-600',
    shadow: 'shadow-slate-500/25 hover:shadow-slate-500/40',
  },
  dragon: {
    main: 'violet-600',
    border: 'border-violet-600/40',
    background: 'bg-gradient-to-r from-violet-600 to-violet-700',
    shadow: 'shadow-violet-600/25 hover:shadow-violet-600/40',
  },
  dark: {
    main: 'zinc-700',
    border: 'border-zinc-700/40',
    background: 'bg-gradient-to-r from-zinc-700 to-zinc-800',
    shadow: 'shadow-zinc-700/25 hover:shadow-zinc-700/40',
  },
  fairy: {
    main: 'pink-400',
    border: 'border-pink-400/40',
    background: 'bg-gradient-to-r from-pink-400 to-pink-500',
    shadow: 'shadow-pink-400/25 hover:shadow-pink-400/40',
  },
  ice: {
    main: 'cyan-400',
    border: 'border-cyan-400/40',
    background: 'bg-gradient-to-r from-cyan-400 to-cyan-500',
    shadow: 'shadow-cyan-400/25 hover:shadow-cyan-400/40',
  },
} as const

export type PokemonTypeName = keyof typeof POKEMON_TYPE_COLORS

export const getTypeColors = (type: string): TypeColorScheme => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()] || POKEMON_TYPE_COLORS.normal
}
