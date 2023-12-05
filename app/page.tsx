import PageHero from "@/components/pageHero";
import { siteConfig  } from "@/config/site";
import LinkList from "@/components/linksList";
import PostsList from "@/components/postsList";
import WorkCard from "@/components/workCard";

export default function Home() {
    return(
        <main>
            <PageHero
            heading={siteConfig.pages.home.heading}
            subheading={siteConfig.pages.home.subheading}
          >
            <LinkList
              nameVisible={false}
              paddingClass='pb-3'
              flexDirectionClass='flex-row'
            />
          </PageHero>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            {/* <PostsList /> */}
          </div>  
          <div className='space-y-6 md:ps-10'>
            {/* <NewsletterCard/> */}
            <WorkCard/>
          </div>
        </div>
        </main>
    );
}