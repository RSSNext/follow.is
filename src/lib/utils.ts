import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPlatform(): string {
  if (typeof window === 'undefined') {
    return 'Unknown'
  }
  const userAgent = navigator.userAgent.toLowerCase()

  if (userAgent.includes('win'))
    return 'Windows'
  if (userAgent.includes('mac'))
    return 'macOS'
  if (userAgent.includes('linux'))
    return 'Linux'
  return 'Unknown'
}
