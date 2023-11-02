import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Merve. I'm a chemical engineer and learning software development. You can find more about me {' '}
          <Link href="/posts/first-post">here!</Link>
        </p>
        <p>
          (This is a sample website - I'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>)
        </p>
      </section>
    </Layout>
  );
}