import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

export default function Index({ posts }: { posts: any }) {
  return (
    <>
      <Head>
        <title>Diego Ramos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="grid gap-2 p-4 text-xl font-mono italic font-semibold text-red-500 shadow-xl rounded-2xl bg-gray-800">
          {posts.map((post: any, idx: number) => (
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              key={idx}
            >
              <a>{post.data.title}</a>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  )
}
