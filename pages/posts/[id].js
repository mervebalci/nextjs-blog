import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
// paths contains the array of known paths returned by getAllPostIds(), 
// which include the params defined by pages/posts/[id].js. 

export async function getStaticProps() {
  // Fetch necessary data for the blog post using params.id
}