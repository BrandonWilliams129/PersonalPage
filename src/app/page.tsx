import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-wrapper py-16">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="text-[var(--primary)]">Brandon</span>
              </h1>
              <div className="prose prose-invert prose-lg max-w-none mb-8">
                <p className="text-xl leading-relaxed text-[var(--foreground)]/90">
                  I'm a creator, a thinker, and a doer, always chasing the next big idea. Whether I'm writing songs, 
                  crafting games, or diving into cutting-edge tech, I bring a spark of creativity to everything I touch.
                </p>
                <p className="text-xl leading-relaxed text-[var(--foreground)]/90">
                  A fan of Teslas, indie music, and making things that matter, I'm all about blending art and innovation. 
                  Life's too short for boring—so I'm here to make it unforgettable.
                </p>
                <p className="text-xl leading-relaxed text-[var(--foreground)]/90">
                  Books are a big part of my inspiration, too. Right now, I'm diving into Kissinger: A Biography by Walter Isaacson, 
                  but some of my all-time favorites include Eric Berne's Games People Play, Neal Stephenson's Snow Crash, and 
                  Robert E. Howard's The Coming of Conan the Cimmerian. Whether it's philosophy, sci-fi, or creative advice like 
                  Steven Pressfield's The War of Art, great books keep me thinking, dreaming, and creating.
                </p>
                <p className="text-xl leading-relaxed text-[var(--foreground)]/90">
                  Check out my reading list for more—maybe you'll find something that sparks your next big idea too.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/music" className="button-primary">
                Listen to My Music
              </Link>
              <Link href="/projects" className="button-primary bg-[var(--secondary)] hover:bg-[var(--primary)]">
                View Projects
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-xl">
              <CustomImage
                src="/images/profile.jpg"
                alt="Wintermute - Brandon's Tesla Model 3"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)] text-[var(--foreground)]/90">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">Meet Wintermute</h3>
              <p className="leading-relaxed space-y-2">
                This is Wintermute, my Tesla Model 3, rocking a fresh coat of rain like it's flexing for a sci-fi movie. 
                Named after the AI from Neuromancer, this car isn't just something I drive—it feels alive.
              </p>
              <p className="leading-relaxed mt-2">
                The self-driving makes it more like a partner than a machine, always ready to take the wheel while I sit back 
                and just enjoy the ride. Owning this car is like owning a piece of the future, and honestly, it's the coolest 
                thing I've ever had.
              </p>
              <p className="leading-relaxed mt-2">
                Wintermute isn't just a car—it's freedom, it's tech, and it's everything I've ever wanted in one perfect package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container-wrapper py-16 bg-[var(--secondary)]">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Music */}
          <div className="p-6 rounded-lg bg-[var(--background)] border border-[var(--primary)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">AI Music</h2>
            <p className="mb-4">Explore my collection of AI-generated music created with Suno AI.</p>
            <Link href="/music" className="nav-link">
              Listen Now →
            </Link>
          </div>

          {/* Projects */}
          <div className="p-6 rounded-lg bg-[var(--background)] border border-[var(--primary)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Tech Projects</h2>
            <p className="mb-4">Check out my Godot games and other coding projects.</p>
            <Link href="/projects" className="nav-link">
              View Projects →
            </Link>
          </div>

          {/* Blog */}
          <div className="p-6 rounded-lg bg-[var(--background)] border border-[var(--primary)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Tech Analysis</h2>
            <p className="mb-4">Read my thoughts on Tesla, NVIDIA, and tech trends.</p>
            <Link href="/blog" className="nav-link">
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="container-wrapper py-16">
        <h2 className="section-title text-center">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://x.com/bitwise__" target="_blank" rel="noopener noreferrer" className="nav-link">
            X (Twitter)
          </a>
          <a href="https://www.instagram.com/branfurd/" target="_blank" rel="noopener noreferrer" className="nav-link">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/brandon-williams-00573a123/" target="_blank" rel="noopener noreferrer" className="nav-link">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
