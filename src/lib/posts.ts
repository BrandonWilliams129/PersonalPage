import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serializeMDXContent } from './mdx'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content?: MDXRemoteSerializeResult
}

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const serializedContent = await serializeMDXContent(content)

    const post: BlogPost = {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content: serializedContent,
    }

    return post
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        const post: BlogPost = {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
        }

        return post
      })

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}
