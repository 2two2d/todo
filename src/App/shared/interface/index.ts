import type { DetailedHTMLProps, HTMLProps } from 'react'

interface IPageProps {
  title: string
}

type IDetailedProps<T> = DetailedHTMLProps<HTMLProps<T>, T>

export type {
  IPageProps,
  IDetailedProps
}
