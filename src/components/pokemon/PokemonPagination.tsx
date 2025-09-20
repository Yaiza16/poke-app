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
      <Pagination className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-700/50">
        <PaginationContent className="gap-2">
          <PaginationItem>
            <PaginationLink
              onClick={() => onPageChange(1)}
              className={`cursor-pointer transition-all duration-300 bg-slate-700/50 text-slate-200 hover:bg-slate-600/60 hover:text-white border border-slate-600/50 hover:border-slate-500 ${
                isFirstPage ? 'pointer-events-none opacity-50' : 'hover:shadow-lg hover:scale-105'
              }`}
            >
              <ChevronsLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage - 1)}
              className={`transition-all duration-300 bg-slate-700/50 text-slate-200 hover:bg-slate-600/60 hover:text-white border border-slate-600/50 hover:border-slate-500 ${
                !hasPreviousPage ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:shadow-lg hover:scale-105'
              }`}
            />
          </PaginationItem>

          {getVisiblePages(currentPage, totalPages).map(pageNumber => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => onPageChange(pageNumber)}
                isActive={pageNumber === currentPage}
                className={`cursor-pointer transition-all duration-300 border hover:scale-105 hover:shadow-lg ${
                  pageNumber === currentPage
                    ? 'bg-white text-slate-900 border-slate-300 shadow-lg font-semibold'
                    : 'bg-slate-700/50 text-slate-200 hover:bg-slate-600/60 hover:text-white border-slate-600/50 hover:border-slate-500'
                }`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              className={`transition-all duration-300 bg-slate-700/50 text-slate-200 hover:bg-slate-600/60 hover:text-white border border-slate-600/50 hover:border-slate-500 ${
                !hasNextPage ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:shadow-lg hover:scale-105'
              }`}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              onClick={() => onPageChange(totalPages)}
              className={`cursor-pointer transition-all duration-300 bg-slate-700/50 text-slate-200 hover:bg-slate-600/60 hover:text-white border border-slate-600/50 hover:border-slate-500 ${
                isLastPage ? 'pointer-events-none opacity-50' : 'hover:shadow-lg hover:scale-105'
              }`}
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
