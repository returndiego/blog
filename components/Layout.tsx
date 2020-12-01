import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-xl my-4 leading-8">{children}</div>
    </>
  )
}
