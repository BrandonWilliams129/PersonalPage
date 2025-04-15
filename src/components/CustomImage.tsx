import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export default function CustomImage({ src, ...props }: CustomImageProps) {
  return <Image {...props} src={src} />;
}
