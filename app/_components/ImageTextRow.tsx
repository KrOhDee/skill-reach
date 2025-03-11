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
    <div
      className={`lg:flex flex-1 items-center gap-5 ${
        isReversed ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className='lg:w-1/3 flex justify-center'>
        <Image src={imageSrc} alt={alt} width={250} height={250} />
      </div>
      <div className='lg:w-2/3 text-xl'>{children}</div>
    </div>
  );
}
