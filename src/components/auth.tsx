'use client'

import { getProviders, signIn, signOut, useSession } from '@hono/auth-js/react'
import useSWR from 'swr'

import { env } from '@/env'
import { cn } from '@/lib/utils'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

const providerIcons: Record<string, string> = {
  google: 'i-simple-icons-google',
  github: 'i-simple-icons-github',
}

export function AuthButton({ className }: { className?: string }) {
  const { data: session, status } = useSession()
  const { data } = useSWR('get-providers', getProviders)

  if (session && status === 'authenticated') {
    return (
      <section className={cn('flex gap-4 items-center', className)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Avatar>
                <AvatarImage src={session.user?.image ?? ''} />
                <AvatarFallback>
                  {session.user?.name?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {session.user?.name} ({session.user?.email})
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button variant="outline" onClick={() => void signOut()}>
          Sign out
        </Button>
      </section>
    )
  }

  if (data && status === 'unauthenticated') {
    return (
      <section className={cn('flex gap-4 items-center', className)}>
        {Object.entries(data || {}).map(([provider, providerData]) => {
          return (
            <Button
              className="flex items-center gap-2"
              variant="outline"
              key={provider}
              onClick={() => {
                void signIn(provider as any, {
                  callbackUrl: `${env.NEXT_PUBLIC_WEB_URL}/airdrop`,
                })
              }}
            >
              <i className={cn(providerIcons[provider], 'size-4')} />
              Sign in with
              {' '}
              {providerData.name}
            </Button>
          )
        })}
      </section>
    )
  }

  return null
}
