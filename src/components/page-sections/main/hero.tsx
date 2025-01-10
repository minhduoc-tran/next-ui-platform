import Link from 'next/link'
import React from 'react'

import { ArrowRight } from 'lucide-react'

import {
  HeroContentAction,
  HeroContentDescription,
  HeroContentHeading,
} from '@/components/common/hero-content'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/configs/site'

const Hero = () => {
  return (
    <div className="border-grid flex min-h-[calc(100vh-50px)] items-center justify-center border-b">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-center gap-1 py-8 md:py-10 lg:py-12">
          <HeroContentHeading className="lg:text-7xl">
            Build your component with {siteConfig.name}
          </HeroContentHeading>

          <HeroContentDescription className="text-center lg:mt-4 lg:text-xl">
            Beautifully designed components that you can copy and paste into
            your apps. Made with Tailwind CSS. Open source.
          </HeroContentDescription>

          <HeroContentAction>
            <Button size="sm" className="px-4">
              <Link href="/docs">Get Started</Link>
              <ArrowRight />
            </Button>
          </HeroContentAction>
        </div>
      </div>
    </div>
  )
}

export default Hero
