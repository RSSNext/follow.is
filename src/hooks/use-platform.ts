'use client'

import { useEffect, useState } from 'react'

import type { OS } from '@/constants/release'

export function usePlatform() {
  const [platform, setPlatform] = useState<OS | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detectPlatform = (): OS | undefined => {
      if (typeof window === 'undefined')
        return undefined

      const { userAgent } = window.navigator
      const { platform } = window.navigator

      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'iOS'
      }

      // Android detection
      if (/Android/.test(userAgent)) {
        return 'Android'
      }

      // macOS detection
      if (/Mac|macOS/.test(platform) || /Mac/.test(userAgent)) {
        return 'macOS'
      }

      // Windows detection
      if (/Win/.test(platform) || /Windows/.test(userAgent)) {
        return 'Windows'
      }

      // Linux detection
      if (/Linux/.test(platform) && !/Android/.test(userAgent)) {
        return 'Linux'
      }

      return undefined
    }

    const detectedPlatform = detectPlatform()
    setPlatform(detectedPlatform)
    setIsLoading(false)
  }, [])

  return { platform, isLoading }
}
