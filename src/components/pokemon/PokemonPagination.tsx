import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { getVisiblePages } from '@/lib/utilities/pagination-utils'

interface PokemonPaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  onPageChange: (page: number) => void
}
const PokemonPagination = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  isFirstPage,
  isLastPage,
  onPageChange,
}: PokemonPaginationProps) => {
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              onClick={() => onPageChange(1)}
              className={`cursor-pointer ${isFirstPage ? 'pointer-events-none opacity-50' : ''}`}
            >
              <ChevronsLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage - 1)}
              className={!hasPreviousPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>

          {getVisiblePages(currentPage, totalPages).map(pageNumber => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => onPageChange(pageNumber)}
                isActive={pageNumber === currentPage}
                className="cursor-pointer"
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              className={!hasNextPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              onClick={() => onPageChange(totalPages)}
              className={`cursor-pointer ${isLastPage ? 'pointer-events-none opacity-50' : ''}`}
            >
              <ChevronsRight className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PokemonPagination
