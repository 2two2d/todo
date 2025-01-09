import { useEffect, useRef } from 'react'

import type { RefObject } from 'react'

const useHandleClickOutside = (callback: () => void): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback])

  return ref
}

export {
  useHandleClickOutside
}
