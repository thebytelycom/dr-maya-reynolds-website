import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string; // e.g. "object-top"
};

/** Image wrapper: the parent class controls aspect ratio and shape. */
export default function Photo({ src, alt, className = "", sizes, priority, position = "object-center" }: Props) {
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 40vw, 100vw"}
        priority={priority}
        className={`object-cover ${position}`}
      />
    </div>
  );
}
