import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export default function CustomImage({ src, ...props }: CustomImageProps) {
  // Handle both absolute and relative URLs
  const imageSrc = src.startsWith('http')
    ? src
    : `https://brandonwilliams129.github.io/PersonalPage${src}`;

  return <Image {...props} src={imageSrc} />;
}
