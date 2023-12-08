import React, { ReactNode } from "react"

type PageHeroProps = {
  heading?: string
  subheading?: string
  children?: ReactNode
}

export const PageHero = ({
  heading = "Default heading",
  subheading = "Default subheading",
  children,
}: PageHeroProps) => {
  return (
    <>
      <div className="max-w-2xl py-16">
        <h1 className="text-5xl font-extrabold tracking-tight">{heading}</h1>
        <p className="mt-6 leading-7 text-muted-foreground">{subheading}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </>
  )
}
