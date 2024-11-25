export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Handle both absolute URLs and relative paths
  if (src.startsWith('http')) {
    return src;
  }
  
  // If path already includes /PersonalPage, don't add it again
  if (src.startsWith('/PersonalPage/')) {
    return src;
  }
  
  // Remove leading slash if present and add /PersonalPage prefix
  const path = src.startsWith('/') ? src.slice(1) : src;
  return `/PersonalPage/${path}`;
}
