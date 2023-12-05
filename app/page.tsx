import PageHero from "@/components/pageHero";
import { siteConfig  } from "@/config/site";
import LinkList from "@/components/linksList";
import PostsList from "@/components/postsList";
import WorkCard from "@/components/workCard";
import Link from "next/link";


import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}


export default function Home() {


    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    
    return(
        <main>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
            {/* <PostsList /> */}
          </div>  
          <div className='space-y-6 md:ps-10'>
            {/* <NewsletterCard/> */}
            <WorkCard/>
          </div>
        </div>
        </main>
    );
}