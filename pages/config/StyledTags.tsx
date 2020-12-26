export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl font-semibold">{children}</h1>
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-medium">{children}</h2>
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold">{children}</h3>
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 leading-8">{children}</p>
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="select-all overflow-x-auto font-mono inline px-2 py-1 bg-black text-white rounded">
      {children}
    </code>
  )
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid">
      <code className="select-all font-mono overflow-x-auto block p-2 bg-black text-white rounded">
        <pre>{children}</pre>
      </code>
    </div>
  )
}

export function Table({ children }: { children: React.ReactNode }) {
  return <table className="table-auto">{children}</table>
}

export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="list-decimal list-inside">
      <p className="inline-block">{children}</p>
    </li>
  )
}

export function Ol({ children }: { children: React.ReactNode }) {
  return <ol className="ml-6">{children}</ol>
}

export function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="inline-block px-2 py-1 rounded bg-yellow-200">
      {children}
    </mark>
  )
}
