'use client'

import useSWR from 'swr'

import { getProviders, loginHandler, signOut, useSession } from '@/lib/auth'
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
  apple: 'i-simple-icons-apple',
}

export function AuthButton({ className }: { className?: string }) {
  const { data: session, isPending, error } = useSession()
  const { data: providers } = useSWR('get-providers', () => getProviders())

  if (session && !isPending && !error) {
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

  if (providers?.data && !session && !isPending && !error) {
    return (
      <section className={cn('flex flex-col sm:flex-row gap-4 items-center', className)}>
        {Object.entries(providers.data).map(([provider, providerData]) => {
          return (
            <Button
              className="flex items-center gap-2"
              variant="outline"
              key={provider}
              onClick={() => {
                void loginHandler(provider)
              }}
            >
              <i className={cn(providerIcons[provider], 'size-4')} />
              Sign in with
              {' '}
              {(providerData as any).name}
            </Button>
          )
        })}
      </section>
    )
  }

  return null
}
