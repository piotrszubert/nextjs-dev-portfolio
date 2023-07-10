import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
      <PageHero
        heading='Writing on software design, company building, and the investing.'
        subheading='All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.'
      />
      </main>
    </Layout>
  )
}
