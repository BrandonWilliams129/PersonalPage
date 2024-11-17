import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brandon Williams',
  description: 'Creator, Thinker, and Tech Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
