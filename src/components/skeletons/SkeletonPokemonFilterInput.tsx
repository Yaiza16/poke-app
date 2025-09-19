import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { cn } from '@/lib/utils'

interface SelectSkeletonProps {
  className?: string
}

const SkeletonPokemonFilterInput = ({ className }: SelectSkeletonProps) => {
  return (
    <div className={cn('w-full sm:w-[140px] glass border-border', className)}>
      {/* SelectTrigger skeleton */}
      <div className="flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
      </div>
    </div>
  )
}

export default SkeletonPokemonFilterInput
