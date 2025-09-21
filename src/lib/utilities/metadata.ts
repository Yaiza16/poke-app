import type { Metadata } from 'next'
import { capitalize } from '@/lib/utilities'


interface PokemonApiResponse {
  name: string
  id: number
}


export const siteMetadata: Metadata = {
  title: "PokéApp - Gotta catch 'em all",
  description: 'Explore and discover all Pokémon with filters, search, and detailed information',
  keywords: ['pokemon', 'pokedex', 'pokemon app', 'pokemon search', 'pokemon evolution', 'pokemon types'],
  authors: [{ name: 'Yaiza Vallejo' }],
  openGraph: {
    title: 'PokéApp - Complete Pokémon Database',
    description:
      'Discover all Pokémon with advanced search, filters, and detailed information including stats and evolution chains.',
    type: 'website',
    siteName: 'PokéApp',
  },
}

export async function generatePokemonMetadata(pokemonId: string): Promise<Metadata> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon data: ${response.status}`)
    }

    const pokemon: PokemonApiResponse = await response.json()

    const pokemonName = capitalize(pokemon.name)

    return {
      title: `${pokemonName} | PokéApp`,
      description: `Discover detailed information and stats for ${pokemonName}. View abilities, moves, types, and evolution chain.`,
      openGraph: {
        title: `${pokemonName} - Pokemon Details`,
        description: `Explore ${pokemonName}'s stats, abilities, and evolution chain in PokéApp.`,
        type: 'website',
      },
    }
  } catch (error) {
    console.error('Error generating Pokemon metadata:', error)

    return {
      title: 'Pokemon no encontrado | PokéApp',
      description: 'El Pokemon que buscas no existe o no se pudo cargar. Intenta con otro Pokemon.',
      openGraph: {
        title: 'Pokemon no encontrado',
        description: 'El Pokemon solicitado no se pudo encontrar.',
        type: 'website',
      },
    }
  }
}

export const defaultPokemonMetadata: Metadata = {
  title: 'Pokemon Details | PokéApp',
  description: 'Explore detailed information about Pokemon including stats, abilities, and evolution chains.',
}
