import Link from 'next/link'
import React from 'react'

import { siteConfig } from '@/configs/site'

const Logo = () => {
  return (
    <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-6 w-6"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        ></line>
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        ></line>
      </svg>
      <span className="hidden font-bold lg:inline-block">
        {siteConfig.name}
      </span>
    </Link>
  )
}

export default Logo
