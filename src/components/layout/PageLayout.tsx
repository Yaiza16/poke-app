import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  constrained?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '', constrained = true }) => {
  const containerClasses = constrained ? 'max-w-6xl mx-auto' : 'w-full'

  return (
    <div className={`min-h-screen pt-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className={containerClasses}>{children}</div>
    </div>
  )
}

export default PageLayout
