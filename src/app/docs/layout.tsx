import DocsNav from '@/components/common/docs-nav'
import { docsConfig } from '@/configs/docs'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="container-wrapper">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="border-grid z-39 fixed top-14 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
          <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
            <DocsNav config={docsConfig} />
          </div>
        </aside>
        {children}
      </div>
    </section>
  )
}
