import Image from "next/image";
import { StaticImageData } from "next/image";
import { Carousel as ImageCarousel } from "react-responsive-carousel";

export type CarouselImage = {
  src: StaticImageData;
  alt: string;
};

export const Carousel = ({ images }: { images: CarouselImage[] }) => (
  <ImageCarousel
    showArrows={true}
    autoPlay={true}
    infiniteLoop={true}
    interval={4000}
    showIndicators={false}
    dynamicHeight={true}
  >
    {images.map((image, i) => (
      <div key={i}>
        <Image src={image.src} alt={image.alt} />
      </div>
    ))}
  </ImageCarousel>
);
