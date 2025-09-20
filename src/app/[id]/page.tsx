import PokemonDetail from '@/components/pokemonDetail/PokemonDetail'
import { use } from 'react'


export default function PokemonDetailPage( ) {

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
        <PokemonDetail />
      </div>
    </div>
  )
}
