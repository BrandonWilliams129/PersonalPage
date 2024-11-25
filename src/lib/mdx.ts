import { serialize } from 'next-mdx-remote/serialize';

export async function serializeMDXContent(content: string) {
  if (!content) return '';
  
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    },
  });

  return mdxSource;
}
