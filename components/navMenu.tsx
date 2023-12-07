import React from "react"
import Link from "next/link"
// import { useRouter } from 'next/router';
import { siteConfig } from "@/config/site"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  // { name: 'Uses', path: '/uses' },
]

const colorVariant = siteConfig.accentColor.colorVariant
const { accentTextClass } = siteConfig.accentColor.colorVariants[colorVariant]

type NavMenuProps = {
  flexDirection?: string
  gap?: string
  markActiveLink?: boolean
}

type linktType = {
  path?: string
  name?: string
}

export default function NavMenu({
  flexDirection = "flex-row",
  gap = "gap-3",
  markActiveLink = true,
}: NavMenuProps) {
  // const router = useRouter();

  // const markLink = (markActiveLink: boolean, link: linktType) => {
  //   if(markActiveLink) {
  //     if(router.pathname === link.path || router.pathname.startsWith('/blog/') && link.name === "Blog") {
  //       return "underline";
  //     } else {
  //       return '';
  //     }
  //   }
  // }

  return (
    <nav className={`flex justify-evenly ${flexDirection} ${gap}`}>
      {links.map((link, index) => (
        <Link
          className={`font-semibold ${"hover:" + accentTextClass}`}
          key={index}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
