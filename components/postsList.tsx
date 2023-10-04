import React, { Fragment } from 'react';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
const colorVariant = siteConfig.accentColor.colorVariant;
const { accentTextClass } = siteConfig.accentColor.colorVariants[colorVariant];

type PostType = {
  id?: number,
  date?: string,
  heading?: string,
  subheading?: string
}

type PostsListProps = {
  posts: PostType[]
}

export default function PostsList({ posts }: PostsListProps) {
  
  return (
    <div className="space-y-6">
      {posts.map(({ id, date, heading, subheading }: PostType, index: number) => (
        <Fragment key={index}>
          <div key={id} className='flex gap-3 flex-wrap sm:flex-nowrap'>
            <Link
              className='max-w-lg'
              href={`blog/posts/${id}`}
            >
              <div
                className={`space-y-3 relative hover:cursor-pointer hover:bg-accent ${'hover:' + accentTextClass} rounded-xl p-3`}
              >
                <div className="font-semibold tracking-tight text-lg">
                  {heading}
                </div>
                <p className="text-xs text-muted-foreground font-semibold">
                  {date}
                </p>
                <p className="flex gap-3 text-muted-foreground text-sm">
                  {subheading}
                </p>
              </div>
            </Link>
          </div>
          {index !== posts.length - 1 && (
            <div className="mt-6">
              <Separator className='my-6' />
            </div>)}
        </Fragment>
      ))}
    </div>
  );
}
