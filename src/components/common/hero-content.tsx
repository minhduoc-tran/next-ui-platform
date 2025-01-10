import { cn } from '@/lib/utils'

const HeroContentHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        'md:text-4xt text-center text-3xl font-bold leading-tight tracking-tighter lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  )
}

const HeroContentSubHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'mt-2 max-w-2xl text-xl font-light leading-tight tracking-tighter',
        className
      )}
      {...props}
    />
  )
}

const HeroContentDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn('max-w-2xl text-lg font-light text-foreground', className)}
      {...props}
    />
  )
}

const HeroContentAction = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-2 pt-2',
        className
      )}
      {...props}
    />
  )
}
export {
  HeroContentHeading,
  HeroContentDescription,
  HeroContentAction,
  HeroContentSubHeading,
}
