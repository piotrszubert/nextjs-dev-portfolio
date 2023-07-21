import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'
import PostsList from '../../components/postsList'
import { getSortedPostsData } from '@/lib/posts'
import Head from 'next/head'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({allPostsData}: any) {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Blog</title>
      </Head>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
        <PageHero
          heading={siteConfig.pages.blog.heading}
          subheading={siteConfig.pages.blog.subheading}
        />
        <div>
          <PostsList posts={allPostsData}/>
        </div>  
      </main>
    </Layout>
  )
}
