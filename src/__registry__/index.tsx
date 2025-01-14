// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Index: Record<string, any> = {
  button: {
    name: 'button',
    description: '',
    registryDependencies: undefined,
    component: React.lazy(() => import('./ui/button.tsx')),
  },
  badge: {
    name: 'badge',
    description: '',
    registryDependencies: undefined,
    component: React.lazy(() => import('./ui/badge.tsx')),
  },
}
