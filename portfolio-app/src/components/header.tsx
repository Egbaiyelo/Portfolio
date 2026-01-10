export function Header() {
  return (
    <header style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} My Next App</p>
    </header>
  );
}

export function SectionHeading({ heading }: { heading: string }) {

  return (
    <div className="mb-8">
      <h1 className="capitalize text-3xl font-bold text-white mb-2">{heading}</h1>
      <div className="h-2 w-24 bg-yellow-400 rounded-br-2xl"></div>
    </div>
  )
}