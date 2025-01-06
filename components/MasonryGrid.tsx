import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

enum MansoryCardType {
  IMAGE = "image",
  INFO = "info",
}

type mansoryCard = {
  type: MansoryCardType;
  image?: string;
  title?: string;
  desc?: string;
  className?: string;
  link?: string;
  backgroundImage?: string;
};

const Masonry: React.FC = () => {
  const mansoryCards: mansoryCard[] = [
    {
      type: MansoryCardType.IMAGE,
      image: "/images/pinkPlanty.jpg",
      className: "col-span-1 row-span-2",
    },
    {
      type: MansoryCardType.INFO,
      title: "Spring Boot (Java 17)",
      desc: "A gallerist project that can able to sell a car",
      link: "https://github.com/bedirhan-1/gallerist",
      className: "col-span-2 row-span-2",
      backgroundImage: "/images/teapot.jpg",
    },
    {
      type: MansoryCardType.INFO,
      title: "Offline Map (Intern project)",
      desc: "",
      link: "https://github.com/bedirhan-1/offline-map",
      className: "col-span-1 row-span-3",
      backgroundImage: "/images/flamingo.jpg",
    },
    {
      type: MansoryCardType.INFO,
      title: "Next.js Project",
      desc: "An interactive Next.js project that pushes the limits of SSR and static generation.",
      link: "https://github.com/bedirhan-1/nextjs-project",
      className: "row-span-1 col-span-2",
      backgroundImage: "/images/cheetah.jpg",
    },

    {
      type: MansoryCardType.IMAGE,
      image: "/images/woman.jpg",
      className: "row-span-2 col-span-1",
    },
    {
      type: MansoryCardType.INFO,
      title: "Frontend Intern 2",
      desc: "A mobile app project built with React Native, designed for cross-platform use.",
      link: "https://github.com/bedirhan-1/react-native",
      className: "col-span-1 row-span-1",
    },
    {
      type: MansoryCardType.IMAGE,
      image: "/images/herons.png",
      className: "col-span-1 row-span-1",
    },
    {
      type: MansoryCardType.INFO,
      title: "Frontend Intern 1",
      desc: "A mobile app project built with React Native, designed for cross-platform use.",
      link: "https://github.com/bedirhan-1/react-native",
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {mansoryCards.map((card, index) =>
        card.type === MansoryCardType.IMAGE ? (
          <ImageCard
            key={index}
            src={card.image!}
            alt={card.title || "Project Image"}
            className={card.className}
          />
        ) : (
          <InfoCard
            key={index}
            title={card.title!}
            description={card.desc!}
            link={card.link!}
            className={card.className}
            backgroundImage={card.backgroundImage}
          />
        )
      )}
    </div>
  );
};

export default Masonry;
