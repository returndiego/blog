import Nav from './Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-xl my-4 leading-8 px-3 sm:px-0">
        {children}
      </main>
    </>
  )
}
