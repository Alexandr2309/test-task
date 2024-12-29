import Marker from './bx-map.svg?react'

export const icons = {
  marker: {Component: Marker},
} as const

export type IconName = keyof typeof icons