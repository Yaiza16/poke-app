import PokemonList from '@/components/PokemonList'
import { PokemonService } from '@/lib/api'

export default async function Home() {
  const list = await PokemonService.getPokemonList({ limit: 5 })
  console.log(list) // Primeros 5 Pokemon
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <PokemonList />
      </main>
    </div>
  )
}
