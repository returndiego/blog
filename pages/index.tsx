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
      </Head>
      <Layout>
        <div>
          <h1 className="text-3xl mb-3 font-sans">Projects</h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Ramos-Diego/domilingo"
            className="font-bold italic"
          >
            Domilingo
          </a>
          <p className="inline-block ml-2">A dicitionary of dominican slang.</p>
        </div>
        <div>
          <h1 className="text-3xl mb-3 font-sans">Posts</h1>
          <div>These are my notes on how to setup servers for CI/CD</div>
          <div className="grid gap-3 py-4 text-red-500">
            {posts.map((post: any, idx: number) => (
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                key={idx}
              >
                <a className="p-4 bg-black hover:bg-opacity-60 rounded hover:text-red-300">
                  {post.data.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
