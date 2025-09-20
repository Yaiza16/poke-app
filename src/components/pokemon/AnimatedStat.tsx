import { useEffect, useState } from 'react'

interface AnimatedStatProps {
  label: string
  value: string
  delay?: number
  icon?: string
}

const AnimatedStat = ({ label, value, delay = 0, icon = '' }: AnimatedStatProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } rounded-lg border border-slate-600/50 bg-slate-800/30 p-3 text-center backdrop-blur-sm`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 flex items-center justify-center gap-1">
        {icon && <span>{icon}</span>}
        {label}
      </div>
      <div className="text-lg font-bold text-slate-100">{value}</div>
    </div>
  )
}

export default AnimatedStat
