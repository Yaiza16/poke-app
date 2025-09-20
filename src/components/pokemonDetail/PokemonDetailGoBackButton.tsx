import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const PokemonDetailGoBackButton = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-800/80 to-slate-900/80 hover:from-slate-700/80 hover:to-slate-800/80 border border-slate-600/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 mb-6 group text-white hover:text-slate-200"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 text-slate-300 group-hover:text-white" />
      <span className="font-medium">Volver</span>
    </Link>
  )
}

