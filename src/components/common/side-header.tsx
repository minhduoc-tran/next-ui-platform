import React from 'react'

import CommandButton from '../ui/command-button'
import HeaderAction from './header-action'
import MainNav from './main-nav'
import MobileNav from './mobile-nav'

const SideHeader = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          <MobileNav />

          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <CommandButton />
            <HeaderAction />
          </div>
        </div>
      </div>
    </header>
  )
}

export default SideHeader
