const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="font-heading tracking-wider text-3xl font-semibold">
    {children}
  </h1>
)

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-medium">{children}</h2>
)

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-semibold">{children}</h3>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 leading-8">{children}</p>
)

const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="select-all overflow-x-auto font-mono inline px-2 py-1 bg-black text-white rounded">
    {children}
  </code>
)

const Code = ({ children }: { children: React.ReactNode }) => (
  <div className="grid">
    <code className="select-all font-mono overflow-x-auto block p-2 bg-black text-white rounded">
      <pre>{children}</pre>
    </code>
  </div>
)

const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="table-auto">{children}</table>
)

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="list-decimal list-inside">
    <p className="inline-block">{children}</p>
  </li>
)

const Ol = ({ children }: { children: React.ReactNode }) => (
  <ol className="ml-6">{children}</ol>
)

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  inlineCode: InlineCode,
  code: Code,
  table: Table,
  li: Li,
  ol: Ol,
}

export default components
