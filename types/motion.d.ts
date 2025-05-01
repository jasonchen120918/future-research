import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MotionProps as _MotionProps } from 'framer-motion'

declare module 'framer-motion' {
  export interface MotionProps<T = any> extends _MotionProps {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
  }

  export interface HTMLMotionComponents {
    div: ForwardRefExoticComponent<PropsWithoutRef<MotionProps<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>> & RefAttributes<HTMLDivElement>>
    p: ForwardRefExoticComponent<PropsWithoutRef<MotionProps<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>> & RefAttributes<HTMLParagraphElement>>
    h2: ForwardRefExoticComponent<PropsWithoutRef<MotionProps<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>> & RefAttributes<HTMLHeadingElement>>
  }

  export const motion: HTMLMotionComponents
} 