import Image from "next/image";
import { Card } from "./ui/card";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => {
  return (
    <Card className={`overflow-hidden rounded-none ${className} relative`}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </Card>
  );
};

export default ImageCard;
