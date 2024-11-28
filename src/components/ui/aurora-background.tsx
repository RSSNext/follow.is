'use client'
import type { ReactNode } from 'react'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

export function AuroraBackground({
  className,
  children,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="fixed inset-0 -z-10 dark:bg-[#0f131c]">
          <div id="glow" className="absolute inset-0 opacity-30 bg-linear-to-br from-[#f5d7a620] to-[#f5d7a6] dark:from-[#1b293f20] dark:to-[#000]" />
          <div id="glow-bounce" className="absolute inset-0 opacity-10 bg-linear-to-t from-[#f5d7a6] to-transparent to-20% dark:from-[#000]" />
        </div>
      </div>
      {children}
    </div>
  )
}
