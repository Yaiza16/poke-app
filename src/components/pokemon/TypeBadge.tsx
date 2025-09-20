import { getTypeColors } from '@/lib/constants/pokemon-type-colors'
import { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'

const TypeBadge = ({ type, delay = 0 }: { type: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])


  return (
    <Badge
      className={`transform transition-all duration-500 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      } ${getTypeColors(type).background} text-white shadow-lg hover:scale-110 capitalize`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {type}
    </Badge>
  )
}

export default TypeBadge
