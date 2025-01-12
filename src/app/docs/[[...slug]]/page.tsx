import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { allDocs } from 'contentlayer/generated'
import { ChevronRight } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Mdx } from '@/components/common/mdx-components'
import DocsPaper from '@/components/common/paper'
import { siteConfig } from '@/configs/site'
import { absoluteUrl, cn } from '@/lib/utils'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: '@shadcn',
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocsPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  return (
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">{doc.title}</div>
        </div>

        <div className="space-y-2">
          <h1 className={cn('scroll-m-20 text-3xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPaper doc={doc} />
      </div>
    </div>
  )
}
