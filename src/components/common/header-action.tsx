'use cl'

import Link from 'next/link'
import React from 'react'

import { Github } from 'lucide-react'

import { sideConfig } from '@/configs/siteConfig'

import { Button } from '../ui/button'
import ToggleTheme from '../ui/toggle-theme'

const HeaderAction = () => {
  return (
    <div className="flex items-center gap-0.5">
      <Link href={sideConfig.github_url} target="_blank">
        <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
          <Github className="h-4 w-4" />
        </Button>
      </Link>
      <ToggleTheme />
    </div>
  )
}

export default HeaderAction
