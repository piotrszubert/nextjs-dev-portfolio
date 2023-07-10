import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <Layout>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
      <PageHero
        heading="Harmonizing design and functionality in my web development projects."
        subheading="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      />
      </main>
    </Layout>
  )
}
