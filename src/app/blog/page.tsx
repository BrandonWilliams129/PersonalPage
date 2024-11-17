import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container-wrapper py-16">
      <h1 className="section-title">Blog Posts</h1>
      <div className="grid gap-8">
        {posts.map(post => (
          <article key={post.slug} className="bg-[var(--secondary)] p-6 rounded-lg border border-[var(--primary)]">
            <h2 className="text-2xl font-bold mb-2 text-[var(--primary)]">
              <Link href={`/blog/${post.slug}`} className="hover:text-[var(--primary-hover)] transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-[var(--foreground)]/60 mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-[var(--foreground)]/90 mb-4">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="nav-link">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
