// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Index: Record<string, any> = {
  accordion: {
    name: 'accordion',
    description: '',
    registryDependencies: undefined,
    component: React.lazy(() => import('./ui/accordion')),
    files: [
      {
        path: 'ui/accordion.tsx',
      },
    ],
  },
}
