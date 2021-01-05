import Nav from './Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-lg sm:text-base bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <Nav />
      <main className="grid justify-items-center pb-7">
        <div className="max-w-screen-sm space-y-5 w-full rounded-lg p-4 bg-gray-100 dark:bg-gray-900">
          {children}
        </div>
      </main>
    </div>
  )
}
