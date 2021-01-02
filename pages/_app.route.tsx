import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import GoogleFonts from 'next-google-fonts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab&display=swap" />
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
