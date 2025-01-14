'use client'

import React from 'react'

import { Loader } from 'lucide-react'

import { Index } from '@/__registry__'
import { cn } from '@/lib/utils'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  align?: 'center' | 'start' | 'end'
}

const ComponentReview = ({
  name,
  className,
  align = 'center',
  ...props
}: ComponentPreviewProps) => {
  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component

    console.log(Component)

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{' '}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{' '}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name])

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <div className="relative rounded-md border">
        <div
          className={cn(
            'preview flex min-h-[350px] w-full justify-center p-10',
            {
              'items-center': align === 'center',
              'items-start': align === 'start',
              'items-end': align === 'end',
            }
          )}
        >
          <React.Suspense
            fallback={
              <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                <Loader className='className="mr-2 animate-spin" h-4 w-4' />
                Loading...
              </div>
            }
          >
            {Preview}
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}

export default ComponentReview
