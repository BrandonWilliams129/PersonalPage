import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full height with background image/gradient */}
      <section className="min-h-screen relative flex items-center hero-gradient overflow-hidden">
        <div className="container-wrapper relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-7xl font-bold font-heading">
                Hi, I'm{' '}
                <span className="text-[var(--primary)] inline-block hover:scale-105 transition-transform cursor-default">
                  Brandon
                </span>
              </h1>
              <p className="text-2xl text-[var(--foreground-muted)] leading-relaxed">
                Precision Weld Technician crafting tomorrow's infrastructure—where technical expertise meets artistic precision. Passionate about music, technology, and continuous learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/music" className="button-primary">
                  Listen to My Music
                </Link>
                <Link href="/projects" className="button-primary bg-[var(--secondary)] hover:bg-[var(--primary)]">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-[var(--primary)]/20">
                <CustomImage
                  src="/images/profile.jpg"
                  alt="Brandon Williams"
                  width={600}
                  height={600}
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section - Grid of cards */}
      <section className="py-24 bg-[var(--secondary)]/10">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tesla Card */}
            <div className="card group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <CustomImage
                  src="/images/wintermute.jpg"
                  alt="Wintermute - Tesla Model 3"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Meet Wintermute</h3>
              <p className="text-[var(--foreground-muted)] mb-4">
                My Tesla Model 3, named after the AI from Neuromancer. More than just a car—it's my piece of the future.
              </p>
              <p className="text-[var(--primary)]">A perfect blend of tech and freedom →</p>
            </div>

            {/* Music Card */}
            <div className="card group">
              <div className="aspect-[3/2] rounded-xl overflow-hidden mb-6 bg-[var(--secondary)]/20">
                <CustomImage
                  src="/images/music.jpg"
                  alt="Music Production"
                  width={900}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Latest Music</h3>
              <p className="text-[var(--foreground-muted)] mb-4">
                Exploring new sounds with AI-assisted production and innovative sound design.
              </p>
              <Link href="/music" className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors">
                Listen Now →
              </Link>
            </div>

            {/* Reading Card */}
            <div className="card group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[var(--secondary)]/20">
                <CustomImage
                  src="/images/books.jpg"
                  alt="Reading Collection"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reading List</h3>
              <p className="text-[var(--foreground-muted)] mb-4">
                From sci-fi to philosophy, exploring ideas that shape our future.
              </p>
              <Link href="/reading" className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors">
                View Books →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - With background accent */}
      <section className="py-24">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p>
                I'm a creator at heart, always exploring the intersection of technology and art. Whether I'm coding, 
                making music, or diving into a new book, I bring curiosity and creativity to everything I do.
              </p>
              <p>
                Currently diving into Kissinger: A Biography by Walter Isaacson, while working on new music projects 
                and exploring the possibilities of AI in creative work. Life's an adventure, and I'm here to make it 
                count.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
