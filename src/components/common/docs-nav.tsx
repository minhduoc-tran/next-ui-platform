'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { type DocsConfig } from '@/configs/docs'
import { cn } from '@/lib/utils'
import { SidebarNavItem } from '@/types/nav'

const DocsNav = ({ config }: { config: DocsConfig }) => {
  const pathname = usePathname()

  const items = config.sidebarNav
  return items?.length ? (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => {
        return (
          <div className="flex flex-col gap-1" key={index}>
            <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
              {item.title}
            </h4>
            {item?.items?.length && (
              <DocsNavItems items={item.items} pathname={pathname} />
            )}
          </div>
        )
      })}
    </div>
  ) : null
}

const DocsNavItems = ({
  items,
  pathname,
}: {
  items: SidebarNavItem[]
  pathname: string | null
}) => {
  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item, index) => {
        return item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'group flex h-8 w-full items-center rounded-lg px-2 font-normal text-foreground underline-offset-2 hover:bg-accent hover:text-accent-foreground',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname == item.href &&
                'bg-accent font-medium text-accent-foreground'
            )}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-black no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              'flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline',
              !item.disabled && 'cursor-not-allowed opacity-60'
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </div>
  ) : null
}

export default DocsNav
