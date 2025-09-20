import { Card, CardContent } from '../ui/card'

import { ReactNode } from 'react'

interface PokemonDetailContainerCardProps {
  children: ReactNode
}

export const PokemonDetailContainerCard = ({ children }: PokemonDetailContainerCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/50 border-slate-700/50 backdrop-blur">
      <CardContent className="p-8">{children}</CardContent>
    </Card>
  )
}
