import React from 'react'
import LoadingSpinner from './LoadingSpinner'

interface LoadingScreenProps {
  fullScreen?: boolean
  message?: string
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  fullScreen = true,
  message = 'Loading...'
}) => {
  return (
    <div className={`
      flex flex-col items-center justify-center
      ${fullScreen ? 'fixed inset-0 bg-white/80 backdrop-blur-sm' : 'w-full h-full min-h-[200px]'}
      z-50
    `}>
      <LoadingSpinner size="lg" color="primary" />
      {message && (
        <p className="mt-4 text-gray-600 text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  )
}

export default LoadingScreen 