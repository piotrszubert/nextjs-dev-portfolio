import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'
import LinkList from '@/components/linksList'
import WorkCard from '@/components/workCard'
import NewsletterCard from '@/components/newsletterCard'

import { getSortedPostsData } from '@/lib/posts';
import PostsList from '@/components/postsList'

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type postType = {
  id?: number,
  date?: string,
  title?: string
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({allPostsData}: any) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <PostsList posts={allPostsData}/>
          </div>  
          <div className='space-y-6 md:ps-10'>
            <NewsletterCard/>
            <WorkCard/>
          </div>
        </div>
      </main>
    </Layout>
  )
}
