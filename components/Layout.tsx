import Nav from './Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-screen-md p-4 my-4 text-xl space-y-4 bg-gray-900 rounded-xl">
        {children}
      </main>
    </>
  )
}
