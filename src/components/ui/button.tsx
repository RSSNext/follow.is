import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        'default':
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        'destructive':
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        'outline':
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        'secondary':
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        'ghost': 'hover:bg-accent hover:text-accent-foreground',
        'link': 'text-primary underline-offset-4 hover:underline',
        // Vercel-style variants
        'gradient':
          'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:from-orange-600 hover:to-red-600 hover:shadow-xl border-0',
        'gradient-outline':
          'border-2 border-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-border text-transparent bg-clip-text hover:text-white hover:bg-clip-padding hover:from-orange-600 hover:to-red-600',
        'glass':
          'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white/90 dark:hover:bg-gray-900/90 shadow-lg hover:shadow-xl',
        'minimal':
          'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        xl: 'h-12 rounded-lg px-10 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({ ref, className, variant, size, asChild = false, ...props }: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
}
Button.displayName = 'Button'

export { Button, buttonVariants }
