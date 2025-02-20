import React from 'react'

interface ReaderControlsProps {
  title: string
  onNext: () => void
  onPrev: () => void
  onSettings: () => void
}

export const ReaderControls: React.FC<ReaderControlsProps> = ({
  title,
  onNext,
  onPrev,
  onSettings,
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={onPrev}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          ← Prev
        </button>
        
        <h1 className="text-lg font-medium truncate mx-4">{title}</h1>
        
        <div className="flex items-center gap-2">
          <button
            onClick={onSettings}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            ⚙️ Settings
          </button>
          <button
            onClick={onNext}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}