import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from './shared/Layout'
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
        <div className="max-w-screen-sm space-y-5 w-full rounded-lg p-4 bg-gray-100 dark:bg-gray-900 shadow-lg">
          <section>
            <header>
              <h1 className="text-3xl font-semibold">Hi there!</h1>
            </header>
            <p className="mt-3">
              I'm Diego, a full-stack web developer and electrical engineer.
              This blog is a work in progress. Here's some of my works:
            </p>
          </section>
          <section>
            <header>
              <h1 className="text-xl font-semibold">Projects</h1>
            </header>
            <article className="ml-3 mt-3 space-y-2">
              <a
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Domilingo"
                href="https://github.com/Ramos-Diego/domilingo"
                className="block px-2 py-1 rounded-md hover:shadow-md focus:shadow-md focus:outline-none transition dark:hover:bg-gray-800 hover:bg-gray-50 dark:focus:bg-gray-800 focus:bg-gray-50"
              >
                <h1>Domilingo</h1>
                <p className="text-gray-600 dark:text-gray-300">
                  A dictionary of dominican slang.
                </p>
              </a>
            </article>
          </section>
          <section>
            <header>
              <h1 className="text-xl font-semibold">Posts</h1>
            </header>
            <article className="ml-3 mt-3 space-y-2">
              {posts.map((post: any, idx: number) => (
                <Link
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`}
                  key={idx}
                >
                  <a
                    aria-label={post.data.title}
                    href="#"
                    className="block px-2 py-1 rounded-md hover:shadow-md focus:shadow-md focus:outline-none transition dark:hover:bg-gray-800 hover:bg-gray-50 dark:focus:bg-gray-800 focus:bg-gray-50"
                  >
                    <dl>
                      <dt>{post.data.title}</dt>
                      <dd className="text-gray-600 dark:text-gray-300">
                        {post.data.description}
                      </dd>
                    </dl>
                  </a>
                </Link>
              ))}
            </article>
          </section>
        </div>
      </Layout>
    </>
  )
}
