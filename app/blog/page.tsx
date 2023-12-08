import { PostsList } from "@/components/postsList"
import { PageHero } from "@/components/pageHero"
import { siteConfig } from "@/config/site"

export default function BlogPage() {
  return (
    <main>
      <PageHero
        heading={siteConfig.pages.blog.heading}
        subheading={siteConfig.pages.blog.subheading}
      />
      <PostsList />
    </main>
  )
}
