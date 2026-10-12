import Image from 'next/image';

type PhotoStripProps = {
  photos: { src: string; alt: string; position?: string }[];
};

const PhotoStrip = ({ photos }: PhotoStripProps) => (
  <div className="grid grid-cols-3 gap-0.5 bg-black">
    {photos.map(({ src, alt, position }) => (
      <div key={src} className="relative h-[clamp(130px,22cqw,340px)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="33vw"
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    ))}
  </div>
);

export default PhotoStrip;
