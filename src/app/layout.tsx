import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import BackgroundEffects from '../components/BackgroundEffects';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Brandon Williams',
  description: 'Personal website of Brandon Williams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)]`}>
      <body className="min-h-screen font-sans">
        <BackgroundEffects />
        <Header />
        <main className="relative pt-[72px]">
          {children}
        </main>
      </body>
    </html>
  );
}
