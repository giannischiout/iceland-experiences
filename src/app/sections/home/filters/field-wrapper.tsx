import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export const FieldWrapper = (
  {
    label,
    isPrimary = false,
    children,
  }: {
    label: string
    isPrimary?: boolean
    children: ReactNode
  }) => {
  return (
    <div className="flex flex-col gap-1 ">
      <span className={cn(
        'text-md',
        isPrimary ? 'text-primary font-semibold' : 'text-gray-500',
      )}>
        {label}
      </span>
      {children}
    </div>
  )
}