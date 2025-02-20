import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ReaderSettings {
  fontSize: number
  lineHeight: number
  padding: number
  theme: string
  fontFamily: string
  textColor: string
}

interface ReaderSettingsStore {
  settings: ReaderSettings
  updateSettings: (settings: Partial<ReaderSettings>) => void
}

const initialSettings: ReaderSettings = {
  fontSize: 18,
  lineHeight: 1.5,
  padding: 16,
  theme: '#ffffff',
  fontFamily: 'Inter',
  textColor: '#000000',
}

export const useReaderSettings = create<ReaderSettingsStore>()(
  persist(
    (set) => ({
      settings: initialSettings,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: 'reader-settings',
    }
  )
)