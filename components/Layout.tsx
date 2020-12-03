import Nav from './Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-2xl my-4 leading-8 px-3 sm:px-0 text-lg space-y-4">
        {children}
      </main>
    </>
  )
}
