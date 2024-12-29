import { CSSProperties, FC } from 'react'

import { WithClassName } from "@/shared/lib"

import { IconName, icons } from './icons'

export interface IconProps extends WithClassName{
  name: IconName
  size?: [width: number | string, height: number | string]
  style?: Omit<CSSProperties, 'width' | 'height' | 'minHeight' | 'minWidth'>
  fill?: string;
}

/**
 * Icon display and configuration component
 * @param name {IconName} {string}
 * @param className
 * @param size
 * @param style
 * @constructor
 */
export const Icon: FC<IconProps> = ({ name, className, size = [24, 24], style }) => {
  const { Component } = icons[name]

  return (
    <Component
      className={className}
      style={{
        ...(size ? {
          width: size[0],
          height: size[1],
          minHeight: size[1],
          minWidth: size[0],
        } : undefined),
        ...style,
      }}
    />
  )
}
