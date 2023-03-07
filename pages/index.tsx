import { Carousel } from "../components/common/Carousel";
import { CarouselImage } from "../components/common/Carousel";
import { Title } from "../components/common/styles/sharedstyles";
import HouseFront from "../public/home/house_front.jpg";
import HouseSide from "../public/home/house_side.jpg";
import Restaurant from "../public/home/restaurant.jpg";
import Sign from "../public/home/sign.jpeg";

const carouselImages: CarouselImage[] = [
  { src: HouseFront, alt: "House Front" },
  { src: HouseSide, alt: "House Side" },
  { src: Restaurant, alt: "Restaurant" },
  { src: Sign, alt: "Sign" },
];

export const Home = () => {
  return (
    <>
      <Title>Welcome to the Dreamaway Lodge</Title>
      <Carousel images={carouselImages} />
    </>
  );
};

export default Home;
