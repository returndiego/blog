import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { MDXProvider } from '@mdx-js/react'
import {
  H1,
  H2,
  H3,
  P,
  InlineCode,
  Code,
  Table,
  Li,
  Ol,
} from '../components/StyledTags'
import Head from 'next/head'

// MDX providers let's us choose how the corresponding markdown is rendered
// So instead of # Hello -> <h1>Hello</h1>
// It will be # Hello -> <MyH1>Hello</MyH1>
const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  inlineCode: InlineCode,
  code: Code,
  table: Table,
  li: Li,
  ol: Ol,
}
// https://mdxjs.com/getting-started/#mdxprovider

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Diego Ramos' Blog" />
        <meta name="keywords" content="Blog" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
        <meta name="theme-color" content="#ef4444" />
      </Head>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}

export default MyApp
