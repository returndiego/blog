export default function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="inline-block px-2 py-1 rounded bg-yellow-200">
      {children}
    </mark>
  )
}
