// ----------------------------------------------
// FIND THE TYPES FOR next-mdx-remote
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
// ----------------------------------------------

import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import path from 'path'
import Layout from '../shared/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import { Mark } from '../config/StyledTags'

const components = {
  Mark,
}

export const getStaticPaths = async () => {
  const paths = postFilePaths.map((path) => {
    // Remove file extensions for page paths
    const slug = path.replace(/\.mdx?$/, '')
    // Map the path into the static paths object required by Next.js
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  // Get the path of file to render
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  // Read the file synchronously
  const source = fs.readFileSync(postFilePath)
  // Use gray-matter
  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components })
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Layout>
        <div className="max-w-screen-sm space-y-5 w-full rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
          {content}
        </div>
      </Layout>
    </>
  )
}
