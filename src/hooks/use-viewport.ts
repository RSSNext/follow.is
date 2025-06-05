import type { ExtractAtomValue, getDefaultStore } from 'jotai'
import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { useCallback } from 'react'

import { viewportAtom } from '../atoms/viewport'

export function useViewport<T>(selector: (value: ExtractAtomValue<typeof viewportAtom>) => T): T {
  return useAtomValue(
    selectAtom(
      viewportAtom,
      useCallback(atomValue => selector(atomValue), []),

    ),
  )
}

type JotaiStore = ReturnType<typeof getDefaultStore>
export const getViewport = (store: JotaiStore) => store.get(viewportAtom)
