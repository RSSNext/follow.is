import { motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-red-300 to-orange-300 dark:from-red-500 dark:to-orange-500`,
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
