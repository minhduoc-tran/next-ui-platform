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
            'hover:text-foreground/80 transition-colors',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/80'
          )}
        >
          Docs
        </Link>
      </nav>
    </div>
  )
}

export default MainNav
