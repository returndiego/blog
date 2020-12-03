import Head from 'next/head'
import Layout from '../components/Layout'

export default function about() {
  return (
    <>
      <Head>
        <title>About Diego</title>
      </Head>
      <Layout>
        Diego graduated as an Electrical Engineer from NJIT in 2019. He is now
        developing his skills as a Full-Stack Web Developer using Next.js to
        create PWAs. He is confident that the JAM stack and PWAs are the future
        of web development.
      </Layout>
    </>
  )
}
