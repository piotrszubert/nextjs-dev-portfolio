import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // Add a custom component.
  Image: ({ src, alt, width, height }) => (
    <Image src={src} width={width} height={height} alt={alt} />
  ),
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
  return { title: `${post.title}` }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <main className="py-8">
      <article className="prose prose-lg prose-stone mx-auto max-w-xl py-8 dark:prose-invert">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-sm">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className="mb-12 text-5xl font-bold">{post.title}</h1>
        </div>
        <MDXContent components={mdxComponents} />
      </article>

      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/">See all posts</Link>
        </Button>
      </div>
    </main>
  )
}
