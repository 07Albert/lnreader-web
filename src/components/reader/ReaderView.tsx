import React, { useEffect, useRef } from 'react';
import { useReaderSettings } from '@/hooks/useReader';

interface ReaderViewProps {
  content: string;
  onProgress: (progress: number) => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  content,
  onProgress,
  onNavigate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { settings } = useReaderSettings();

  const readerStyles = {
    fontSize: `${settings.fontSize}px`,
    lineHeight: settings.lineHeight,
    fontFamily: settings.fontFamily,
    padding: `${settings.padding}px`,
    color: settings.textColor,
    backgroundColor: settings.theme,
  };

  return (
    <div 
      ref={containerRef}
      className="reader-container"
      style={readerStyles}
    >
      <div 
        id="chapter-content"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
};