import type { DetailedHTMLProps, HTMLProps } from 'react'

interface IPageProps {
  title: string
}

interface IClassName {
  className?: string
}

type IDetailedProps<T> = DetailedHTMLProps<HTMLProps<T>, T>

type NotOfType<T, E> = T extends E ? never : T

export type {
  IPageProps,
  IClassName,
  IDetailedProps,
  NotOfType
}
