import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="container-wrapper">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-8">
            Thoughts & Stories
          </h1>
          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-3xl">
            Exploring ideas at the intersection of technology, creativity, and personal growth.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[var(--secondary)]/10">
        <div className="container-wrapper">
          <div className="grid gap-8">
            {posts.map(post => (
              <article 
                key={post.slug} 
                className="group bg-[var(--secondary)]/20 rounded-xl overflow-hidden hover:bg-[var(--secondary)]/30 transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block p-8 hover:no-underline">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
                    <h2 className="text-3xl font-bold text-[var(--primary)] group-hover:text-[var(--primary-hover)] transition-colors">
                      {post.title}
                    </h2>
                    <div className="h-px md:h-8 md:w-px bg-[var(--primary)]/20 md:mx-4"></div>
                    <time 
                      dateTime={post.date}
                      className="text-[var(--foreground-muted)] text-lg"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  <p className="text-[var(--foreground-muted)] text-lg mb-6 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center text-[var(--primary)] group-hover:text-[var(--primary-hover)] transition-colors">
                    <span className="mr-2">Read Article</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-[var(--foreground-muted)] mb-4">
                No Posts Yet
              </h3>
              <p className="text-[var(--foreground-muted)]">
                Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
