'use cl'

import Link from 'next/link'
import React from 'react'

import { Github } from 'lucide-react'

import { siteConfig } from '@/configs/site'

import { Button } from '../ui/button'
import ToggleTheme from '../ui/toggle-theme'

const HeaderAction = () => {
  return (
    <div className="flex items-center gap-0.5">
      <Link href={siteConfig.github_url} target="_blank">
        <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
          <Github className="h-4 w-4" />
        </Button>
      </Link>
      <ToggleTheme />
    </div>
  )
}

export default HeaderAction
