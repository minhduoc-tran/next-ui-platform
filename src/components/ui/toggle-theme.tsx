'use client'

import React from 'react'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from './button'

const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const handleSetTheme = React.useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  return (
    <Button
      variant="ghost"
      className="group/toggle h-8 w-8 px-0"
      onClick={handleSetTheme}
    >
      <Sun className="hidden [html.dark_&]:block" />
      <Moon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ToggleTheme
