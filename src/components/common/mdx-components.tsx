import { useMDXComponent } from 'next-contentlayer2/hooks'

import { cn } from '@/lib/utils'
import { NpmCommands, TouchCommands } from '@/types/unist'

import { Alert } from '../ui/alert'
import { Callout } from './callout'
import { CodeBlockWrapper } from './code-block-wrapper'
import ComponentReview from './component-preview'
import {
  CopyButton,
  CopyNpmCommandButton,
  CopyTouchCommandButton,
  copyToClipboardWithMeta,
} from './copy-button'

const components = {
  Callout,
  Alert,
  ComponentReview,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'font-heading mt-2 scroll-m-20 text-4xl font-bold',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn(
          'relative w-full overflow-hidden border-none text-sm',
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('last:border-b-none m-0 border-b', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    __src__,
    __event__,
    __copyId__,
    __windows__,
    __unix__,
    __bunCommand__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __copyId__?: string
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
    __event__?:
      | 'copy_npm_command'
      | 'copy_touch_command'
      | 'copy_usage_code'
      | 'copy_source_code'
  } & NpmCommands &
    TouchCommands) => {
    if (__copyId__ && __rawString__) {
      return (
        <div
          id={`source-${__copyId__}`}
          onClick={() => {
            copyToClipboardWithMeta(__rawString__)
          }}
        />
      )
    }

    return (
      <>
        <pre
          className={cn(
            'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg bg-zinc-800 py-4 [&_code]:bg-transparent',
            className
          )}
          {...props}
        />

        {__rawString__ && !__windows__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            event={__event__}
            className={cn('absolute right-4 top-4', __withMeta__ && 'top-16')}
          />
        )}

        {__windows__ && __unix__ && (
          <CopyTouchCommandButton
            commands={{ __windows__, __unix__ }}
            className="absolute right-4 top-4"
          />
        )}

        {__npmCommand__ &&
          __yarnCommand__ &&
          __pnpmCommand__ &&
          __bunCommand__ && (
            <CopyNpmCommandButton
              commands={{
                __npmCommand__,
                __yarnCommand__,
                __pnpmCommand__,
                __bunCommand__,
              }}
              className={cn('absolute right-4 top-4', __withMeta__ && 'top-16')}
            />
          )}
      </>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded bg-zinc-800 px-2 py-[0.2rem] font-mono text-sm text-white',
        className
      )}
      {...props}
    />
  ),
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className="rounded-md border" {...props} />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
