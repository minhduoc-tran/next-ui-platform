import { MainNavItem, SidebarNavItem } from '@/types/nav'

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Docs',
      href: '/',
    },
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Components',
      href: '/docs/components/accordion',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
          items: [],
        },
      ],
    },
  ],
}
