import { PageHero } from "@/components/pageHero"
import { siteConfig } from "@/config/site"
import { LinkList } from "@/components/linksList"
import { WorkCard } from "@/components/workCard"
import { PostsList } from "@/components/postsList"

export default function Home() {
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
        <div className="space-y-6">
          <PostsList limit={2} />
        </div>
        <div className="space-y-6 md:ps-10">
          <WorkCard />
        </div>
      </div>
    </main>
  )
}
