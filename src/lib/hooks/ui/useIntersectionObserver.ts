import { useEffect, useRef } from 'react'

interface UseIntersectionObserverOptions {
  onIntersect: () => void
  enabled?: boolean
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions) {
  const { onIntersect, enabled = true, threshold = 0.1, rootMargin = '0px' } = options

  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target || !enabled) return

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting) {
          onIntersect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
      observer.disconnect()
    }
  }, [onIntersect, enabled, threshold, rootMargin])

  return targetRef
}
