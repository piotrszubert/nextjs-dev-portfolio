import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import Link from "next/link"

const colorVariant = siteConfig.accentColor.colorVariant
const { accentTextClass, accentBorderClass } =
  siteConfig.accentColor.colorVariants[colorVariant]

const projects = siteConfig.projects

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`relative border-s-2 hover:cursor-pointer hover:bg-accent ${
            "hover:" + accentBorderClass
          } ${"hover:" + accentTextClass} rounded-xl p-3`}
        >
          {/* stretched link */}
          <Link
            className="absolute inset-0"
            href={"https://" + project.url}
            target="_blank"
          ></Link>
          <div className="space-y-6">
            <div className="text-lg font-semibold text-foreground">
              {project.title}
            </div>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="">
              <span className="flex gap-3">
                <ExternalLink />
                {project.url}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
