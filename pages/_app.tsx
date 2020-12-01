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
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
