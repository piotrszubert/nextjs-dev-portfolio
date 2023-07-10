import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'

const inter = Inter({ subsets: ['latin'] })

export default function Uses() {
  return (
    <Layout>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
      <PageHero
        heading="Software I use, gadgets I love, and other things I recommend."
        subheading="I often get asked about the tools I use to build software, stay productive, or even the things I buy to trick myself into feeling productive when I'm actually procrastinating. So, here's an extensive list of my favorite stuff"
      />
      </main>
    </Layout>
  )
}
