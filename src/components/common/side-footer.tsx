import Link from 'next/link'
import React from 'react'

import { siteConfig } from '@/configs/site'

const SideFooter = () => {
  return (
    <footer className="border-grid border-t px-6 md:px-0">
      <div className="wrapper-container">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            {siteConfig.name} create by <strong>Tran-Duoc</strong>. The source
            code is available on{' '}
            <Link href={siteConfig.github_url} className="font-bold">
              Github
            </Link>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SideFooter
