import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Link from 'next/link'
import MDXContent from '@/components/mdx/MDXContent'

interface PageProps {
  params: {
    slug: string
  }
}

interface StaticParam {
  slug: string
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return (
      <div className="min-h-screen py-24">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
            <p className="text-[var(--foreground-muted)] mb-8">
              Sorry, the post you're looking for doesn't exist.
            </p>
            <Link 
              href="/blog" 
              className="button-primary inline-flex items-center gap-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-8"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <time 
              dateTime={post.date}
              className="text-lg text-[var(--foreground-muted)]"
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container-wrapper">
          <article className="prose prose-invert prose-lg max-w-4xl mx-auto">
            {post.content && (
              <MDXContent source={post.content} />
            )}
          </article>
        </div>
      </section>
    </div>
  )
}
