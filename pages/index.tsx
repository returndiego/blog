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
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Ramos-Diego/dominilingo"
          className="block font-bold"
        >
          Check out my latest creation:{' '}
          <span className="italic underline">Dominilingo</span>
        </a>
        <div>These are my notes on how to setup servers for CI/CD</div>
        <div className="grid gap-3 p-4 text-xl font-mono italic font-semibold text-red-500 ring-2 ring-red-500 rounded-2xl">
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
        <div>
          This is a progressive web application (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://en.wikipedia.org/wiki/Progressive_web_application#Characteristics"
            className="underline
          "
          >
            PWA
          </a>
          ).
        </div>
      </Layout>
    </>
  )
}
