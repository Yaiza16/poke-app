import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { generatePokemonMetadata } from '@/lib/utilities/metadata'
import PageLayout from '@/components/layout/PageLayout'
import { PokemonDetailPageSkeleton } from '@/components/skeletons'

const PokemonDetail = dynamic(() => import('@/components/pokemonDetail/PokemonDetail'), {
  loading: () => <PokemonDetailPageSkeleton />,
})

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PokemonDetailPageProps): Promise<Metadata> {
  const { id } = await params
  return generatePokemonMetadata(id)
}

export default function PokemonDetailPage() {
  return (
    <PageLayout>
      <PokemonDetail />
    </PageLayout>
  )
}
