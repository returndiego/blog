import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-2 border-b-2 border-red-500">
      <Link href="/">
        <a>Diego Ramos</a>
      </Link>
    </header>
  )
}
