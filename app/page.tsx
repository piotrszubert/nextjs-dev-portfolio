import PageHero from "@/components/pageHero"
import { siteConfig } from "@/config/site"
import LinkList from "@/components/linksList"
import WorkCard from "@/components/workCard"
import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import { PostsList } from "@/components/postsList"

const colorVariant = siteConfig.accentColor.colorVariant
const { accentTextClass } = siteConfig.accentColor.colorVariants[colorVariant]

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <main>
      <PageHero
        heading={siteConfig.pages.home.heading}
        subheading={siteConfig.pages.home.subheading}
      >
        <LinkList
          nameVisible={false}
          paddingClass="pb-3"
          flexDirectionClass="flex-row"
        />
      </PageHero>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <PostsList limit={2} />
        <div className="space-y-6 md:ps-10">
          {/* <NewsletterCard/> */}
          <WorkCard />
        </div>
      </div>
    </main>
  )
}
