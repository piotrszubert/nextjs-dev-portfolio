import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'
import PostsList from '../../components/postsList'
import { getSortedPostsData } from '@/lib/posts'
import Head from 'next/head'

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
          heading='Writing on software design, company building, and the investing.'
          subheading='All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.'
        />
        <div>
          <PostsList posts={allPostsData}/>
        </div>  
      </main>
    </Layout>
  )
}
