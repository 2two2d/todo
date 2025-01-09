import { useEffect } from 'react'

export const useSetPageTitle = (title: string): void => {
  useEffect(() => {
    document.title = title
  }, [])
}
