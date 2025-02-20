import React, { useState } from 'react'
import { ReaderView } from './ReaderView'
import { ReaderControls } from './ReaderControls'
import { ReaderSettings } from './ReaderSettings'

interface ReaderContainerProps {
  content: string
  chapterInfo: {
    title: string
    novelTitle: string
    chapterNumber: number
  }
  onNavigate: (direction: 'next' | 'prev') => void
}

export const ReaderContainer: React.FC<ReaderContainerProps> = ({
  content,
  chapterInfo,
  onNavigate,
}) => {
  const [showControls, setShowControls] = useState(true)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="relative h-screen w-full bg-white dark:bg-gray-900">
      <ReaderView
        content={content}
        onTap={() => setShowControls(!showControls)}
        onProgress={(progress) => console.log('Reading progress:', progress)}
      />
      
      {showControls && (
        <ReaderControls
          title={chapterInfo.title}
          onNext={() => onNavigate('next')}
          onPrev={() => onNavigate('prev')}
          onSettings={() => setShowSettings(true)}
        />
      )}

      {showSettings && (
        <ReaderSettings
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  )
}