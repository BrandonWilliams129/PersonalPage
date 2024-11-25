export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Handle external URLs (including OpenLibrary covers)
  if (src.startsWith('http')) {
    return src;
  }

  // Get the base path from environment
  const basePath = process.env.NODE_ENV === 'production' ? '/PersonalPage' : '';
  
  // Clean up the source path
  let cleanPath = src;
  // Remove /PersonalPage if it exists
  cleanPath = cleanPath.replace(/^\/PersonalPage\//, '');
  // Remove leading slash if it exists
  cleanPath = cleanPath.replace(/^\//, '');
  
  // For production (GitHub Pages), ensure the path starts with /PersonalPage
  return process.env.NODE_ENV === 'production'
    ? `${basePath}/${cleanPath}`
    : `/${cleanPath}`;
}
