import Layout from "@/components/layout";
import PageHero from "@/components/pageHero";
import { getAllPostIds, getPostData } from '@/lib/posts';

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
        {postData.date}
      </main>
    </Layout>
  );
}