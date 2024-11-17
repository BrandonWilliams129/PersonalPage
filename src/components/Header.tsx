import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[var(--background)] border-b border-[var(--secondary)] sticky top-0 z-50">
      <div className="container-wrapper py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
            Brandon Williams
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/music" className="nav-link">
              Music
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/reading" className="nav-link">
              Reading
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
