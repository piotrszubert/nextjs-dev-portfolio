import { siteConfig } from "@/config/site"
import LinkList from "@/components/linksList"
import WorkCard from "@/components/workCard"
import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import { Separator } from "./ui/separator"
import { Fragment } from "react"

const colorVariant = siteConfig.accentColor.colorVariant
const { accentTextClass } = siteConfig.accentColor.colorVariants[colorVariant]

function PostCard(post: Post) {
  return (
    <div
      className={`relative space-y-3 hover:cursor-pointer hover:bg-accent ${
        "hover:" + accentTextClass
      } -m-3 max-w-xl rounded-xl p-3`}
    >
      <Link className="absolute inset-0" href={post.url}></Link>
      <h2 className="mb-1 text-xl font-bold">
          {post.title}
      </h2>
      <time
        dateTime={post.date}
        className="text-xs font-semibold text-muted-foreground"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <p className="flex gap-3 text-sm text-muted-foreground">
        {post.description}
      </p>
    </div>
  )
}

export function PostsList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="space-y-6">
      {posts.map((post, idx) => (
        <Fragment key={idx}>
          <PostCard {...post} />
          {idx !==  posts.length - 1 && (
            <Separator />
          )}
        </Fragment>
      ))}
    </div>
  )
}
