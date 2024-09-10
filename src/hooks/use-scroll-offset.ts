import * as React from 'react'

export function useScrollOffset() {
  const [scrollOffset, setScrollOffset] = React.useState(0)
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return scrollOffset
}
