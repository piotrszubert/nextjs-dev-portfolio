import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'
import ProjectsList from '@/components/projectsList'
import Head from 'next/head'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Projects</title>
      </Head>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
        <PageHero
          heading={siteConfig.pages.projects.heading}
          subheading={siteConfig.pages.projects.subheading}
        />
        <ProjectsList/>
      </main>
    </Layout>
  )
}
