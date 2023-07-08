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
        heading='Software developer, founder and investor.'
        subheading="I'm [Your Name], a software developer and entrepreneur with a passion for innovation and investment. As the founder and CEO of [Your Company Name], I strive to create groundbreaking technologies and opportunities that drive the future of technology and empower individuals to achieve their financial goals"
      />
      <Button variant={'outline'}>
        button
      </Button>
      </main>
    </Layout>
  )
}
