import Link from 'next/link'
import React from 'react'

import { ArrowRight, Github } from 'lucide-react'

import GridBackground from '@/components/common/grid-background'
import { Button } from '@/components/ui/button'
import TechPanel from '@/components/ui/tech-panel'
import { siteConfig } from '@/configs/site'

const ExistingTask = () => {
  return (
    <GridBackground>
      <div className="flex w-full flex-col gap-y-2 bg-background px-10">
        <TechPanel />
        <div className="mt-2 flex w-full items-center justify-center gap-x-2">
          <Button>
            <Link href="/docs">View Documentation</Link>
            <ArrowRight />
          </Button>
          <Button variant="outline">
            <Github />
            <Link href={siteConfig.github_url}>View on Github</Link>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </GridBackground>
  )
}

export default ExistingTask