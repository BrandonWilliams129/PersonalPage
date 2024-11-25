export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Handle external URLs
  if (src.startsWith('http')) {
    return src;
  }

  // Get the base path from environment
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/PersonalPage';
  
  // Clean up the source path
  let cleanPath = src;
  // Remove /PersonalPage if it exists
  cleanPath = cleanPath.replace(/^\/PersonalPage\//, '');
  // Remove leading slash if it exists
  cleanPath = cleanPath.replace(/^\//, '');
  
  // Combine with base path
  return `${basePath}/${cleanPath}`;
}
