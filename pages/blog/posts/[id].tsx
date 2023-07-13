import Layout from "@/components/layout";
import PageHero from "@/components/pageHero";
import { getAllPostIds, getPostData } from '@/lib/posts';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Heading2 = ({ children }: any) => {
  return <h2 className="border-b [&:not(:first-child)]:mt-6 pb-2 text-3xl text-foreground font-semibold tracking-tight transition-colors first:mt-0">{children}</h2>;
};

const Heading3 = ({ children }: any) => {
  return <h3 className="text-2xl [&:not(:first-child)]:mt-6 font-semibold text-foreground tracking-tight">{children}</h3>;
};

// Custom component for ul elements
const UnorderedList = ({ children }: any) => {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
};

const OrderedList = ({ children }: any) => {
  return <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>;
};

// Custom component for p elements
const Paragraph = ({ children }: any) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: any) {
  return(
    <Layout>
      <main>
        <PageHero
          heading={postData.heading} 
          subheading={postData.subheading}
        />
        {/* {postData.date} */}
        <ReactMarkdown
          className="text-muted-foreground"
          components={{
            h2: Heading2,
            h3: Heading3,
            ul: UnorderedList,
            ol: OrderedList,
            p: Paragraph,
          }}
          children={postData.content}
        />
      </main>
    </Layout>
  );
}