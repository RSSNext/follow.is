'use client'

import { createContext, createElement } from 'react'

export const GitHubStarContext = createContext<number>(0)

export function GitHubStarProvider({
  stars,
  children,
}: {
  stars: number
  children: React.ReactNode
}) {
  return createElement(GitHubStarContext.Provider, { value: stars }, children)
}
