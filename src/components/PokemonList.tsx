'use client'

import { usePokemonList } from '@/lib/queries'
import React, { useEffect, useRef } from 'react'

const PokemonList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = usePokemonList({ limit: 20 })

  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          console.log('🚀 Loading more Pokemon...')
          fetchNextPage()
        }
      },
      { threshold: 0.1 }
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  if (isLoading) <div className="p-8 text-center">Cargando Pokemon...</div>

  if (error)
    <div className="p-8 text-center text-red-500">Error: {error.message}</div>

  const allPokemon = data?.pages.flatMap(page => page.pokemon) || []
  const count = data?.pages[0]?.count || 0

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Pokemon List ({allPokemon.length} cargados de {count})
      </h2>

      <div className="space-y-2">
        {allPokemon.map((pokemon, index) => (
          <div
            key={pokemon.name}
            className="p-2 border rounded hover:bg-gray-50"
          >
            #{index + 1} - {pokemon.name}
          </div>
        ))}
      </div>

      {isFetchingNextPage && (
        <div className="p-4 text-center text-blue-500">
          Cargando más Pokemon...
        </div>
      )}

      <div
        ref={loadMoreRef}
        className="h-10 w-full flex items-center justify-center text-gray-400"
      >
        {!hasNextPage && '¡Todos cargados!'}
      </div>
    </div>
  )
}

export default PokemonList
