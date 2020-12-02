import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-2 border-b-2 border-red-500">
      <Link href="/">
        <a className="font-semibold">Diego Ramos</a>
      </Link>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Ramos-Diego"
        className="font-semibold py-1 px-2 rounded bg-black text-red-400"
      >
        GitHub
      </a>
    </nav>
  )
}
