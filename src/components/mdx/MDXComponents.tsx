'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MDXComponents } from 'mdx/types';
import AudioPlayer from '../AudioPlayer';
import imageLoader from '@/lib/imageLoader';

const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <span className="block my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          loader={imageLoader}
          unoptimized
        />
      </div>
      {alt && (
        <span className="block text-sm text-center mt-2 text-[var(--foreground-muted)]">
          {alt}
        </span>
      )}
    </span>
  );
};

const CustomLink = ({ href, ...props }: any) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link 
        href={href} 
        {...props} 
        className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
      />
    );
  }

  return (
    <a
      href={href}
      {...props}
      className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

const components = {
  img: CustomImage,
  Image: CustomImage,
  a: CustomLink,
  Link: CustomLink,
  AudioPlayer
} as MDXComponents;

export { components as mdxComponents };
