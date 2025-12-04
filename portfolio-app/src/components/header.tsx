export default function Header() {
  return (
    <header style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} My Next App</p>
    </header>
  );
}