import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  link: string;
  className?: string;
  backgroundImage?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  link,
  className,
  backgroundImage,
}) => {
  return (
    <Card
      className={`p-6 shadow-md relative rounded-none ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`absolute inset-0 ${
          backgroundImage ? "bg-black/60" : ""
        } z-0`}
      ></div>
      <div className="relative z-10">
        <CardHeader>
          <h2 className="font-extrabold text-2xl text-foreground">{title}</h2>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter>
          <Link
            href={link}
            target="_blank"
            className="hover:underline flex items-center gap-1"
          >
            View on GitHub <ExternalLink />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default InfoCard;
