// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Index: Record<string, any> = {
  badge: {
    name: 'badge',
    description: '',
    registryDependencies: undefined,
    component: React.lazy(() => import('./ui/badge.tsx')),
  },
  button: {
    name: 'button',
    description: '',
    registryDependencies: undefined,
    component: React.lazy(() => import('./ui/button.tsx')),
  },
  input: {
    name: 'input',
    description: '',
    registryDependencies: undefined,
    component: React.lazy(() => import('./ui/input.tsx')),
  },
}
