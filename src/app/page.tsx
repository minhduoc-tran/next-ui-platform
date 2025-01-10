import ExistingTask from '@/components/page-sections/main/existing-stack'
import Hero from '@/components/page-sections/main/hero'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <ExistingTask />
    </div>
  )
}
