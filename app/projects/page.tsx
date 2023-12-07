import PageHero from "@/components/pageHero"
import { siteConfig } from "@/config/site"
import ProjectsList from "@/components/projectsList"

export default function Projects() {
    return(
    <main>
        <PageHero
          heading={siteConfig.pages.projects.heading}
          subheading={siteConfig.pages.projects.subheading}
        />
        <ProjectsList/>
      </main>
    )
}