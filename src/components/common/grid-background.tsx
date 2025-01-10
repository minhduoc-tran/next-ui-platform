import React from 'react'

import { cn } from '@/lib/utils'

const GridBackground = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black',
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {children}
    </div>
  )
}

export default GridBackground