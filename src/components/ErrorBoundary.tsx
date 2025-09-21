'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { AlertTriangle, RotateCcw, Home, Bug } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })

    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-red-700/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />

                <div className="relative bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full w-24 h-24 mx-auto flex items-center justify-center border-2 border-red-500/30">
                  <AlertTriangle className="w-12 h-12 text-red-400" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Oops! Something went wrong</h1>
                <p className="text-slate-300 text-lg">Looks like a wild Pokémon caused an error in the application</p>
              </div>

              {/* Error details for development */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <Card className="bg-slate-700/50 border-slate-600/50 text-left">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bug className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 font-medium text-sm">Error Details (Development)</span>
                    </div>
                    <pre className="text-xs text-slate-300 overflow-auto max-h-32 whitespace-pre-wrap">
                      {this.state.error.message}
                    </pre>
                  </CardContent>
                </Card>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={this.handleReset}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try again
                </Button>

                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-600/50 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Go home
                </Button>
              </div>


              <div className="absolute top-4 right-4 opacity-20">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>

          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-3/4 left-1/2 w-16 h-16 bg-purple-500/5 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
