import { useEffect, useState } from 'react'

interface AnimatedStatProps {
  label: string
  value: string
  delay?: number
  icon?: React.ReactNode
  type?: 'default' | 'error'
}

const AnimatedStat = ({ label, value, delay = 0, icon = null, type = 'default' }: AnimatedStatProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const isError = type === 'error'

  return (
    <div
      className={`relative transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } rounded-lg border p-3 text-center backdrop-blur-sm ${
        isError ? 'border-red-500/50 bg-red-900/20 shadow-red-500/10' : 'border-slate-600/50 bg-slate-800/30'
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-wide flex items-center justify-center gap-1 ${
          isError ? 'text-red-400' : 'text-slate-400'
        }`}
      >
        {icon && <span className="text-sm">{icon}</span>}
        {label}
      </div>
      <div className={`text-lg font-bold ${isError ? 'text-red-300' : 'text-slate-100'}`}>{value}</div>
    </div>
  )
}

export default AnimatedStat
