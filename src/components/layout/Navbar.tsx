'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

const Navbar = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/Yaiza16', '_blank', 'noopener,noreferrer')
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-b border-slate-700/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full border-2 border-slate-800"></div>
              </div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-200">PokéApp</h1>
              <p className="text-xs text-slate-400">Gotta catch 'em all</p>
            </div>
          </div>

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
