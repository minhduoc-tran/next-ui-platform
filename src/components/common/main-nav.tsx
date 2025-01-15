'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/lib/utils'

import Logo from '../ui/logo'

const MainNav = () => {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Logo />
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/80'
          )}
        >
          Docs
        </Link>

        <Link
          href="/docs/components/badge"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/80'
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  )
}

export default MainNav
