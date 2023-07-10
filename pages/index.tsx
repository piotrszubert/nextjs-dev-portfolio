import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'
import LinkList from '@/components/linksList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
      <div className="max-w-3xl">
        <PageHero
          heading='Software developer, founder and investor.'
          subheading="I'm [Your Name], a software developer and entrepreneur with a passion for innovation and investment. As the founder and CEO of [Your Company Name], I strive to create groundbreaking technologies and opportunities that drive the future of technology and empower individuals to achieve their financial goals"
        >
          <LinkList
            nameVisible={false}
            paddingClass='pb-3'
            flexDirectionClass='flex-row'
          />
        </PageHero>
      </div>
      </main>
    </Layout>
  )
}
