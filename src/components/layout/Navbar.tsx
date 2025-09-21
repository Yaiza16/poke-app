'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }

  const handleGithubClick = () => {
    window.open('https://github.com/Yaiza16', '_blank', 'noopener,noreferrer')
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-b border-slate-700/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-6 h-6 bg-white rounded-full border-2 border-slate-800"></div>
              </div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-full animate-pulse group-hover:animate-none group-hover:from-blue-500/30 group-hover:to-red-500/30 transition-all duration-300"></div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300">
                PokéApp
              </h1>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Gotta catch &apos;em all
              </p>
            </div>
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleGithubClick}
            className="text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
