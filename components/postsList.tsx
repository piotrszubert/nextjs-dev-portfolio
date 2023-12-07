import { siteConfig  } from "@/config/site";
import LinkList from "@/components/linksList";
import WorkCard from "@/components/workCard";
import Link from "next/link";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

const colorVariant = siteConfig.accentColor.colorVariant;
const { accentTextClass } = siteConfig.accentColor.colorVariants[colorVariant];


function PostCard(post: Post) {
  return (
    <div className={`space-y-3 relative hover:cursor-pointer hover:bg-accent ${'hover:' + accentTextClass} rounded-xl p-3 -m-3 max-w-xl`}>
      <h2 className="mb-1 text-xl">
        <Link href={post.url}>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="text-xs text-muted-foreground font-semibold">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p className="flex gap-3 text-muted-foreground text-sm">
        {post.description}
      </p>
    </div>
  )
}


export function PostsList() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return(
      <div className="space-y-6">
        {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
        ))}
      </div>  
    );
}