import { Card, CardContent } from '../ui/card'
import { PokemonDetailGoBackButton } from './PokemonDetailGoBackButton'

export const PokemonDetailNotFound = () => {
  return (
    <>
      <PokemonDetailGoBackButton />
      <Card className="bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-700/30 backdrop-blur">
        <CardContent className="p-8 text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-300 mb-2">Pokémon no encontrado</h2>
          <p className="text-red-200/70">El Pokémon que buscas no existe o ha ocurrido un error.</p>
        </CardContent>
      </Card>
    </>
  )
}
