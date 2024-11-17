import Image from 'next/image';
import { MDXComponents } from 'mdx/types';
import React from 'react';
import AudioPlayer from '../AudioPlayer';

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CustomImage = ({ src, alt, width, height }: CustomImageProps) => {
  // Handle both absolute and relative URLs
  const imageSrc = src.startsWith('http') ? src : `/PersonalPage${src}`;

  // Create a wrapper that's not inside a <p> tag
  return (
    <>
      <div className="relative w-full my-8">
        <div className="relative h-[400px] w-full">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      </div>
      {alt && <p className="text-sm text-center mt-2 mb-8 text-[var(--foreground)]/60">{alt}</p>}
    </>
  );
};

export const mdxComponents: MDXComponents = {
  // Override the default paragraph rendering for images
  p: ({ children }) => {
    const isImage = React.Children.toArray(children).some(
      child => React.isValidElement(child) && child.type === CustomImage
    );
    
    if (isImage) {
      return <>{children}</>;
    }
    
    return <p>{children}</p>;
  },
  img: CustomImage as any,
  Image: CustomImage as any,
  AudioPlayer: AudioPlayer as any,
};
