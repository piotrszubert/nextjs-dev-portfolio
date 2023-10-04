import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'
import LinkList from '@/components/linksList'
import WorkCard from '@/components/workCard'
import NewsletterCard from '@/components/newsletterCard'

import { getSortedPostsData } from '@/lib/posts';
import PostsList from '@/components/postsList'
import Head from 'next/head'
import { SiteConfig, siteConfig } from '@/config/site'

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData(3);
  return {
    props: {
      allPostsData,
    },
  };
}


const inter = Inter({ subsets: ['latin'] })

// todo: use correct types
export default function Home({allPostsData}: any) {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Home</title>
      </Head>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
        <div className="max-w-3xl">
          <PageHero
            heading={siteConfig.pages.home.heading}
            subheading={siteConfig.pages.home.subheading}
          >
            <LinkList
              nameVisible={false}
              paddingClass='pb-3'
              flexDirectionClass='flex-row'
            />
          </PageHero>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <PostsList posts={allPostsData}/>
          </div>  
          <div className='space-y-6 md:ps-10'>
            {/* <NewsletterCard/> */}
            <WorkCard/>
          </div>
        </div>
      </main>
    </Layout>
  )
}
