export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Handle external URLs (including OpenLibrary covers)
  if (src.startsWith('http')) {
    return src;
  }

  // For production (GitHub Pages), add /PersonalPage prefix if not present
  if (process.env.NODE_ENV === 'production' && !src.startsWith('/PersonalPage')) {
    // Remove any leading slash
    const cleanPath = src.startsWith('/') ? src.slice(1) : src;
    return `/PersonalPage/${cleanPath}`;
  }

  // Return the path as is for development or if it already has the prefix
  return src;
}
