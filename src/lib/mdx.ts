import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function serializeMDXContent(content: string): Promise<MDXRemoteSerializeResult> {
  if (!content) {
    return await serialize('');
  }
  
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    },
  });

  return mdxSource;
}
