import PokemonDetail from '@/components/pokemonDetail/PokemonDetail'
import { capitalize } from '@/lib/utilities'
import type { Metadata } from 'next'

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PokemonDetailPageProps): Promise<Metadata> {
  try {
   const { id } = await params
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch Pokémon data')
    }
    const pokemon = await res.json()
    return {
      title: `${capitalize(pokemon.name)} | PokéApp`,
      description: `Details and stats for ${capitalize(pokemon.name)}.`,
    }
  } catch (error) {
    console.error(error)
    return {
      title: 'Pokemon no encontrado',
      description: 'El Pokemon que buscas no existe o no se pudo cargar.',
    }
  }
}

export default function PokemonDetailPage() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <PokemonDetail />
      </div>
    </div>
  )
}
