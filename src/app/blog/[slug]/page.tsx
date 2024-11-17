import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { mdxComponents } from '@/components/mdx/MDXComponents';

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container-wrapper py-16">
        <h1 className="section-title">Post Not Found</h1>
        <p className="mb-4">Sorry, the post you're looking for doesn't exist.</p>
        <Link href="/blog" className="nav-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container-wrapper py-16">
      <Link href="/blog" className="nav-link mb-8 inline-block">
        ← Back to Blog
      </Link>
      
      <article className="prose prose-invert prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-[var(--primary)]">{post.title}</h1>
        <p className="text-[var(--foreground)]/60 mb-8">{new Date(post.date).toLocaleDateString()}</p>
        <div className="mt-8">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
