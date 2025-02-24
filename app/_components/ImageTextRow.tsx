import Image from 'next/image';

interface ImageTextRowProps {
  imageSrc: string;
  isReversed?: boolean;
  alt?: string;
  children: React.ReactNode;
}

export default function ImageTextRow({
  imageSrc,
  isReversed = false,
  alt = 'image',
  children,
}: ImageTextRowProps) {
  return (
    <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
      <Image src={imageSrc} alt={alt} />
      <div>{children}</div>
    </div>
  );
}
